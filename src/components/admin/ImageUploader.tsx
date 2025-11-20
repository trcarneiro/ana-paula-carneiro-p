import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Upload, Trash, Image as ImageIcon } from "@phosphor-icons/react"
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

    const maxSize = maxSizeMB * 1024 * 1024
    if (file.size > maxSize) {
      toast.error(`A imagem deve ter no máximo ${maxSizeMB}MB`)
      return
    }

    setIsLoading(true)
    const reader = new FileReader()
    
    reader.onload = (e) => {
      const img = new Image()
      img.onload = () => {
        const canvas = document.createElement('canvas')
        let width = img.width
        let height = img.height
        
        const maxDimension = 1200
        if (width > maxDimension || height > maxDimension) {
          if (width > height) {
            height = (height / width) * maxDimension
            width = maxDimension
          } else {
            width = (width / height) * maxDimension
            height = maxDimension
          }
        }
        
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
    toast.success("Imagem removida")
  }

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  const aspectRatioClass = {
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    landscape: "aspect-[16/9]"
  }[aspectRatio]

  return (
    <div className="space-y-3">
      <Label className="text-base font-semibold">{label}</Label>
      
      <div className="flex gap-4 items-start">
        <Card 
          className={`${aspectRatioClass} w-48 overflow-hidden bg-muted flex items-center justify-center cursor-pointer hover:bg-muted/80 transition-colors border-2 border-dashed`}
          onClick={value ? undefined : handleClick}
        >
          {value ? (
            <img 
              src={value} 
              alt={label}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-center p-4">
              <ImageIcon size={48} className="mx-auto mb-2 text-muted-foreground" weight="duotone" />
              <p className="text-sm text-muted-foreground">
                {isLoading ? "Carregando..." : "Clique para adicionar"}
              </p>
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
