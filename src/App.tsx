import { useState, useEffect } from "react"
import { Toaster } from "@/components/ui/sonner"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { Services } from "@/components/Services"
import { Testimonials } from "@/components/Testimonials"
import { FAQ } from "@/components/FAQ"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"
import { WhatsAppButton } from "@/components/WhatsAppButton"
import { AdminPanel } from "@/components/admin/AdminPanel"
import { Button } from "@/components/ui/button"
import { GearSix } from "@phosphor-icons/react"

function App() {
  const [showAdmin, setShowAdmin] = useState(false)
  const [isOwner, setIsOwner] = useState(false)

  useEffect(() => {
    spark.user().then((user) => {
      setIsOwner(user.isOwner)
    })
  }, [])

  if (showAdmin && isOwner) {
    return (
      <AdminPanel
        onClose={() => setShowAdmin(false)}
        onPreview={() => setShowAdmin(false)}
      />
    )
  }

  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
      
      {isOwner && (
        <Button
          onClick={() => setShowAdmin(true)}
          className="fixed bottom-6 left-6 z-50 w-16 h-16 rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 bg-accent hover:bg-accent/90"
          size="icon"
          aria-label="Abrir painel administrativo"
        >
          <GearSix size={28} weight="duotone" />
        </Button>
      )}
      
      <Toaster position="top-center" />
    </div>
  )
}

export default App