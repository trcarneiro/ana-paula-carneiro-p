import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
interface ImageUploaderProps {

  aspectRatio?: "square" | "po
}
export function 
  value, 
  aspectRatio = "square",
}: ImageUploaderProp
 

    if (!file) return
    if (!
      ret

      toast.error(`A imag
    }
    setIsLoading(true)
    
      const img = new Image()

        let height = img.height
        if (width > maxDimension || heig
            height = 

            height = maxDimension
        }
        cons
     

          ctx.drawImage(img, 0, 0, width, heig
          onChange(base64)
        }
     

      }
    }
    
      setIsLoading(false)
    reader.readAsDataURL(file
    if (fileInputRef.curre
    }

    onChange(undefined)

  }
  const handleClick = () => {
  }
  const aspectRatioClass = {
    portrait: "asp
  }[aspectRatio]
  return (
      <Labe
        <

              alt={label}
            />
            <div className="w-
                <p className="text-sm text-
        
            </div>
        </Card>
        <div className="flex flex-col gap-2">
            type="button"
            size="sm"
         
          >
       
          
            <Button
              variant="dest
       
            >
     
    
          <p className="text
            Tamanho máximo: {maxSizeMB}MB
        </div>

        ref={fileInputRef}
    
        className="hidden"
    </div>
}




















































































