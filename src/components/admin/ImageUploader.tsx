import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Upload, ImageIcon, Trash } from "@phosphor-icons/react"
import { toast } from "sonner"

interface ImageUploaderProps {
  label: string
  value?: string
  onChange: (value: string | undefined) => void
  aspectRatio?: "square" | "portrait" | "wide"
  maxSizeMB?: number
}

export function ImageUploader({
  label,
  value,
  onChange,
  aspectRatio = "square",
  maxSizeMB = 5,
}: ImageUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

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

        const base64 = canvas.toDataURL("image/jpeg", 0.85)
        onChange(base64)
        setIsLoading(false)
      }

      img.onerror = () => {
        toast.error("Erro ao carregar imagem")
        setIsLoading(false)
      }

      img.src = e.target?.result as string
    }

    reader.onerror = () => {
      toast.error("Erro ao ler arquivo")
      setIsLoading(false)
    }

    reader.readAsDataURL(file)

    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  const handleRemove = () => {
    onChange(undefined)
  }

  const aspectRatioClass = {
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    wide: "aspect-video",
  }[aspectRatio]

  return (
    <div className="space-y-3">
      <Label className="text-base font-semibold">{label}</Label>

      {value ? (
        <div className="space-y-3">
          <div className={`relative ${aspectRatioClass} w-full max-w-xs overflow-hidden rounded-lg border`}>
            <img
              src={value}
              alt={label}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={handleClick}
              disabled={isLoading}
              className="gap-2"
            >
              <ImageIcon size={16} weight="bold" />
              Trocar Imagem
            </Button>
            <Button
              type="button"
              variant="destructive"
              onClick={handleRemove}
              disabled={isLoading}
              className="gap-2"
            >
              <Trash size={16} weight="bold" />
              Remover
            </Button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={handleClick}
          disabled={isLoading}
          className={`w-full ${aspectRatioClass} max-w-xs border-2 border-dashed rounded-lg hover:border-accent hover:bg-accent/5 transition-colors flex flex-col items-center justify-center gap-2 text-muted-foreground hover:text-accent disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          <Upload size={40} weight="duotone" />
          <p className="text-sm font-medium">
            {isLoading ? "Processando..." : "Clique para fazer upload"}
          </p>
        </button>
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
