import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Upload, Image as ImageIcon, Trash } from "@phosphor-icons/react"
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
  maxSizeMB = 2,
}: ImageUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (file.size > maxSizeMB * 1024 * 1024) {
      toast.error(`A imagem deve ter no máximo ${maxSizeMB}MB`)
      return
    }

    if (!file.type.startsWith("image/")) {
      toast.error("Por favor, selecione uma imagem válida")
      return
    }

    setIsLoading(true)

    try {
      const reader = new FileReader()
      reader.onload = (event) => {
        const img = new Image()
        img.onload = () => {
          const canvas = document.createElement("canvas")
          const ctx = canvas.getContext("2d")
          if (!ctx) {
            setIsLoading(false)
            toast.error("Erro ao processar imagem")
            return
          }

          const maxDimension = 1200
          let width = img.width
          let height = img.height

          if (width > maxDimension || height > maxDimension) {
            if (width > height) {
              height = (height * maxDimension) / width
              width = maxDimension
            } else {
              width = (width * maxDimension) / height
              height = maxDimension
            }
          }

          canvas.width = width
          canvas.height = height
          ctx.drawImage(img, 0, 0, width, height)

          const base64 = canvas.toDataURL("image/jpeg", 0.9)
          onChange(base64)
          setIsLoading(false)
          toast.success("Imagem carregada com sucesso")
        }
        img.onerror = () => {
          setIsLoading(false)
          toast.error("Erro ao processar imagem")
        }
        img.src = event.target?.result as string
      }
      reader.readAsDataURL(file)
    } catch (error) {
      setIsLoading(false)
      toast.error("Erro ao carregar imagem")
    }
  }

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  const handleRemove = () => {
    onChange(undefined)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
    toast.success("Imagem removida")
  }

  const aspectClasses = {
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    wide: "aspect-video",
  }

  return (
    <div className="space-y-3">
      <label className="text-sm font-medium">{label}</label>

      {value ? (
        <Card className="overflow-hidden">
          <div className={`relative ${aspectClasses[aspectRatio]} w-full`}>
            <img
              src={value}
              alt={label}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex gap-2 p-3 border-t">
            <Button
              type="button"
              variant="outline"
              onClick={handleClick}
              disabled={isLoading}
              className="gap-2 flex-1"
            >
              <Upload size={16} weight="bold" />
              Alterar
            </Button>
            <Button
              type="button"
              variant="destructive"
              onClick={handleRemove}
              disabled={isLoading}
              className="gap-2"
            >
              <Trash size={16} weight="bold" />
            </Button>
          </div>
        </Card>
      ) : (
        <Card
          className={`${aspectClasses[aspectRatio]} w-full cursor-pointer hover:bg-muted/50 transition-colors border-dashed`}
          onClick={handleClick}
        >
          <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-6">
            <ImageIcon size={48} weight="duotone" className="text-muted-foreground" />
            <div className="text-center">
              <p className="text-sm font-medium">
                {isLoading ? "Processando..." : "Clique para adicionar imagem"}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                PNG, JPG até {maxSizeMB}MB
              </p>
            </div>
          </div>
        </Card>
      )}

      <input
        ref={fileInputRef}
        type="file"
        onChange={handleFileSelect}
        accept="image/*"
        className="hidden"
      />
    </div>
  )
}
