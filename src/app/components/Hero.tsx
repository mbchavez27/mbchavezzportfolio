import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'
import { Button } from './ui/button'

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden px-6 pt-32">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <div className="mb-12">
          <h1 className="text-6xl md:text-8xl lg:text-9xl mb-4 font-bold">
            <span className="bg-gradient-to-r from-foreground via-primary to-primary bg-clip-text text-transparent">
              Max Benedict Chavez
            </span>
          </h1>
          <span className="inline-block px-6 py-3 bg-primary/10 text-primary rounded-full text-base md:text-lg border border-primary/20">
            ML & Software Engineer
          </span>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl leading-relaxed">
          Lead Frontend Engineer at La Salle Computer Society, and aspiring NLP
          & Affective Computing researcher.
        </p>

        <div className="flex gap-4">
          <a
            href="https://github.com/mbchavez27"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary/10 hover:border-primary/40 transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/mbchavez/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary/10 hover:border-primary/40 transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:maxbenedictchavez@gmail.com"
            className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary/10 hover:border-primary/40 transition-colors"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  )
}
