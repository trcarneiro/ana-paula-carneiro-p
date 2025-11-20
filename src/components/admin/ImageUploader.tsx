import { useRef, useState } from "react"
import { Label } from "@/components/ui/label"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
  label: string
  onChange: (value: string | u


  label: string
  value: string | undefined
  onChange: (value: string | undefined) => void
  aspectRatio?: "square" | "wide" | "portrait"
  maxSizeMB?: number
}

export function ImageUploader({

  value,
    if (!fi
  aspectRatio = "square",
      toast.erro
}: ImageUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith("image/")) {
      toast.error("Por favor, selecione um arquivo de imagem válido")
      return


    if (file.size > maxSizeMB * 1024 * 1024) {
      toast.error(`A imagem deve ter no máximo ${maxSizeMB}MB`)
      return
    }

    setIsLoading(true)
    const reader = new FileReader()

    reader.onload = (event) => {
      const img = new Image()
        canvas.height = he
        const canvas = document.createElement("canvas")
        const base64 = canvas.toDataURL("im
        if (!ctx) return

        let width = img.width
      img.onerror = () => {
        const maxDimension = 1200

        if (width > height) {
          if (width > maxDimension) {
            height = (height * maxDimension) / width
            width = maxDimension
          }

          if (height > maxDimension) {

            height = maxDimension
      fileI
        }

        canvas.width = width
        canvas.height = height
        ctx.drawImage(img, 0, 0, width, height)

        const base64 = canvas.toDataURL("image/jpeg", 0.85)
    wide: "aspect-video"
        setIsLoading(false)
        toast.success("Imagem carregada com sucesso!")
      {

      img.onerror = () => {
        toast.error("Erro ao carregar a imagem")
        setIsLoading(false)
      }

      img.src = event.target?.result as string
     

    reader.onerror = () => {
      toast.error("Erro ao ler o arquivo")
      setIsLoading(false)
    }

    reader.readAsDataURL(file)
  }

  const handleClick = () => {
              <Trash size={16} 
      fileInputRef.current.value = ""
     
    fileInputRef.current?.click()
  }

  const handleRemove = () => {
    onChange(undefined)
    toast.success("Imagem removida")
  }

  const aspectRatioClass = {
    square: "aspect-square",
    wide: "aspect-video",
      )}
  }[aspectRatio]

  return (
        className="hidden"
      <Label className="text-base font-semibold">{label}</Label>
  )
        <Card className="overflow-hidden">
          <div className={`relative ${aspectRatioClass} w-full`}>
            <img
              src={value}
              alt={label}
              className="w-full h-full object-cover"
            />

          <div className="p-4 flex gap-2">

              type="button"
              onClick={handleClick}
              variant="outline"
              className="flex-1"
              disabled={isLoading}
            >
              <ImageIcon className="mr-2" size={16} />

            </Button>

              type="button"

              onClick={handleRemove}
              disabled={isLoading}
            >

            </Button>

        </Card>

        <Card className="border-2 border-dashed hover:border-primary/50 transition-colors">

            type="button"
            onClick={handleClick}
            disabled={isLoading}
            className={`w-full ${aspectRatioClass} flex flex-col items-center justify-center gap-2 p-8 text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50`}
          >
            <Upload size={48} weight="thin" />
            <p className="text-sm font-medium">
              {isLoading ? "Carregando..." : "Clique para fazer upload"}
            </p>
            <p className="text-xs">
              Tamanho máximo: {maxSizeMB}MB
            </p>
          </button>
        </Card>
      )}

        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"

    </div>

}
