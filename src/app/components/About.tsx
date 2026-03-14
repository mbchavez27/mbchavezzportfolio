import { Code2, Palette, Rocket, Users } from 'lucide-react'

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
    <section className="py-24 px-6 relative" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 inline-block bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            About
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="/images/max.jpeg"
              alt="Max Benedict Chavez"
              className="rounded-lg border border-primary/20 shadow-lg shadow-primary/5 w-full object-cover aspect-square"
            />
          </div>
          <div>
            <h3 className="text-2xl mb-4">AI × Software Engineering</h3>
            <p className="text-muted-foreground mb-4">
              Computer Science student exploring the intersection of Software
              Engineering and Machine Learning, with a growing focus on Natural
              Language Processing and Affective Computing. Currently the Lead
              Frontend Engineer at La Salle Computer Society, building scalable,
              user-focused web platforms, and a Technical Operator at Green
              Media Group, supporting large-scale events through logistics and
              technical execution.
            </p>
            <p className="text-muted-foreground mb-4">
              Previously worked on indie game development through Epyxx Studios,
              gaining hands-on experience in end-to-end product development. My
              research focuses on multilingual sentiment analysis and NLP,
              achieving 94.16% accuracy in code-switching classification. On the
              engineering side, I've reduced project setup time by 50% through
              standardization tools and delivered scalable Next.js applications
              with 99.9% uptime and 445K+ page views.
            </p>
            <p className="text-muted-foreground">
              Passionate about innovation, startups, and creating technologies
              with real-world impact. I build with TypeScript, Go, Python, and
              C++ for full-stack development and machine learning. Beyond the
              code, I've competed in hackathons (2nd place at Bluehacks 2025)
              and cybersecurity challenges (1st place CTF), and I'm co-authoring
              research currently under review
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-primary/20 bg-card hover:bg-primary/5 transition-all hover:border-primary/40 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h4 className="mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
