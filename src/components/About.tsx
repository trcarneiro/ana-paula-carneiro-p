import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { GraduationCap, Certificate, Heart } from "@phosphor-icons/react"

export function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  const credentials = [
    {
      icon: GraduationCap,
      title: "Formação em Psicanálise",
      description: "Formação completa em teoria e clínica psicanalítica"
    },
    {
      icon: Certificate,
      title: "Especialização Clínica",
      description: "Especialização em atendimento de adolescentes e adultos"
    },
    {
      icon: Heart,
      title: "Atendimento Humanizado",
      description: "Abordagem acolhedora centrada na singularidade de cada pessoa"
    }
  ]

  return (
    <section id="sobre" className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            Sobre Mim
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dedicada a oferecer um espaço de escuta e acolhimento
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Ana Paula Carneiro</h3>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                <p>
                  Como psicanalista, acredito que cada pessoa carrega em si as respostas 
                  para suas questões mais profundas. Meu papel é oferecer um espaço seguro 
                  onde você possa explorar seus pensamentos, sentimentos e experiências.
                </p>
                <p>
                  Ao longo dos anos de prática clínica, tenho me dedicado a compreender 
                  a singularidade de cada sujeito, respeitando seu tempo e suas necessidades 
                  no processo analítico.
                </p>
                <p>
                  A escuta psicanalítica vai além das palavras – ela acolhe o não-dito, 
                  os silêncios e aquilo que muitas vezes é difícil de nomear, criando 
                  possibilidades de transformação e autoconhecimento.
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {credentials.map((credential, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <credential.icon size={24} className="text-accent" weight="duotone" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{credential.title}</h4>
                    <p className="text-muted-foreground">{credential.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
