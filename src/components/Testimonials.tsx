import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Quotes } from "@phosphor-icons/react"
import { useSiteContent } from "@/hooks/use-site-content"

export function Testimonials() {
  const [content] = useSiteContent()
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % content.testimonials.testimonials.length)
    }, 7000)

    return () => clearInterval(timer)
  }, [content.testimonials.testimonials.length])

  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            {content.testimonials.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {content.testimonials.subtitle}
          </p>
        </motion.div>

        <div className="relative min-h-[320px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-full"
            >
              <Card className="p-10 md:p-12 shadow-xl bg-card relative">
                <div className="absolute -top-4 left-10">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shadow-lg">
                    <Quotes size={24} className="text-accent-foreground" weight="fill" />
                  </div>
                </div>
                
                <blockquote className="mt-4">
                  <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-6 italic">
                    "{content.testimonials.testimonials[currentIndex].text}"
                  </p>
                  <footer className="flex flex-col gap-1">
                    <cite className="not-italic font-semibold text-accent">
                      {content.testimonials.testimonials[currentIndex].author}
                    </cite>
                    <span className="text-sm text-muted-foreground">
                      {content.testimonials.testimonials[currentIndex].context}
                    </span>
                  </footer>
                </blockquote>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {content.testimonials.testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-accent w-8" 
                    : "bg-border hover:bg-accent/50"
                }`}
                aria-label={`Ver depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
