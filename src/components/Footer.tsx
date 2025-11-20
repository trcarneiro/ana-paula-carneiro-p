export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-xl mb-4" style={{ fontFamily: 'Crimson Pro, serif' }}>
              Ana Paula Carneiro
            </h3>
            <p className="text-background/80 text-sm leading-relaxed">
              Psicanalista dedicada ao acolhimento e escuta atenta, 
              oferecendo um espaço seguro para o autoconhecimento.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <a href="#sobre" className="text-background/80 hover:text-background transition-colors">
                Sobre Mim
              </a>
              <a href="#servicos" className="text-background/80 hover:text-background transition-colors">
                Áreas de Atuação
              </a>
              <a href="#faq" className="text-background/80 hover:text-background transition-colors">
                Perguntas Frequentes
              </a>
              <a href="#contato" className="text-background/80 hover:text-background transition-colors">
                Contato
              </a>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-sm text-background/80">
              <p>
                <a href="tel:+5511999999999" className="hover:text-background transition-colors">
                  (11) 99999-9999
                </a>
              </p>
              <p>
                <a href="mailto:contato@anapaulacarneiro.com.br" className="hover:text-background transition-colors">
                  contato@anapaulacarneiro.com.br
                </a>
              </p>
              <p className="pt-2">
                Segunda a Sexta: 8h às 20h<br />
                Sábado: 8h às 14h
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20 text-center text-sm text-background/60">
          <p>
            © {new Date().getFullYear()} Ana Paula Carneiro. Todos os direitos reservados.
          </p>
          <p className="mt-2">
            CRP: 00/00000 | Atendimento presencial e online
          </p>
        </div>
      </div>
    </footer>
  )
}
