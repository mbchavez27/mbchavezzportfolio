import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Awards } from './components/Awards'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Experience } from './components/Experience'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Awards />
      <Contact />
      <Footer />
    </div>
  )
}
