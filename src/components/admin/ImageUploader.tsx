import { useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { toast } from "sonner"
interface ImageUploaderProps {
  onChange: (value: string | u

}
export function 
  onChange: (value: string | undefined) => void
  label: string
  aspectRatio?: "square" | "portrait" | "wide"
  maxSizeMB?: number
}

export function ImageUploader({
  value,
  const han
    if (
    if (file.size > maxSi
      return

      toast.error("Por favor, selecione uma imagem vá
    }

    try {
      reader.onload = (event) => {
        img.onload = 

            setIsLoading(false)
            return

     

            if (width > height) {
              width = maxDimension
            
     

          canvas.heigh

         
          toast.success("Imagem carre
        img.onerror = () => {
          toast.error("Erro ao 
        img.src = event.targ
      reader.readAsDataURL(file)
      setIsLoading(false)
    }

    fileInputRef.current?.click()

    onChang

    toast.success("Imagem removida"

    square: "aspect-square",


    <div className="space-y-3">

        <Card className="overflow-
            <img
              alt={label}
            />
          <di
           

              className="gap-2
              <Upload size={16} 
            </Button>

              onClick={handleRemove}
              className="g
              <Trash size={16
          </div>
      ) :
          className={`${aspec
        >
            <ImageIcon size={48} weight="duotone"
         
              </p>
       
            </div>
        </Card>

        ref={fileInputRef}
     
   

}

















































































