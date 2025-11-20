import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Upload, ImageIcon, Trash } from "@ph
import { Upload, ImageIcon, Trash } from "@phosphor-icons/react"
import { toast } from "sonner"

interface ImageUploaderProps {
  aspectRatio?:
  label,
  onChange,
  maxSizeMB = 5,
  const fileInputRef
}


  label,
    }
  onChange,
    const reader = new Fi
  maxSizeMB = 5,
        const canvas = d
        if (!ctx) {
          setIsLoading(false)

        const maxDimension = 1200
        let height = img.height
        if (width > m

          } else {
            height = maxDimension
        }
     

    setIsLoading(true)


        toast.error("Erro ao
      const img = new Image()
      img.onload = () => {

        const ctx = canvas.getContext("2d")
    }
    reader.readAsDataURL(file)
    if (fileInputRef.current)
    }



    onChange(undefined)
        let height = img.height

    wide: "aspect-video",

    <div className="space-y-3">

        <div class
            width = (width * maxDimension) / height
              alt={label}
          }
         

              onClick={handl
              className="gap-2
              <ImageIcon size={16} weight="bold

              type="button"
        onChange(base64)
              className="ga
      }

        </div>
        <button
          onClick={handleCl
       

            {isLoading ? "Processando..." 
    }

        ref={fileInputRef}
        accept="image/*"
        className="hidden
    <



    if (fileInputRef.current) {

    }

















    <div className="space-y-3">


      {value ? (







          </div>

            <Button







              Trocar Imagem

            <Button

              variant="destructive"




              <Trash size={16} weight="bold" />
              Remover

          </div>

      ) : (













      <input





      />

  )

