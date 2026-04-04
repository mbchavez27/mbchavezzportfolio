import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <a href="#" className="text-lg font-semibold flex items-center gap-2">
            <span className="text-foreground">mb</span>
            <span className="text-primary">chavezz</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200">
              About
            </a>
            <a
              href="#experience"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Experience
            </a>
            <a href="#skills" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200">
              Skills
            </a>
            <a
              href="#projects"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Projects
            </a>
            <a href="#awards" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200">
              Awards
            </a>
            <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-4 py-6">
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#experience" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Experience
            </a>
            <a href="#skills" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Skills
            </a>
            <a
              href="#projects"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a href="#awards" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Awards
            </a>
            <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
