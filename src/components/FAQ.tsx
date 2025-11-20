import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
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

  return (
    <section id="faq" className="py-24 px-6 bg-background">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Esclareça suas dúvidas sobre o processo psicanalítico
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card px-6 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:text-accent py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
