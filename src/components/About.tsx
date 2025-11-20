import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { GraduationCap, Certificate, Heart } from "@phosphor-icons/react"
import { useKV } from "@github/spark/hooks"
import { defaultSiteContent, SiteContent } from "@/lib/types"

const iconMap = [GraduationCap, Certificate, Heart]

export function About() {
  const [content] = useKV<SiteContent>("site-content", defaultSiteContent)

  return (
    <section id="sobre" className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            {content.about.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {content.about.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {content.about.profileImage && (
              <div className="flex justify-center md:justify-start mb-6">
                <div className="w-56 h-72 rounded-2xl overflow-hidden shadow-xl ring-4 ring-primary/20">
                  <img 
                    src={content.about.profileImage} 
                    alt={content.about.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
            <Card className="p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">{content.about.name}</h3>
              <div className="space-y-4 text-foreground/90 leading-relaxed">
                {content.about.bio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
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
            {content.about.credentials.map((credential, index) => {
              const Icon = iconMap[index % iconMap.length]
              return (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon size={24} className="text-accent" weight="duotone" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{credential.title}</h4>
                      <p className="text-muted-foreground">{credential.description}</p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
