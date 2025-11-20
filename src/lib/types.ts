export interface HeroContent {
  headline: string
  description: string
  ctaPrimary: string
  ctaSecondary: string
}

export interface AboutContent {
  title: string
  subtitle: string
  name: string
  bio: string[]
  credentials: Array<{
    title: string
    description: string
  }>
}

export interface Service {
  title: string
  description: string
}

export interface ServicesContent {
  title: string
  subtitle: string
  services: Service[]
}

export interface Testimonial {
  text: string
  author: string
  context: string
}

export interface TestimonialsContent {
  title: string
  subtitle: string
  testimonials: Testimonial[]
}

export interface FAQ {
  question: string
  answer: string
}

export interface FAQContent {
  title: string
  subtitle: string
  faqs: FAQ[]
}

export interface ContactInfo {
  label: string
  value: string
  href: string
  primary?: boolean
}

export interface ContactContent {
  title: string
  subtitle: string
  whatsappNumber: string
  phone: string
  email: string
  scheduleText: string
}

export interface FooterContent {
  name: string
  description: string
  phone: string
  email: string
  schedule: string
  crp: string
}

export interface SiteContent {
  hero: HeroContent
  about: AboutContent
  services: ServicesContent
  testimonials: TestimonialsContent
  faq: FAQContent
  contact: ContactContent
  footer: FooterContent
}

