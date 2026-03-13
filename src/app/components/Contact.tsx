import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function Contact() {
  return (
    <section className="py-24 px-6 bg-secondary/50" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 inline-block bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Contact
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="mb-1">Email</div>
                <a href="mailto:maxbenedictchavez@gmail.com" className="text-muted-foreground hover:text-primary transition-colors break-all">
                  maxbenedictchavez@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="mb-1">Location</div>
                <p className="text-muted-foreground">Pasay, Philippines</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Github className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="mb-1">GitHub</div>
                <a href="https://github.com/mbchavez27" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors break-all">
                  github.com/mbchavez27
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Linkedin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="mb-1">LinkedIn</div>
                <a href="https://www.linkedin.com/in/mbchavez/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors break-all">
                  linkedin.com/in/mbchavez
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}