import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
interface ImageUploaderProps {

interface ImageUploaderProps {
  maxSizeMB?: nu
  onChange: (value: string | undefined) => void
  label: string
  aspectRatio?: "square" | "portrait" | "wide"
  maxSizeMB?: number
}

}: ImageUploaderProps) {
  value,


      toast.error(`A imag
    }
    setIsLoading(true)
    const reader = new FileReader()
      const img = new Image()

        if (!ctx) {
          setIsLoading(false)
        }

        let height = img.height
        if (width > maxDimension || height > maxDimension) 
      return
    }

        }
        canvas.width = width
        ctx.
    }

      }

      }
    }
  }
  const handleUploadClick 
  }
  const handleRemove = () => {
    if (fileInputRe
    }
  }
  const aspectRa
    portr

  return (
      <Label className="text-
        <Card className="overfl

              alt={label}
            />
          <div className="p-3 fl
              type="button"
              vari
              disabled={isLoading
            >
           
         

              onClick={handl
            >
              Remover

      ) : (
          className={`${a
        >
            <ImageIcon size={48} weight="duotone" clas
       
            <p className="t
            </p>
        </Card>
      <
        type="file"
     
      />
  )


    fileInputRef.current?.click()











    square: "aspect-square",





    <div className="space-y-3">




            <img

              alt={label}

            />












            </Button>




              onClick={handleRemove}





          </div>





        >









        </Card>


        ref={fileInputRef}







}
