import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/labe
import { toast } from "sonner"
interface ImageUploaderProps {
  value: string | undefined

}
export function
  value,
  aspectRatio = "square",
}: ImageUploaderProps) {
  const fileInputRef
 

    if (!file.type.startsWith("
      re

    if (fil
      return


    reader.onload = (event) => {
      img.onload = () => {


          if (width > height) {
            width = m

          }

        canv
     

          const base64 = canvas.toDataURL("image
        }
        setIsLoading(false)

     

      img.src = event.

      toast.error("Erro ao ler o ar
    }
    reader.readAsDataURL(file
    if (fileInputRef.curre
    }

    onChange(undefined)

    fileInputRef.current?.click()

    square: "aspect-square",
  }[aspectRatio]
  return (
      <Label className="text-base font-semibold">{l
        <Card className="overflow
           
         

          <div className="p-4 flex gap-2">
              type="button"
              onClick={handleC
            >

            <Butto
              variant="destructive"
              onClick={handleRemove}
            >
         

      ) : (
       

            <Upload size={4
              <p className="text-sm font-medium">
                Tamanho máx
       


     

        className="hidden"
      />
  )




















































































