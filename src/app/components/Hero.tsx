import { Github, Linkedin, Mail, ArrowDown, ArrowUpRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative px-6 pt-28">
      <div className="max-w-5xl mx-auto w-full">
        <div className="mb-10">
          <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 font-semibold tracking-tight text-foreground">
            Max Benedict Chavez
          </h1>
          <p className="text-muted-foreground text-lg">
            Software Engineer & AI Researcher
          </p>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl leading-snug">
          Building human-centered systems and exploring affective computing to
          bridge practical software development with AI research.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="https://drive.google.com/file/d/1dQ8OJHoPJEaYDg5MnW1FQ4rzgC26xrJT/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 h-11 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors duration-200"
          >
            View Resume
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/mbchavez27"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-white/[0.05] flex items-center justify-center hover:bg-white/[0.08] transition-colors duration-200"
          >
            <Github className="h-4 w-4 text-muted-foreground" />
          </a>
          <a
            href="https://www.linkedin.com/in/mbchavez/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-white/[0.05] flex items-center justify-center hover:bg-white/[0.08] transition-colors duration-200"
          >
            <Linkedin className="h-4 w-4 text-muted-foreground" />
          </a>
          <a
            href="mailto:maxbenedictchavez@gmail.com"
            className="w-11 h-11 rounded-full bg-white/[0.05] flex items-center justify-center hover:bg-white/[0.08] transition-colors duration-200"
          >
            <Mail className="h-4 w-4 text-muted-foreground" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-30 animate-pulse">
        <ArrowDown className="h-5 w-5 text-muted-foreground" />
      </div>
    </section>
  )
}
