import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Upload, Trash } from "@phosphor-icons/react"
import { toast } from "sonner"

interface ImageUploaderProps {
  label: string
  value: string | undefined
  onChange: (value: string | undefined) => void
  aspectRatio?: "square" | "portrait"
  maxSizeMB?: number
}

export function ImageUploader({
  label,
  value,
  onChange,
  aspectRatio = "square",
  maxSizeMB = 5,
}: ImageUploaderProps) {
  const [isLoading, setIsLoading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith("image/")) {
      toast.error("Por favor, selecione um arquivo de imagem válido")
      return
    }

    const maxSizeBytes = maxSizeMB * 1024 * 1024
    if (file.size > maxSizeBytes) {
      toast.error(`A imagem deve ter no máximo ${maxSizeMB}MB`)
      return
    }

    setIsLoading(true)

    const reader = new FileReader()
    reader.onload = (event) => {
      const img = new Image()
      img.onload = () => {
        const maxDimension = 1200
        let width = img.width
        let height = img.height

        if (width > maxDimension || height > maxDimension) {
          if (width > height) {
            height = (height / width) * maxDimension
            width = maxDimension
          } else {
            width = (width / height) * maxDimension
            height = maxDimension
          }
        }

        const canvas = document.createElement("canvas")
        canvas.width = width
        canvas.height = height
        const ctx = canvas.getContext("2d")

        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height)
          const base64 = canvas.toDataURL("image/jpeg", 0.9)
          onChange(base64)
        }

        setIsLoading(false)
      }

      img.onerror = () => {
        toast.error("Erro ao processar a imagem")
        setIsLoading(false)
      }

      img.src = event.target?.result as string
    }

    reader.onerror = () => {
      toast.error("Erro ao ler o arquivo")
      setIsLoading(false)
    }

    reader.readAsDataURL(file)

    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleRemove = () => {
    onChange(undefined)
  }

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  const aspectRatioClass = {
    square: "aspect-square",
    portrait: "aspect-[3/4]",
  }[aspectRatio]

  return (
    <div className="space-y-3">
      <Label className="text-base font-semibold">{label}</Label>
      {value ? (
        <Card className="overflow-hidden">
          <div className={`relative w-full ${aspectRatioClass}`}>
            <img
              src={value}
              className="w-full h-full object-cover"
              alt={label}
            />
          </div>
          <div className="p-4 flex gap-2">
            <Button
              type="button"
              size="sm"
              onClick={handleClick}
              className="flex-1 gap-2"
            >
              <Upload weight="bold" />
              Trocar Imagem
            </Button>
            <Button
              type="button"
              variant="destructive"
              size="sm"
              onClick={handleRemove}
              className="gap-2"
            >
              <Trash weight="bold" />
              Remover
            </Button>
          </div>
        </Card>
      ) : (
        <Card
          className="border-2 border-dashed cursor-pointer hover:bg-muted/50 transition-colors"
          onClick={handleClick}
        >
          <div className={`flex flex-col items-center justify-center gap-3 p-8 ${aspectRatioClass}`}>
            <Upload size={48} className="text-muted-foreground" weight="duotone" />
            <div className="text-center">
              <p className="text-sm font-medium">Clique para fazer upload</p>
              <p className="text-xs text-muted-foreground mt-1">
                Tamanho máximo: {maxSizeMB}MB
              </p>
            </div>
          </div>
        </Card>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        disabled={isLoading}
      />
    </div>
  )
}
