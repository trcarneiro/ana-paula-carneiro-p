import { useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload, Image as ImageIcon, Trash } from "@phosphor-icons/react"
import { toast } from "sonner"

interface ImageUploaderProps {
}
export function ImageUpload
  value,
  aspectRatio = "square",
}: ImageUploaderProp
 

    if (!file) return
  label,
      re
  onChange,
      toast.error(`A imag
  maxSizeMB = 5
    setIsLoading(true)

      const img = new Image()

        const ctx = canvas.getContext("2d")

        let height = 

          if (width > maxDimension) {
            width = maxDimension
        } el
    }


        canvas.height = height

     


        toast.error("Erro ao carreg

      img.src = event.target?.re

      
      img.onload = () => {

        const ctx = canvas.getContext("2d")
  const handleClick = ()

    fileInputRef.current?.cli
        let height = img.height
    onChange(undefined)

  const aspectRatioClass = {
    wide: "aspect-video",
  }[aspectRatio]
  return (
      <Labe
        } else {
          <div className={`relative ${
            width = (width * maxDimension) / height
              className="w-full h
          }
         

              className="fle
            >
              Alterar Imagem

              variant="destructive"
        onChange(base64)
              <Trash size={
          </div>
      }

            onClick={handle
            className={`w-full ${aspectRatioClas
            <Upload size={4
       

            </p>
    }

        ref={fileInputRef}
        accept="image/*"
        className="hidden
    <





    if (fileInputRef.current) {

    }











    portrait: "aspect-[3/4]"



    <div className="space-y-3">

      
      {value ? (







          </div>

            <Button







              Alterar Imagem

            <Button

              variant="destructive"



              <Trash size={16} weight="bold" />

          </div>

      ) : (

          <button
















      <input





      />

  )

