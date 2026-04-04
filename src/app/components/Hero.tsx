import { Github, Linkedin, Mail, ArrowDown, ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'

export function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }
  }

  return (
    <section className="min-h-screen flex flex-col justify-center relative px-6 pt-28">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <motion.div
        className="max-w-5xl mx-auto w-full relative z-10"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item} className="mb-10">
          <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 font-semibold tracking-tight bg-gradient-to-r from-foreground via-foreground to-primary/80 bg-clip-text text-transparent">
            Max Benedict Chavez
          </h1>
          <p className="text-muted-foreground text-lg">
            Software Engineer & AI Researcher
          </p>
        </motion.div>

        <motion.p variants={item} className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl leading-snug">
          Building human-centered systems and exploring affective computing to
          bridge practical software development with AI research.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap items-center gap-3">
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
            className="w-11 h-11 rounded-full bg-white/[0.05] flex items-center justify-center hover:bg-primary/10 transition-colors duration-200 group"
          >
            <Github className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
          </a>
          <a
            href="https://www.linkedin.com/in/mbchavez/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-white/[0.05] flex items-center justify-center hover:bg-primary/10 transition-colors duration-200 group"
          >
            <Linkedin className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
          </a>
          <a
            href="mailto:maxbenedictchavez@gmail.com"
            className="w-11 h-11 rounded-full bg-white/[0.05] flex items-center justify-center hover:bg-primary/10 transition-colors duration-200 group"
          >
            <Mail className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
          </a>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-30 animate-pulse">
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  )
}
