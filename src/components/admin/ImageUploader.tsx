import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Upload, Trash, Image as ImageIcon } from "@phosphor-icons/react"
import { toast } from "sonner"

interface ImageUploaderProps {
  label: string
  value: string | undefined
  onChange: (value: string | undefined) => void
  aspectRatio?: "square" | "wide" | "portrait"
  maxSizeMB?: number
}

export function ImageUploader({
  label,
  value,
  onChange,
  aspectRatio = "square",
  maxSizeMB = 2,
}: ImageUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith("image/")) {
      toast.error("Por favor, selecione um arquivo de imagem válido")
      return
    }

    if (file.size > maxSizeMB * 1024 * 1024) {
      toast.error(`A imagem deve ter no máximo ${maxSizeMB}MB`)
      return
    }

    setIsLoading(true)
    const reader = new FileReader()

    reader.onload = (event) => {
      const img = new Image()
      img.onload = () => {
        const canvas = document.createElement("canvas")
        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let width = img.width
        let height = img.height
        const maxDimension = 1200

        if (width > height) {
          if (width > maxDimension) {
            height = (height * maxDimension) / width
            width = maxDimension
          }
        } else {
          if (height > maxDimension) {
            width = (width * maxDimension) / height
            height = maxDimension
          }
        }

        canvas.width = width
        canvas.height = height
        ctx.drawImage(img, 0, 0, width, height)

        const base64 = canvas.toDataURL("image/jpeg", 0.85)
        onChange(base64)
        setIsLoading(false)
        toast.success("Imagem carregada com sucesso!")
      }

      img.onerror = () => {
        toast.error("Erro ao carregar a imagem")
        setIsLoading(false)
      }

      img.src = event.target?.result as string
    }

    reader.onerror = () => {
      toast.error("Erro ao ler o arquivo")
      setIsLoading(false)
    }

    reader.readAsDataURL(file)
  }

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
    fileInputRef.current?.click()
  }

  const handleRemove = () => {
    onChange(undefined)
    toast.success("Imagem removida")
  }

  const aspectRatioClass = {
    square: "aspect-square",
    wide: "aspect-video",
    portrait: "aspect-[3/4]",
  }[aspectRatio]

  return (
    <div className="space-y-2">
      <Label className="text-base font-semibold">{label}</Label>
      {value ? (
        <Card className="overflow-hidden">
          <div className={`relative ${aspectRatioClass} w-full`}>
            <img
              src={value}
              alt={label}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 flex gap-2">
            <Button
              type="button"
              onClick={handleClick}
              variant="outline"
              className="flex-1"
              disabled={isLoading}
            >
              <ImageIcon className="mr-2" size={16} />
              Alterar Imagem
            </Button>
            <Button
              type="button"
              variant="destructive"
              onClick={handleRemove}
              disabled={isLoading}
            >
              <Trash size={16} />
            </Button>
          </div>
        </Card>
      ) : (
        <Card className="border-2 border-dashed hover:border-primary/50 transition-colors">
          <button
            type="button"
            onClick={handleClick}
            disabled={isLoading}
            className={`w-full ${aspectRatioClass} flex flex-col items-center justify-center gap-2 p-8 text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50`}
          >
            <Upload size={48} weight="thin" />
            <p className="text-sm font-medium">
              {isLoading ? "Carregando..." : "Clique para fazer upload"}
            </p>
            <p className="text-xs">
              Tamanho máximo: {maxSizeMB}MB
            </p>
          </button>
        </Card>
      )}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  )
}
