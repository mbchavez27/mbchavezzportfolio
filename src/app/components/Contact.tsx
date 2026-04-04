import { Github, Linkedin, Mail, MapPin } from 'lucide-react'

export function Contact() {
  return (
    <section className="py-24 px-6" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
            Contact
          </h2>
          <div className="h-px w-12 bg-primary/40 mt-4" />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <div className="text-sm font-medium text-muted-foreground mb-2">Email</div>
              <a
                href="mailto:maxbenedictchavez@gmail.com"
                className="text-foreground hover:text-primary transition-colors duration-200 break-all"
              >
                maxbenedictchavez@gmail.com
              </a>
            </div>

            <div>
              <div className="text-sm font-medium text-muted-foreground mb-2">Location</div>
              <p className="text-foreground">Pasay, Philippines</p>
            </div>

            <div>
              <div className="text-sm font-medium text-muted-foreground mb-2">GitHub</div>
              <a
                href="https://github.com/mbchavez27"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors duration-200 break-all"
              >
                github.com/mbchavez27
              </a>
            </div>

            <div>
              <div className="text-sm font-medium text-muted-foreground mb-2">LinkedIn</div>
              <a
                href="https://www.linkedin.com/in/mbchavez/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors duration-200 break-all"
              >
                linkedin.com/in/mbchavez
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
