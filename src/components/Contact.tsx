import React, { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Phone, Envelope, WhatsappLogo, PaperPlaneRight } from "@phosphor-icons/react"
import { toast } from "sonner"
import { useKV } from "@github/spark/hooks"
import { defaultSiteContent, SiteContent } from "@/lib/types"

export function Contact() {
  const [content] = useKV<SiteContent>("site-content", defaultSiteContent)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Por favor, preencha os campos obrigatórios")
      setIsSubmitting(false)
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      toast.error("Por favor, insira um e-mail válido")
      setIsSubmitting(false)
      return
    }

    toast.success("Mensagem enviada com sucesso! Em breve entrarei em contato.", {
      duration: 5000
    })

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    })

    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: WhatsappLogo,
      label: "WhatsApp",
      value: content.contact.phone,
      href: `https://wa.me/${content.contact.whatsappNumber}`,
      primary: true
    },
    {
      icon: Phone,
      label: "Telefone",
      value: content.contact.phone,
      href: `tel:+${content.contact.whatsappNumber}`
    },
    {
      icon: Envelope,
      label: "E-mail",
      value: content.contact.email,
      href: `mailto:${content.contact.email}`
    }
  ]

  return (
    <section id="contato" className="py-24 px-6 bg-card">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            {content.contact.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {content.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">Formas de Contato</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block"
                  >
                    <Card className={`p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 ${
                      info.primary ? 'border-2 border-accent bg-accent/5' : ''
                    }`}>
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          info.primary ? 'bg-accent text-accent-foreground' : 'bg-primary/10 text-accent'
                        }`}>
                          <info.icon size={24} weight="duotone" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">{info.label}</div>
                          <div className="font-medium">{info.value}</div>
                        </div>
                      </div>
                    </Card>
                  </a>
                ))}
              </div>
            </div>

            <Card className="p-6 bg-muted/50">
              <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                <strong className="text-foreground block mb-2">Horário de Atendimento</strong>
                {content.contact.scheduleText}
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-3"
          >
            <Card className="p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Envie uma Mensagem</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-base">
                    Nome completo <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Seu nome"
                    className="mt-2 h-12"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-base">
                    E-mail <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="seu@email.com"
                    className="mt-2 h-12"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-base">
                    Telefone
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(00) 00000-0000"
                    className="mt-2 h-12"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-base">
                    Mensagem <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Conte um pouco sobre o que te traz aqui..."
                    className="mt-2 min-h-[150px] resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground gap-2 h-12 shadow-md hover:shadow-lg transition-all"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                  <PaperPlaneRight weight="bold" />
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Ao enviar esta mensagem, você concorda que seus dados sejam utilizados apenas para contato relacionado ao atendimento psicanalítico.
                </p>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
