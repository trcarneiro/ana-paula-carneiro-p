import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { toast } from "sonner"
interface ImageUploaderProps {
  value?: string

}
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


    reader.onload = (e) => {
      img.onload = () => {
        let width = img.width
        
     

          } else {
            height = maxDimension
    
        canvas.width = width
        
        if (ctx) {
          const base64 = canvas.toDataURL('image/jpeg',
          toast.success("Imag
        setIsLoading(false)
      
        toast.error("Erro ao proc
      }
      img.src = e.target?.resul
    
      toast.error("Erro ao ler o
    }
    reader.readAsDataURL(file)
    if (fileInputRef.current) {
    }

    onCh
  }
  const handleClick = () => {
  }
  const aspectRatioClass = {
    portrait: "asp
  }[aspectRatio]
  return (
      <Label className="te
      <div className="flex gap-4 items-start">
         
        >
       
      
            />
            <div className="text-center p-4">
              <p className=
       
      

     
    
            onClick={handleC
            className="gap-2"
            <Upload weigh
     
    
              type="button"
    
              className="gap-2"
              <Trash weight="bold" />
     


          </p>
      </div>
      <input
   

      />
  )



























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
