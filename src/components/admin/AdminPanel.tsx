import { useState, useEffect } from "react"
import { useSiteContent } from "@/hooks/use-site-content"
import { SiteContent } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  X, 
  FloppyDisk, 
  Plus, 
  Trash 
} from "@phosphor-icons/react"
import { toast } from "sonner"

interface AdminPanelProps {
  onClose: () => void
  onPreview: () => void
}

export function AdminPanel({ onClose, onPreview }: AdminPanelProps) {
  const [content, setContent] = useSiteContent()

  const handleSave = () => {
    toast.success("Alterações salvas com sucesso!")
  }

  const updateHero = (field: keyof SiteContent["hero"], value: string) => {
    setContent((current) => ({
      ...current,
      hero: { ...current.hero, [field]: value }
    }))
  }

  const updateAbout = (field: string, value: string | string[]) => {
    setContent((current) => ({
      ...current,
      about: { ...current.about, [field]: value }
    }))
  }

  const updateAboutBio = (index: number, value: string) => {
    setContent((current) => {
      const newBio = [...current.about.bio]
      newBio[index] = value
      return {
        ...current,
        about: { ...current.about, bio: newBio }
      }
    })
  }

  const addAboutBioParagraph = () => {
    setContent((current) => ({
      ...current,
      about: {
        ...current.about,
        bio: [...current.about.bio, ""]
      }
    }))
  }

  const removeAboutBioParagraph = (index: number) => {
    setContent((current) => ({
      ...current,
      about: {
        ...current.about,
        bio: current.about.bio.filter((_, i) => i !== index)
      }
    }))
  }

  const updateAboutCredential = (index: number, field: "title" | "description", value: string) => {
    setContent((current) => {
      const newCredentials = [...current.about.credentials]
      newCredentials[index] = { ...newCredentials[index], [field]: value }
      return {
        ...current,
        about: { ...current.about, credentials: newCredentials }
      }
    })
  }

  const addAboutCredential = () => {
    setContent((current) => ({
      ...current,
      about: {
        ...current.about,
        credentials: [...current.about.credentials, { title: "", description: "" }]
      }
    }))
  }

  const removeAboutCredential = (index: number) => {
    setContent((current) => ({
      ...current,
      about: {
        ...current.about,
        credentials: current.about.credentials.filter((_, i) => i !== index)
      }
    }))
  }

  const updateService = (index: number, field: "icon" | "title" | "description", value: string) => {
    setContent((current) => {
      const newServices = [...current.services.services]
      newServices[index] = { ...newServices[index], [field]: value }
      return {
        ...current,
        services: { ...current.services, services: newServices }
      }
    })
  }

  const addService = () => {
    setContent((current) => ({
      ...current,
      services: {
        ...current.services,
        services: [...current.services.services, { icon: "", title: "", description: "" }]
      }
    }))
  }

  const removeService = (index: number) => {
    setContent((current) => ({
      ...current,
      services: {
        ...current.services,
        services: current.services.services.filter((_, i) => i !== index)
      }
    }))
  }

  const updateTestimonial = (index: number, field: "text" | "author" | "context", value: string) => {
    setContent((current) => {
      const newTestimonials = [...current.testimonials.testimonials]
      newTestimonials[index] = { ...newTestimonials[index], [field]: value }
      return {
        ...current,
        testimonials: { ...current.testimonials, testimonials: newTestimonials }
      }
    })
  }

  const addTestimonial = () => {
    setContent((current) => ({
      ...current,
      testimonials: {
        ...current.testimonials,
        testimonials: [...current.testimonials.testimonials, { text: "", author: "", context: "" }]
      }
    }))
  }

  const removeTestimonial = (index: number) => {
    setContent((current) => ({
      ...current,
      testimonials: {
        ...current.testimonials,
        testimonials: current.testimonials.testimonials.filter((_, i) => i !== index)
      }
    }))
  }

  const updateFAQ = (index: number, field: "question" | "answer", value: string) => {
    setContent((current) => {
      const newFAQs = [...current.faq.faqs]
      newFAQs[index] = { ...newFAQs[index], [field]: value }
      return {
        ...current,
        faq: { ...current.faq, faqs: newFAQs }
      }
    })
  }

  const addFAQ = () => {
    setContent((current) => ({
      ...current,
      faq: {
        ...current.faq,
        faqs: [...current.faq.faqs, { question: "", answer: "" }]
      }
    }))
  }

  const removeFAQ = (index: number) => {
    setContent((current) => ({
      ...current,
      faq: {
        ...current.faq,
        faqs: current.faq.faqs.filter((_, i) => i !== index)
      }
    }))
  }

  const updateContact = (field: keyof SiteContent["contact"], value: string) => {
    setContent((current) => ({
      ...current,
      contact: { ...current.contact, [field]: value }
    }))
  }

  const updateFooter = (field: keyof SiteContent["footer"], value: string) => {
    setContent((current) => ({
      ...current,
      footer: { ...current.footer, [field]: value }
    }))
  }

  return (
    <div className="min-h-screen bg-background py-8 px-6">
      <Card className="max-w-5xl mx-auto p-6">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-semibold">Painel Administrativo</h1>
          <div className="flex gap-3">
            <Button
              onClick={handleSave}
              className="gap-2"
            >
              <FloppyDisk weight="bold" />
              Salvar
            </Button>
            <Button
              variant="outline"
              onClick={onClose}
            >
              <X weight="bold" />
            </Button>
          </div>
        </div>

        <Tabs defaultValue="hero" className="w-full">
          <TabsList className="grid w-full grid-cols-7">
            <TabsTrigger value="hero">Hero</TabsTrigger>
            <TabsTrigger value="about">Sobre</TabsTrigger>
            <TabsTrigger value="services">Serviços</TabsTrigger>
            <TabsTrigger value="testimonials">Depoimentos</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="contact">Contato</TabsTrigger>
            <TabsTrigger value="footer">Rodapé</TabsTrigger>
          </TabsList>

          <TabsContent value="hero" className="space-y-6">
            <div>
              <Label htmlFor="hero-title" className="text-base font-semibold">Título Principal</Label>
              <Input
                id="hero-title"
                value={content.hero.headline}
                onChange={(e) => updateHero("headline", e.target.value)}
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="hero-subtitle" className="text-base font-semibold">Subtítulo</Label>
              <Input
                id="hero-subtitle"
                value={content.hero.description}
                onChange={(e) => updateHero("description", e.target.value)}
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="hero-cta" className="text-base font-semibold">Texto do Botão</Label>
              <Input
                id="hero-cta"
                value={content.hero.ctaPrimary}
                onChange={(e) => updateHero("ctaPrimary", e.target.value)}
                className="mt-2"
              />
            </div>
          </TabsContent>

          <TabsContent value="about" className="space-y-6">
            <div>
              <Label htmlFor="about-title" className="text-base font-semibold">Título da Seção</Label>
              <Input
                id="about-title"
                value={content.about.title}
                onChange={(e) => updateAbout("title", e.target.value)}
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="about-subtitle" className="text-base font-semibold">Subtítulo</Label>
              <Input
                id="about-subtitle"
                value={content.about.subtitle}
                onChange={(e) => updateAbout("subtitle", e.target.value)}
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="about-profile-image" className="text-base font-semibold">URL da Imagem de Perfil</Label>
              <Input
                id="about-profile-image"
                value={content.about.profileImage || ""}
                onChange={(e) => updateAbout("profileImage", e.target.value)}
                className="mt-2"
                placeholder="https://exemplo.com/imagem.jpg"
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-3">
                <Label className="text-base font-semibold">Biografia (Parágrafos)</Label>
                <Button
                  type="button"
                  size="sm"
                  onClick={addAboutBioParagraph}
                  className="gap-2"
                >
                  <Plus weight="bold" />
                  Adicionar Parágrafo
                </Button>
              </div>
              <div className="space-y-3">
                {content.about.bio.map((paragraph, index) => (
                  <div key={index} className="flex gap-2">
                    <Textarea
                      value={paragraph}
                      onChange={(e) => updateAboutBio(index, e.target.value)}
                      placeholder={`Parágrafo ${index + 1}`}
                      className="flex-1"
                    />
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      onClick={() => removeAboutBioParagraph(index)}
                    >
                      <Trash weight="bold" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-3">
                <Label className="text-base font-semibold">Credenciais</Label>
                <Button
                  type="button"
                  size="sm"
                  onClick={addAboutCredential}
                  className="gap-2"
                >
                  <Plus weight="bold" />
                  Adicionar Credencial
                </Button>
              </div>
              <div className="space-y-3">
                {content.about.credentials.map((credential, index) => (
                  <Card key={index} className="p-4">
                    <div className="flex gap-3">
                      <div className="flex-1 space-y-3">
                        <Input
                          value={credential.title}
                          onChange={(e) => updateAboutCredential(index, "title", e.target.value)}
                          placeholder="Título"
                        />
                        <Input
                          value={credential.description}
                          onChange={(e) => updateAboutCredential(index, "description", e.target.value)}
                          placeholder="Descrição"
                        />
                      </div>
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        onClick={() => removeAboutCredential(index)}
                      >
                        <Trash weight="bold" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="services" className="space-y-6">
            <div>
              <Label htmlFor="services-title" className="text-base font-semibold">Título da Seção</Label>
              <Input
                id="services-title"
                value={content.services.title}
                onChange={(e) => setContent((current) => ({
                  ...current,
                  services: { ...current.services, title: e.target.value }
                }))}
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="services-subtitle" className="text-base font-semibold">Subtítulo</Label>
              <Input
                id="services-subtitle"
                value={content.services.subtitle}
                onChange={(e) => setContent((current) => ({
                  ...current,
                  services: { ...current.services, subtitle: e.target.value }
                }))}
                className="mt-2"
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-3">
                <Label className="text-base font-semibold">Serviços</Label>
                <Button
                  type="button"
                  size="sm"
                  onClick={addService}
                  className="gap-2"
                >
                  <Plus weight="bold" />
                  Adicionar Serviço
                </Button>
              </div>
              <div className="space-y-3">
                {content.services.services.map((service, index) => (
                  <Card key={index} className="p-4">
                    <div className="flex gap-3">
                      <div className="flex-1 space-y-3">
                        <Input
                          id={`service-icon-${index}`}
                          value={service.icon || ""}
                          onChange={(e) => updateService(index, "icon", e.target.value)}
                          placeholder="Ícone (ex: User)"
                        />
                        <Input
                          value={service.title}
                          onChange={(e) => updateService(index, "title", e.target.value)}
                          placeholder="Título do Serviço"
                        />
                        <Textarea
                          value={service.description}
                          onChange={(e) => updateService(index, "description", e.target.value)}
                          placeholder="Descrição"
                        />
                      </div>
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        onClick={() => removeService(index)}
                      >
                        <Trash weight="bold" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="testimonials" className="space-y-6">
            <div>
              <Label htmlFor="testimonials-title" className="text-base font-semibold">Título da Seção</Label>
              <Input
                id="testimonials-title"
                value={content.testimonials.title}
                onChange={(e) => setContent((current) => ({
                  ...current,
                  testimonials: { ...current.testimonials, title: e.target.value }
                }))}
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="testimonials-subtitle" className="text-base font-semibold">Subtítulo</Label>
              <Input
                id="testimonials-subtitle"
                value={content.testimonials.subtitle}
                onChange={(e) => setContent((current) => ({
                  ...current,
                  testimonials: { ...current.testimonials, subtitle: e.target.value }
                }))}
                className="mt-2"
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-3">
                <Label className="text-base font-semibold">Depoimentos</Label>
                <Button
                  type="button"
                  size="sm"
                  onClick={addTestimonial}
                  className="gap-2"
                >
                  <Plus weight="bold" />
                  Adicionar Depoimento
                </Button>
              </div>
              <div className="space-y-3">
                {content.testimonials.testimonials.map((testimonial, index) => (
                  <Card key={index} className="p-4">
                    <div className="flex gap-3">
                      <div className="flex-1 space-y-3">
                        <Textarea
                          value={testimonial.text}
                          onChange={(e) => updateTestimonial(index, "text", e.target.value)}
                          placeholder="Depoimento"
                        />
                        <Input
                          value={testimonial.author}
                          onChange={(e) => updateTestimonial(index, "author", e.target.value)}
                          placeholder="Nome do autor"
                        />
                        <Input
                          value={testimonial.context}
                          onChange={(e) => updateTestimonial(index, "context", e.target.value)}
                          placeholder="Função/Relação (ex: Paciente)"
                        />
                      </div>
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        onClick={() => removeTestimonial(index)}
                      >
                        <Trash weight="bold" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="faq" className="space-y-6">
            <div>
              <Label htmlFor="faq-title" className="text-base font-semibold">Título da Seção</Label>
              <Input
                id="faq-title"
                value={content.faq.title}
                onChange={(e) => setContent((current) => ({
                  ...current,
                  faq: { ...current.faq, title: e.target.value }
                }))}
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="faq-subtitle" className="text-base font-semibold">Subtítulo</Label>
              <Input
                id="faq-subtitle"
                value={content.faq.subtitle}
                onChange={(e) => setContent((current) => ({
                  ...current,
                  faq: { ...current.faq, subtitle: e.target.value }
                }))}
                className="mt-2"
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-3">
                <Label className="text-base font-semibold">Perguntas e Respostas</Label>
                <Button
                  type="button"
                  size="sm"
                  onClick={addFAQ}
                  className="gap-2"
                >
                  <Plus weight="bold" />
                  Adicionar FAQ
                </Button>
              </div>
              <div className="space-y-3">
                {content.faq.faqs.map((item, index) => (
                  <Card key={index} className="p-4">
                    <div className="flex gap-3">
                      <div className="flex-1 space-y-3">
                        <Input
                          value={item.question}
                          onChange={(e) => updateFAQ(index, "question", e.target.value)}
                          placeholder="Pergunta"
                        />
                        <Textarea
                          value={item.answer}
                          onChange={(e) => updateFAQ(index, "answer", e.target.value)}
                          placeholder="Resposta"
                        />
                      </div>
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        onClick={() => removeFAQ(index)}
                      >
                        <Trash weight="bold" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="contact" className="space-y-6">
            <div>
              <Label htmlFor="contact-title" className="text-base font-semibold">Título da Seção</Label>
              <Input
                id="contact-title"
                value={content.contact.title}
                onChange={(e) => updateContact("title", e.target.value)}
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="contact-subtitle" className="text-base font-semibold">Subtítulo</Label>
              <Input
                id="contact-subtitle"
                value={content.contact.subtitle}
                onChange={(e) => updateContact("subtitle", e.target.value)}
                className="mt-2"
              />
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <Label htmlFor="contact-whatsapp" className="text-base font-semibold">WhatsApp</Label>
                <Input
                  id="contact-whatsapp"
                  value={content.contact.whatsappNumber}
                  onChange={(e) => updateContact("whatsappNumber", e.target.value)}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="contact-phone" className="text-base font-semibold">Telefone</Label>
                <Input
                  id="contact-phone"
                  value={content.contact.phone}
                  onChange={(e) => updateContact("phone", e.target.value)}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="contact-email" className="text-base font-semibold">E-mail</Label>
                <Input
                  id="contact-email"
                  value={content.contact.email}
                  onChange={(e) => updateContact("email", e.target.value)}
                  className="mt-2"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="contact-address" className="text-base font-semibold">Horário de Atendimento</Label>
              <Textarea
                id="contact-address"
                value={content.contact.scheduleText}
                onChange={(e) => updateContact("scheduleText", e.target.value)}
                className="mt-2"
              />
            </div>
          </TabsContent>

          <TabsContent value="footer" className="space-y-6">
            <div>
              <Label htmlFor="footer-name" className="text-base font-semibold">Nome</Label>
              <Input
                id="footer-name"
                value={content.footer.name}
                onChange={(e) => updateFooter("name", e.target.value)}
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="footer-crp" className="text-base font-semibold">CRP e Informações</Label>
              <Input
                id="footer-crp"
                value={content.footer.crp}
                onChange={(e) => updateFooter("crp", e.target.value)}
                placeholder="CRP 06/123456"
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="footer-description" className="text-base font-semibold">Descrição</Label>
              <Textarea
                id="footer-description"
                value={content.footer.description}
                onChange={(e) => updateFooter("description", e.target.value)}
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="footer-phone" className="text-base font-semibold">Telefone</Label>
              <Input
                id="footer-phone"
                value={content.footer.phone}
                onChange={(e) => updateFooter("phone", e.target.value)}
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="footer-email" className="text-base font-semibold">E-mail</Label>
              <Input
                id="footer-email"
                value={content.footer.email}
                onChange={(e) => updateFooter("email", e.target.value)}
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="footer-copyright" className="text-base font-semibold">Horário</Label>
              <Textarea
                id="footer-copyright"
                value={content.footer.schedule}
                onChange={(e) => updateFooter("schedule", e.target.value)}
                className="mt-2"
              />
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  )
}
