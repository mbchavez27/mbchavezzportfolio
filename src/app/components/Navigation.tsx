import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-primary/20">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-xl flex items-center gap-2 group">
            <div className="relative">
              <span className="text-2xl font-bold bg-gradient-to-br from-primary via-primary to-foreground bg-clip-text text-transparent">
                @
              </span>
              <div className="absolute -inset-1 bg-primary/20 blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <span className="font-mono tracking-tight">
              <span className="text-foreground">mb</span>
              <span className="text-primary">chavezz</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="hover:text-primary transition-colors">
              About
            </a>
            <a
              href="#experience"
              className="hover:text-primary transition-colors"
            >
              Experience
            </a>
            <a href="#skills" className="hover:text-primary transition-colors">
              Skills
            </a>
            <a
              href="#projects"
              className="hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a href="#awards" className="hover:text-primary transition-colors">
              Awards
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-6 py-6">
            <a href="#about" className="hover:text-primary transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-primary transition-colors">
              Skills
            </a>
            <a
              href="#projects"
              className="hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a href="#awards" className="hover:text-primary transition-colors">
              Awards
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
