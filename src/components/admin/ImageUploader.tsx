import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { Image as ImageIcon, Trash } from "@phosphor-icons/react"

interface ImageUploaderProps {
  value?: string
  maxSizeMB?: number
  onChange: (value: string | undefined) => void
  label: string
  aspectRatio?: "square" | "portrait" | "wide"
}

export function ImageUploader({ 
  value, 
  maxSizeMB = 2, 
  onChange, 
  label, 
  aspectRatio = "square" 
}: ImageUploaderProps) {
  const [isLoading, setIsLoading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (file.size > maxSizeMB * 1024 * 1024) {
      toast.error(`A imagem deve ter no máximo ${maxSizeMB}MB`)
      return
    }

    setIsLoading(true)
    const reader = new FileReader()
    
    reader.onload = async (event) => {
      const img = new Image()
      img.onload = () => {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        
        if (!ctx) {
          setIsLoading(false)
          return
        }

        const maxDimension = 2000
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

        canvas.width = width
        canvas.height = height
        ctx.drawImage(img, 0, 0, width, height)
        
        const dataUrl = canvas.toDataURL('image/jpeg', 0.9)
        onChange(dataUrl)
        setIsLoading(false)
        toast.success("Imagem carregada com sucesso")
      }
      
      img.onerror = () => {
        setIsLoading(false)
        toast.error("Erro ao carregar imagem")
      }
      
      img.src = event.target?.result as string
    }
    
    reader.onerror = () => {
      setIsLoading(false)
      toast.error("Erro ao ler arquivo")
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
  }

  const aspectRatioClasses = {
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    wide: "aspect-[16/9]"
  }

  return (
    <div className="space-y-3">
      <Label className="text-sm font-medium">{label}</Label>
      {value ? (
        <Card className="overflow-hidden">
          <div className={`relative ${aspectRatioClasses[aspectRatio]} w-full`}>
            <img
              src={value}
              className="w-full h-full object-cover"
              alt={label}
            />
          </div>
          <div className="p-3 flex gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleUploadClick}
              disabled={isLoading}
              className="flex-1"
            >
              Trocar
            </Button>
            <Button
              type="button"
              variant="destructive"
              size="sm"
              onClick={handleRemove}
            >
              <Trash size={16} />
            </Button>
          </div>
        </Card>
      ) : (
        <Card 
          className={`${aspectRatioClasses[aspectRatio]} flex flex-col items-center justify-center cursor-pointer hover:bg-muted/50 transition-colors`}
          onClick={handleUploadClick}
        >
          <ImageIcon size={48} weight="duotone" className="text-muted-foreground mb-2" />
          <p className="text-sm text-muted-foreground">
            Clique para adicionar imagem
          </p>
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
