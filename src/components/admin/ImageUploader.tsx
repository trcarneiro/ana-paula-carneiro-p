import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Upload, Trash, Image as ImageIcon } from "@phosphor-icons/react"
import { toast } from "sonner"

interface ImageUploaderProps {
  value?: string
  onChange: (value: string | undefined) => void
  label: string
  aspectRatio?: "square" | "portrait" | "wide"
  maxSizeMB?: number
}

export function ImageUploader({
  value,
  onChange,
  label,
  aspectRatio = "square",
  maxSizeMB = 5
}: ImageUploaderProps) {
  const [isLoading, setIsLoading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith("image/")) {
      toast.error("Por favor, selecione uma imagem válida")
      return
    }

    if (file.size > maxSizeMB * 1024 * 1024) {
      toast.error(`A imagem deve ter no máximo ${maxSizeMB}MB`)
      return
    }

    setIsLoading(true)

    const reader = new FileReader()
    reader.onload = (e) => {
      const img = new Image()
      img.onload = () => {
        const canvas = document.createElement("canvas")
        const ctx = canvas.getContext("2d")
        if (!ctx) {
          toast.error("Erro ao processar imagem")
          setIsLoading(false)
          return
        }

        const maxDimension = 1200
        let width = img.width
        let height = img.height

        if (width > maxDimension || height > maxDimension) {
          if (width > height) {
            width = maxDimension
            height = (img.height * maxDimension) / img.width
          } else {
            height = maxDimension
            width = (img.width * maxDimension) / img.height
          }
        }

        canvas.width = width
        canvas.height = height
        ctx.drawImage(img, 0, 0, width, height)

        const dataUrl = canvas.toDataURL("image/jpeg", 0.85)
        onChange(dataUrl)
        setIsLoading(false)
        toast.success("Imagem carregada com sucesso!")
      }
      img.onerror = () => {
        toast.error("Erro ao carregar imagem")
        setIsLoading(false)
      }
      img.src = e.target?.result as string
    }
    reader.readAsDataURL(file)
  }

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  const handleRemove = () => {
    onChange(undefined)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
    toast.success("Imagem removida")
  }

  const aspectRatioClass = {
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    wide: "aspect-[16/9]"
  }[aspectRatio]

  return (
    <div className="space-y-3">
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
          <div className="p-3 flex gap-2">
            <Button
              type="button"
              size="sm"
              variant="secondary"
              onClick={handleUploadClick}
              disabled={isLoading}
              className="gap-2 flex-1"
            >
              <Upload size={16} weight="bold" />
              Alterar
            </Button>
            <Button
              type="button"
              size="sm"
              variant="destructive"
              onClick={handleRemove}
              className="gap-2 flex-1"
            >
              <Trash size={16} weight="bold" />
              Remover
            </Button>
          </div>
        </Card>
      ) : (
        <Card
          className={`${aspectRatioClass} w-full flex items-center justify-center cursor-pointer hover:bg-muted/50 transition-colors`}
          onClick={handleUploadClick}
        >
          <div className="text-center p-8">
            <ImageIcon size={48} weight="duotone" className="mx-auto mb-3 text-muted-foreground" />
            <p className="text-sm text-muted-foreground mb-2">
              Clique para fazer upload
            </p>
            <p className="text-xs text-muted-foreground">
              Máximo {maxSizeMB}MB
            </p>
          </div>
        </Card>
      )}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
      />
    </div>
  )
}
