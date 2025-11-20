import { useState } from "react"
import { useKV } from "@github/spark/hooks"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Plus, 
  Trash, 
  FloppyDisk, 
  X,
  Eye,
  GearSix
} from "@phosphor-icons/react"
import { toast } from "sonner"
import { SiteContent, defaultSiteContent } from "@/lib/types"
import { ImageUploader } from "./ImageUploader"

interface AdminPanelProps {
  onClose: () => void
  onPreview: () => void
}

export function AdminPanel({ onClose, onPreview }: AdminPanelProps) {
  const [content, setContent] = useKV<SiteContent>("site-content", defaultSiteContent)
  const [activeTab, setActiveTab] = useState("hero")

  const handleSave = () => {
    setContent((current) => ({ ...current }))
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

  const updateService = (index: number, field: "title" | "description" | "icon", value: string | undefined) => {
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
        services: [...current.services.services, { title: "", description: "", icon: undefined }]
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
    <div className="fixed inset-0 bg-background z-50 overflow-y-auto">
      <div className="min-h-screen py-8 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <GearSix size={32} className="text-accent" weight="duotone" />
              <h1 className="text-3xl font-semibold">Painel Administrativo</h1>
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={onPreview}
                className="gap-2"
              >
                <Eye weight="bold" />
                Visualizar Site
              </Button>
              <Button
                onClick={handleSave}
                className="bg-accent hover:bg-accent/90 gap-2"
              >
                <FloppyDisk weight="bold" />
                Salvar Alterações
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={onClose}
              >
                <X weight="bold" />
              </Button>
            </div>
          </div>

          <Card className="p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-7 mb-8">
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
                  <ImageUploader
                    label="Foto de Perfil (Hero)"
                    value={content.hero.profileImage}
                    onChange={(image) => updateHero("profileImage", image || "")}
                    aspectRatio="portrait"
                  />
                </div>
                <div>
                  <Label htmlFor="hero-headline" className="text-base font-semibold">Título Principal</Label>
                  <Input
                    id="hero-headline"
                    value={content.hero.headline}
                    onChange={(e) => updateHero("headline", e.target.value)}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="hero-description" className="text-base font-semibold">Descrição</Label>
                  <Textarea
                    id="hero-description"
                    value={content.hero.description}
                    onChange={(e) => updateHero("description", e.target.value)}
                    className="mt-2 min-h-[100px]"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="hero-cta-primary" className="text-base font-semibold">Botão Primário</Label>
                    <Input
                      id="hero-cta-primary"
                      value={content.hero.ctaPrimary}
                      onChange={(e) => updateHero("ctaPrimary", e.target.value)}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="hero-cta-secondary" className="text-base font-semibold">Botão Secundário</Label>
                    <Input
                      id="hero-cta-secondary"
                      value={content.hero.ctaSecondary}
                      onChange={(e) => updateHero("ctaSecondary", e.target.value)}
                      className="mt-2"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="about" className="space-y-6">
                <div>
                  <ImageUploader
                    label="Foto de Perfil (Sobre)"
                    value={content.about.profileImage}
                    onChange={(image) => updateAbout("profileImage", image || "")}
                    aspectRatio="portrait"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
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
                </div>
                <div>
                  <Label htmlFor="about-name" className="text-base font-semibold">Nome</Label>
                  <Input
                    id="about-name"
                    value={content.about.name}
                    onChange={(e) => updateAbout("name", e.target.value)}
                    className="mt-2"
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
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
                  <div className="space-y-4">
                    {content.about.bio.map((paragraph, index) => (
                      <div key={index} className="flex gap-2">
                        <Textarea
                          value={paragraph}
                          onChange={(e) => updateAboutBio(index, e.target.value)}
                          className="min-h-[80px]"
                          placeholder={`Parágrafo ${index + 1}`}
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
                  <div className="flex items-center justify-between mb-2">
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
                  <div className="space-y-4">
                    {content.about.credentials.map((credential, index) => (
                      <Card key={index} className="p-4">
                        <div className="flex gap-4">
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
                <div className="grid md:grid-cols-2 gap-6">
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
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
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
                  <div className="space-y-4">
                    {content.services.services.map((service, index) => (
                      <Card key={index} className="p-4">
                        <div className="flex gap-4">
                          <div className="flex-1 space-y-4">
                            <ImageUploader
                              label={`Ícone do Serviço ${index + 1}`}
                              value={service.icon}
                              onChange={(image) => updateService(index, "icon", image)}
                              aspectRatio="square"
                              maxSizeMB={1}
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
                              className="min-h-[80px]"
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
                <div className="grid md:grid-cols-2 gap-6">
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
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
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
                  <div className="space-y-4">
                    {content.testimonials.testimonials.map((testimonial, index) => (
                      <Card key={index} className="p-4">
                        <div className="flex gap-4">
                          <div className="flex-1 space-y-3">
                            <Textarea
                              value={testimonial.text}
                              onChange={(e) => updateTestimonial(index, "text", e.target.value)}
                              placeholder="Texto do depoimento"
                              className="min-h-[100px]"
                            />
                            <div className="grid grid-cols-2 gap-3">
                              <Input
                                value={testimonial.author}
                                onChange={(e) => updateTestimonial(index, "author", e.target.value)}
                                placeholder="Autor (ex: M.S.)"
                              />
                              <Input
                                value={testimonial.context}
                                onChange={(e) => updateTestimonial(index, "context", e.target.value)}
                                placeholder="Contexto (ex: Cliente há 1 ano)"
                              />
                            </div>
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
                <div className="grid md:grid-cols-2 gap-6">
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
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Label className="text-base font-semibold">Perguntas Frequentes</Label>
                    <Button
                      type="button"
                      size="sm"
                      onClick={addFAQ}
                      className="gap-2"
                    >
                      <Plus weight="bold" />
                      Adicionar Pergunta
                    </Button>
                  </div>
                  <div className="space-y-4">
                    {content.faq.faqs.map((faq, index) => (
                      <Card key={index} className="p-4">
                        <div className="flex gap-4">
                          <div className="flex-1 space-y-3">
                            <Input
                              value={faq.question}
                              onChange={(e) => updateFAQ(index, "question", e.target.value)}
                              placeholder="Pergunta"
                            />
                            <Textarea
                              value={faq.answer}
                              onChange={(e) => updateFAQ(index, "answer", e.target.value)}
                              placeholder="Resposta"
                              className="min-h-[100px]"
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
                <div className="grid md:grid-cols-2 gap-6">
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
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="contact-whatsapp" className="text-base font-semibold">WhatsApp (código internacional)</Label>
                    <Input
                      id="contact-whatsapp"
                      value={content.contact.whatsappNumber}
                      onChange={(e) => updateContact("whatsappNumber", e.target.value)}
                      placeholder="5511999999999"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-phone" className="text-base font-semibold">Telefone (formatado)</Label>
                    <Input
                      id="contact-phone"
                      value={content.contact.phone}
                      onChange={(e) => updateContact("phone", e.target.value)}
                      placeholder="(11) 99999-9999"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-email" className="text-base font-semibold">E-mail</Label>
                    <Input
                      id="contact-email"
                      value={content.contact.email}
                      onChange={(e) => updateContact("email", e.target.value)}
                      placeholder="contato@exemplo.com.br"
                      className="mt-2"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="contact-schedule" className="text-base font-semibold">Horário de Atendimento</Label>
                  <Textarea
                    id="contact-schedule"
                    value={content.contact.scheduleText}
                    onChange={(e) => updateContact("scheduleText", e.target.value)}
                    className="mt-2 min-h-[80px]"
                    placeholder="Segunda a Sexta: 8h às 20h&#10;Sábado: 8h às 14h"
                  />
                </div>
              </TabsContent>

              <TabsContent value="footer" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
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
                      className="mt-2"
                      placeholder="CRP: 00/00000 | Atendimento presencial e online"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="footer-description" className="text-base font-semibold">Descrição</Label>
                  <Textarea
                    id="footer-description"
                    value={content.footer.description}
                    onChange={(e) => updateFooter("description", e.target.value)}
                    className="mt-2 min-h-[80px]"
                  />
                </div>
                <div className="grid md:grid-cols-3 gap-6">
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
                    <Label htmlFor="footer-schedule" className="text-base font-semibold">Horário</Label>
                    <Textarea
                      id="footer-schedule"
                      value={content.footer.schedule}
                      onChange={(e) => updateFooter("schedule", e.target.value)}
                      className="mt-2 min-h-[80px]"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </div>
  )
}
