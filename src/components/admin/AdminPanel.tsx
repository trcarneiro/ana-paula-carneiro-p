import { useKV } from "@github/spark/hooks"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  X, 
  FloppyDisk, 
  Plus, 
  Trash 
} from "@phosphor-icons/react"
import { toast } from "sonner"

interface SiteContent {
  hero: {
    title: string
    subtitle: string
    ctaText: string
  }
  about: {
    title: string
    subtitle: string
    profileImage: string
    bio: string[]
    credentials: Array<{ title: string; description: string }>
  }
  services: {
    title: string
    subtitle: string
    items: Array<{ icon: string; title: string; description: string }>
  }
  testimonials: {
    title: string
    subtitle: string
    testimonials: Array<{ text: string; author: string; role: string }>
  }
  faq: {
    title: string
    subtitle: string
    items: Array<{ question: string; answer: string }>
  }
  contact: {
    title: string
    subtitle: string
    whatsapp: string
    phone: string
    email: string
    address: string
  }
  footer: {
    name: string
    crp: string
    description: string
    phone: string
    email: string
    copyright: string
  }
}

const defaultContent: SiteContent = {
  hero: {
    title: "Ana Paula Carneiro",
    subtitle: "Psicanalista | Acolhimento e Escuta Terapêutica",
    ctaText: "Agende sua Consulta"
  },
  about: {
    title: "Sobre Mim",
    subtitle: "Conheça minha trajetória",
    profileImage: "",
    bio: [
      "Sou Ana Paula Carneiro, psicanalista dedicada ao acolhimento e à escuta terapêutica.",
      "Minha prática é fundamentada na psicanálise clássica e contemporânea."
    ],
    credentials: [
      { title: "Formação em Psicanálise", description: "Instituto Brasileiro de Psicanálise" },
      { title: "Especialização Clínica", description: "Atendimento a adultos e adolescentes" }
    ]
  },
  services: {
    title: "Serviços",
    subtitle: "Como posso ajudar você",
    items: [
      { icon: "User", title: "Terapia Individual", description: "Atendimento personalizado" },
      { icon: "Users", title: "Terapia de Casal", description: "Fortalecimento de vínculos" }
    ]
  },
  testimonials: {
    title: "Depoimentos",
    subtitle: "O que dizem meus pacientes",
    testimonials: [
      { text: "Excelente profissional, muito atenciosa.", author: "Maria S.", role: "Paciente" }
    ]
  },
  faq: {
    title: "Perguntas Frequentes",
    subtitle: "Tire suas dúvidas",
    items: [
      { question: "Como funciona a primeira consulta?", answer: "A primeira consulta é um momento de conhecimento mútuo." }
    ]
  },
  contact: {
    title: "Entre em Contato",
    subtitle: "Estou aqui para ajudar",
    whatsapp: "+55 11 99999-9999",
    phone: "+55 11 3333-3333",
    email: "contato@exemplo.com",
    address: "São Paulo, SP"
  },
  footer: {
    name: "Ana Paula Carneiro",
    crp: "CRP 06/123456",
    description: "Psicanalista dedicada ao cuidado e acolhimento.",
    phone: "+55 11 99999-9999",
    email: "contato@exemplo.com",
    copyright: "© 2024 Ana Paula Carneiro. Todos os direitos reservados."
  }
}

interface AdminPanelProps {
  onClose: () => void
  onPreview: () => void
}

