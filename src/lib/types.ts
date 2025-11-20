export interface HeroContent {
  headline: string
  description: string
  ctaPrimary: string
  ctaSecondary: string
  profileImage?: string
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
  profileImage?: string
}

export interface Service {
  title: string
  description: string
  icon?: string
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

// Default content is now loaded from src/data/site-content.json
// This export is kept for backward compatibility if needed, but should be removed
export const defaultSiteContent: SiteContent = {} as SiteContent

