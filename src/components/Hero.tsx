import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "@phosphor-icons/react"
import { useKV } from "@github/spark/hooks"
import { defaultSiteContent, SiteContent } from "@/lib/types"

export function Hero() {
  const [content] = useKV<SiteContent>("site-content", defaultSiteContent)

  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto text-center space-y-8"
      >
        {content.hero.profileImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-xl ring-4 ring-primary/20">
              <img 
                src={content.hero.profileImage} 
                alt="Ana Paula Carneiro"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        )}
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
          {content.hero.headline.split("autoconhecimento")[0]}
          <span className="text-accent">autoconhecimento</span>
          {content.hero.headline.split("autoconhecimento")[1]}
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {content.hero.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            onClick={scrollToContact}
          >
            {content.hero.ctaPrimary}
            <ArrowRight weight="bold" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 hover:bg-secondary/50"
            onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {content.hero.ctaSecondary}
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