export function AdminPanel({ onClose, onPreview }: AdminPanelProps) {
  const [content, setContent] = useKV<SiteContent>("site-content", defaultContent)

  const handleSave = () => {
    toast.success("Alterações salvas com sucesso!")
  }

  const updateHero = (field: keyof SiteContent["hero"], value: string) => {
    setContent((current) => ({
      ...current,
      hero: { ...current.hero, [field]: value }
    }))
  }

  const updateAbout = (field: keyof SiteContent["about"], value: string) => {
    setContent((current) => ({
      ...current,
      about: { ...current.about, [field]: value }
    }))
  }

  const updateBio = (index: number, value: string) => {
    setContent((current) => {
      const newBio = [...current.about.bio]
      newBio[index] = value
      return {
        ...current,
        about: { ...current.about, bio: newBio }
      }
    })
  }

  const addBio = () => {
    setContent((current) => ({
      ...current,
      about: { ...current.about, bio: [...current.about.bio, ""] }
    }))
  }

  const removeBio = (index: number) => {
    setContent((current) => ({
      ...current,
      about: { ...current.about, bio: current.about.bio.filter((_, i) => i !== index) }
    }))
  }

  const updateCredential = (index: number, field: "title" | "description", value: string) => {
    setContent((current) => {
      const newCredentials = [...current.about.credentials]
      newCredentials[index] = { ...newCredentials[index], [field]: value }
      return {
        ...current,
        about: { ...current.about, credentials: newCredentials }
      }
    })
  }

  const addCredential = () => {
    setContent((current) => ({
      ...current,
      about: {
        ...current.about,
        credentials: [...current.about.credentials, { title: "", description: "" }]
      }
    }))
  }

  const removeCredential = (index: number) => {
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
      const newServices = [...current.services.items]
      newServices[index] = { ...newServices[index], [field]: value }
      return {
        ...current,
        services: { ...current.services, items: newServices }
      }
    })
  }

  const addService = () => {
    setContent((current) => ({
      ...current,
      services: {
        ...current.services,
        items: [...current.services.items, { icon: "", title: "", description: "" }]
      }
    }))
  }

  const removeService = (index: number) => {
    setContent((current) => ({
      ...current,
      services: {
        ...current.services,
        items: current.services.items.filter((_, i) => i !== index)
      }
    }))
  }

  const updateTestimonial = (index: number, field: "text" | "author" | "role", value: string) => {
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
        testimonials: [...current.testimonials.testimonials, { text: "", author: "", role: "" }]
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
      const newFAQs = [...current.faq.items]
      newFAQs[index] = { ...newFAQs[index], [field]: value }
      return {
        ...current,
        faq: { ...current.faq, items: newFAQs }
      }
    })
  }

  const addFAQ = () => {
    setContent((current) => ({
      ...current,
      faq: {
        ...current.faq,
        items: [...current.faq.items, { question: "", answer: "" }]
      }
    }))
  }

  const removeFAQ = (index: number) => {
    setContent((current) => ({
      ...current,
      faq: {
        ...current.faq,
        items: current.faq.items.filter((_, i) => i !== index)
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
              variant="secondary"
              onClick={onPreview}
              className="gap-2"
            >
              Visualizar
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
                value={content.hero.title}
                onChange={(e) => updateHero("title", e.target.value)}
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="hero-subtitle" className="text-base font-semibold">Subtítulo</Label>
              <Input
                id="hero-subtitle"
                value={content.hero.subtitle}
                onChange={(e) => updateHero("subtitle", e.target.value)}
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="hero-cta" className="text-base font-semibold">Texto do Botão</Label>
              <Input
                id="hero-cta"
                value={content.hero.ctaText}
                onChange={(e) => updateHero("ctaText", e.target.value)}
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
                value={content.about.profileImage}
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
                  onClick={addBio}
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
                      onChange={(e) => updateBio(index, e.target.value)}
                      placeholder={`Parágrafo ${index + 1}`}
                      className="flex-1"
                    />
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => removeBio(index)}
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
                  onClick={addCredential}
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
                          onChange={(e) => updateCredential(index, "title", e.target.value)}
                          placeholder="Título"
                        />
                        <Input
                          value={credential.description}
                          onChange={(e) => updateCredential(index, "description", e.target.value)}
                          placeholder="Descrição"
                        />
                      </div>
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        onClick={() => removeCredential(index)}
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
                {content.services.items.map((service, index) => (
                  <Card key={index} className="p-4">
                    <div className="flex gap-3">
                      <div className="flex-1 space-y-3">
                        <Input
                          id={`service-icon-${index}`}
                          value={service.icon}
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
                          value={testimonial.role}
                          onChange={(e) => updateTestimonial(index, "role", e.target.value)}
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
                {content.faq.items.map((item, index) => (
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
                  value={content.contact.whatsapp}
                  onChange={(e) => updateContact("whatsapp", e.target.value)}
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
              <Label htmlFor="contact-address" className="text-base font-semibold">Endereço</Label>
              <Textarea
                id="contact-address"
                value={content.contact.address}
                onChange={(e) => updateContact("address", e.target.value)}
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
              <Label htmlFor="footer-copyright" className="text-base font-semibold">Copyright</Label>
              <Textarea
                id="footer-copyright"
                value={content.footer.copyright}
                onChange={(e) => updateFooter("copyright", e.target.value)}
                className="mt-2"
              />
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  )
}
