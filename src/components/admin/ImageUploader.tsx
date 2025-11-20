import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Upload, Trash } from "@phosphor-icons/react"
import { toast } from "sonner"

interface ImageUploaderProps {
  label: string
  value?: string
  onChange: (base64Image: string | undefined) => void
  aspectRatio?: "square" | "portrait" | "landscape"
  maxSizeMB?: number
}

export function ImageUploader({ 
  label, 
  value, 
  onChange, 
  aspectRatio = "square",
  maxSizeMB = 2 
}: ImageUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith('image/')) {
      toast.error("Por favor, selecione um arquivo de imagem válido")
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

        const canvas = document.createElement('canvas')
        canvas.width = width
        canvas.height = height
        const ctx = canvas.getContext('2d')
        
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height)
          const base64 = canvas.toDataURL('image/jpeg', 0.85)
          onChange(base64)
          toast.success("Imagem carregada com sucesso!")
        }
        setIsLoading(false)
      }
      img.onerror = () => {
        toast.error("Erro ao processar a imagem")
        setIsLoading(false)
      }
      img.src = e.target?.result as string
    }
    
    reader.onerror = () => {
      toast.error("Erro ao ler o arquivo")
      setIsLoading(false)
    }
    reader.readAsDataURL(file)
    
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleRemove = () => {
    onChange(undefined)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  const aspectRatioClass = {
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    landscape: "aspect-[4/3]"
  }[aspectRatio]

  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium">{label}</Label>
      <div className="flex gap-4 items-start">
        <Card className={`${aspectRatioClass} w-48 overflow-hidden cursor-pointer hover:border-primary transition-colors`} onClick={handleClick}>
          {value ? (
            <img 
              src={value} 
              alt={label}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-muted">
              <div className="text-center p-4">
                <p className="text-sm text-muted-foreground">
                  {isLoading ? "Carregando..." : "Clique para adicionar"}
                </p>
              </div>
            </div>
          )}
        </Card>

        <div className="flex flex-col gap-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleClick}
            disabled={isLoading}
            className="gap-2"
          >
            <Upload weight="bold" />
            {value ? "Trocar Imagem" : "Adicionar Imagem"}
          </Button>
          
          {value && (
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
          )}

          <p className="text-xs text-muted-foreground mt-2">
            Formatos: JPG, PNG, WebP<br />
            Tamanho máximo: {maxSizeMB}MB
          </p>
        </div>
      </div>

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
