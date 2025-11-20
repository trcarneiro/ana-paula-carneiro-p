import { WhatsappLogo } from "@phosphor-icons/react"
import { useKV } from "@github/spark/hooks"
import { defaultSiteContent, SiteContent } from "@/lib/types"

export function WhatsAppButton() {
  const [content] = useKV<SiteContent>("site-content", defaultSiteContent)

  return (
    <a
      href={`https://wa.me/${content.contact.whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      aria-label="Entrar em contato via WhatsApp"
    >
      <WhatsappLogo size={32} weight="fill" />
      <span className="absolute right-full mr-3 bg-foreground text-background px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
        Fale comigo
      </span>
    </a>
  )
}
