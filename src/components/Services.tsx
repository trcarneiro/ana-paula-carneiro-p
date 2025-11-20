import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Brain, Heart, Users, Path, Flower, Sparkle } from "@phosphor-icons/react"

export function Services() {
  const services = [
    {
      icon: Brain,
      title: "Ansiedade e Estresse",
      description: "Compreensão profunda dos sintomas ansiosos e suas origens, buscando formas de lidar com as angústias do cotidiano."
    },
    {
      icon: Heart,
      title: "Depressão e Melancolia",
      description: "Acolhimento das questões depressivas, investigando o sofrimento psíquico e suas manifestações."
    },
    {
      icon: Users,
      title: "Relacionamentos",
      description: "Exploração dos vínculos afetivos, padrões relacionais e dificuldades nos laços com o outro."
    },
    {
      icon: Path,
      title: "Autoconhecimento",
      description: "Processo de descoberta de si mesmo, seus desejos, conflitos internos e possibilidades de ser."
    },
    {
      icon: Flower,
      title: "Transições de Vida",
      description: "Apoio em momentos de mudança, perdas, escolhas difíceis e recomeços."
    },
    {
      icon: Sparkle,
      title: "Desenvolvimento Pessoal",
      description: "Trabalho voltado para o crescimento pessoal, autoestima e construção de novos caminhos."
    }
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <section id="servicos" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            Áreas de Atuação
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Atendimento psicanalítico para diversas questões e momentos da vida
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="p-8 h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-card">
                <div className="flex flex-col h-full">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                    <service.icon size={28} className="text-accent" weight="duotone" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed flex-grow">
                    {service.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
