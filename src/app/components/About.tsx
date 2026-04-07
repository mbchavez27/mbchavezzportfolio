import { Code2, Palette, Rocket, Users } from 'lucide-react'
import { FadeIn } from './FadeIn'

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Full-Stack Dev',
      description:
        'Building with TypeScript, Go, Python, and C++ for scalable applications.',
    },
    {
      icon: Palette,
      title: 'NLP & Affective Computing',
      description:
        'Researching multilingual sentiment analysis and emotion detection systems.',
    },
    {
      icon: Rocket,
      title: 'Innovation & Startups',
      description:
        'From indie game development to scalable web platforms and ML research.',
    },
    {
      icon: Users,
      title: 'Technical Leadership',
      description:
        'Leading frontend teams and supporting large-scale technical operations.',
    },
  ]

  return (
    <section
      className="min-h-screen flex flex-col justify-center py-24 px-6 relative snap-start snap-always"
      id="about"
    >
      <div className="max-w-6xl mx-auto w-full">
        <FadeIn className="mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
            About
          </h2>
          <div className="h-px w-12 bg-primary/40 mt-4" />
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
          <FadeIn distance={30}>
            <img
              src="/images/max.jpeg"
              alt="Max Benedict Chavez"
              className="rounded-xl w-full object-cover aspect-[4/5] border border-white/[0.06]"
            />
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="pt-4">
              <h3 className="text-2xl font-semibold tracking-tight mb-6">
                AI × Software Engineering
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Computer Science student specializing in Software Engineering,
                NLP, and Affective Computing. Currently the Lead Frontend
                Engineer at La Salle Computer Society and a Technical Operator
                at Green Media Group. I build scalable full-stack and ML
                solutions using TypeScript, and Python.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm passionate about building high-impact tech with real-world
                results. Recent milestones include delivering Next.js apps with
                445K+ views and 99.9% uptime, achieving 94.16% accuracy in
                multilingual NLP research, and winning top placements in
                competitive hackathons (1st place JISSA CTF 2021, 2nd place
                Bluehacks 2025).
              </p>
            </div>
          </FadeIn>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item, index) => (
            <FadeIn key={index} delay={index * 0.08}>
              <div className="p-8 rounded-xl border border-white/[0.06] bg-card hover:border-primary/20 transition-colors duration-300">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