export const defaultSiteContent: SiteContent = {
  hero: {
    headline: "Um espaço seguro para o seu autoconhecimento",
    description: "Psicanalista dedicada a acolher suas questões mais profundas, oferecendo escuta atenta e cuidado no processo de transformação pessoal.",
    ctaPrimary: "Agendar Consulta",
    ctaSecondary: "Conheça Meu Trabalho"
  },
  about: {
    title: "Sobre Mim",
    subtitle: "Dedicada a oferecer um espaço de escuta e acolhimento",
    name: "Ana Paula Carneiro",
    bio: [
      "Como psicanalista, acredito que cada pessoa carrega em si as respostas para suas questões mais profundas. Meu papel é oferecer um espaço seguro onde você possa explorar seus pensamentos, sentimentos e experiências.",
      "Ao longo dos anos de prática clínica, tenho me dedicado a compreender a singularidade de cada sujeito, respeitando seu tempo e suas necessidades no processo analítico.",
      "A escuta psicanalítica vai além das palavras – ela acolhe o não-dito, os silêncios e aquilo que muitas vezes é difícil de nomear, criando possibilidades de transformação e autoconhecimento."
    ],
    credentials: [
      {
        title: "Formação em Psicanálise",
        description: "Formação completa em teoria e clínica psicanalítica"
      },
      {
        title: "Especialização Clínica",
        description: "Especialização em atendimento de adolescentes e adultos"
      },
      {
        title: "Atendimento Humanizado",
        description: "Abordagem acolhedora centrada na singularidade de cada pessoa"
      }
    ]
  },
  services: {
    title: "Áreas de Atuação",
    subtitle: "Atendimento psicanalítico para diversas questões e momentos da vida",
    services: [
      {
        title: "Ansiedade e Estresse",
        description: "Compreensão profunda dos sintomas ansiosos e suas origens, buscando formas de lidar com as angústias do cotidiano."
      },
      {
        title: "Depressão e Melancolia",
        description: "Acolhimento das questões depressivas, investigando o sofrimento psíquico e suas manifestações."
      },
      {
        title: "Relacionamentos",
        description: "Exploração dos vínculos afetivos, padrões relacionais e dificuldades nos laços com o outro."
      },
      {
        title: "Autoconhecimento",
        description: "Processo de descoberta de si mesmo, seus desejos, conflitos internos e possibilidades de ser."
      },
      {
        title: "Transições de Vida",
        description: "Apoio em momentos de mudança, perdas, escolhas difíceis e recomeços."
      },
      {
        title: "Desenvolvimento Pessoal",
        description: "Trabalho voltado para o crescimento pessoal, autoestima e construção de novos caminhos."
      }
    ]
  },
  testimonials: {
    title: "Depoimentos",
    subtitle: "Histórias de transformação e autoconhecimento",
    testimonials: [
      {
        text: "As sessões com Ana Paula me ajudaram a compreender padrões que eu repetia há anos. Hoje consigo me relacionar de forma mais saudável e autêntica.",
        author: "M.S.",
        context: "Cliente há 1 ano"
      },
      {
        text: "Encontrei na análise um espaço onde pude falar sem julgamentos. A escuta cuidadosa da Ana Paula fez toda diferença no meu processo de autoconhecimento.",
        author: "R.L.",
        context: "Cliente há 2 anos"
      },
      {
        text: "Estava passando por um momento muito difícil e a terapia foi fundamental. Me senti acolhida desde a primeira sessão e aos poucos fui recuperando minha força.",
        author: "C.A.",
        context: "Cliente há 6 meses"
      },
      {
        text: "A análise me proporcionou um entendimento profundo sobre mim mesma. Aprendi a escutar meus próprios desejos e fazer escolhas mais conscientes.",
        author: "P.F.",
        context: "Cliente há 1 ano e meio"
      }
    ]
  },
  faq: {
    title: "Perguntas Frequentes",
    subtitle: "Esclareça suas dúvidas sobre o processo psicanalítico",
    faqs: [
      {
        question: "Como funciona a primeira consulta?",
        answer: "A primeira consulta é um momento de conhecimento mútuo, onde você poderá falar sobre o que te traz à análise e eu apresentarei como funciona o processo psicanalítico. É um espaço acolhedor e sem compromisso, onde você pode tirar suas dúvidas sobre a terapia."
      },
      {
        question: "Qual a diferença entre psicanálise e outras terapias?",
        answer: "A psicanálise se dedica a investigar o inconsciente, buscando compreender os conflitos internos e padrões que se repetem na vida do sujeito. O foco está na escuta do singular de cada pessoa, sem julgamentos ou direcionamentos, respeitando o tempo necessário para que as questões se revelem."
      },
      {
        question: "Com que frequência são as sessões?",
        answer: "A frequência ideal varia de acordo com cada caso e será discutida entre nós. Geralmente, iniciamos com uma ou duas sessões semanais, mas isso pode ser ajustado conforme sua necessidade e disponibilidade."
      },
      {
        question: "Quanto tempo dura o processo de análise?",
        answer: "Não há um tempo pré-determinado. A psicanálise respeita o tempo singular de cada pessoa. Algumas questões podem ser elaboradas mais rapidamente, enquanto outras demandam um trabalho mais longo. O importante é que você se sinta à vontade no processo."
      },
      {
        question: "O atendimento é presencial ou online?",
        answer: "Ofereço as duas modalidades. O atendimento presencial acontece no consultório, e o online é realizado por videochamada em plataforma segura. Ambas as formas mantêm a mesma qualidade e sigilo do processo analítico."
      },
      {
        question: "Como funciona o sigilo profissional?",
        answer: "O sigilo é fundamental na psicanálise e está resguardado pelo código de ética profissional. Tudo o que é dito nas sessões é absolutamente confidencial, criando um espaço de confiança para que você possa se expressar livremente."
      },
      {
        question: "Qual o valor da consulta?",
        answer: "Os valores são informados no primeiro contato e podem variar conforme a modalidade (presencial ou online). Trabalho também com valores ajustados de acordo com a possibilidade de cada pessoa, pois acredito que o acesso à análise deve ser viável."
      },
      {
        question: "Preciso de encaminhamento médico?",
        answer: "Não é necessário encaminhamento médico para iniciar a análise. Você pode entrar em contato diretamente comigo para agendar a primeira consulta. Em alguns casos específicos, pode ser importante um acompanhamento integrado com psiquiatra ou outros profissionais."
      }
    ]
  },
  contact: {
    title: "Entre em Contato",
    subtitle: "Dê o primeiro passo em direção ao autoconhecimento. Estou aqui para acolher você.",
    whatsappNumber: "5511999999999",
    phone: "(11) 99999-9999",
    email: "contato@anapaulacarneiro.com.br",
    scheduleText: "Segunda a Sexta: 8h às 20h\nSábado: 8h às 14h"
  },
  footer: {
    name: "Ana Paula Carneiro",
    description: "Psicanalista dedicada ao acolhimento e escuta atenta, oferecendo um espaço seguro para o autoconhecimento.",
    phone: "(11) 99999-9999",
    email: "contato@anapaulacarneiro.com.br",
    schedule: "Segunda a Sexta: 8h às 20h\nSábado: 8h às 14h",
    crp: "CRP: 00/00000 | Atendimento presencial e online"
  }
}
