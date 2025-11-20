import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "@phosphor-icons/react"

export function Hero() {
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
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
          Um espaço seguro para o seu{" "}
          <span className="text-accent">autoconhecimento</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Psicanalista dedicada a acolher suas questões mais profundas, 
          oferecendo escuta atenta e cuidado no processo de transformação pessoal.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            onClick={scrollToContact}
          >
            Agendar Consulta
            <ArrowRight weight="bold" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 hover:bg-secondary/50"
            onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Conheça Meu Trabalho
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
