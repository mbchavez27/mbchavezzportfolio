import { Calendar } from 'lucide-react'

export function Experience() {
  const experiences = [
    {
      title: 'Research Assistant',
      company:
        'Center for ICT for Development (CITE4D), De La Salle University',
      location: 'Manila, Philippines',
      period: 'Feb 2026 - Present',
      responsibilities: [
        'Conducted data collection and analysis on 10,000+ multilingual entries, applying machine learning and transformer-based models to extract actionable insights.',
        'Co-authored research papers presenting findings on cross-cultural patterns in multilingual text, contributing to projects under peer review and conference submission.',
      ],
    },
    {
      title: 'Lead Frontend Engineer',
      company: 'La Salle Computer Society',
      location: 'Manila, Philippines',
      period: 'Aug 2024 - Present',
      responsibilities: [
        'Led a team of frontend engineers, co-authoring a Frontend Standards Manual and developing tools such as npx create-lscs-app, reducing project setup time for engineers by 50% and standardizing workflows across 3+ teams.',
        'Directed frontend development of web platforms for recruitment and event registration using Next.js and TypeScript, delivering responsive interfaces used by 29,000+ students, improving registration efficiency and reducing support tickets.',
      ],
    },
    {
      title: 'Technical Operator',
      company: 'Green Media Group',
      location: 'Manila, Philippines',
      period: 'Aug 2025 - Present',
      responsibilities: [
        'Gaining hands-on experience in technical operations, including sound design, lighting design, and live camera switching for university-wide events, learning how to mix audio for bands and manage visuals.',
        'Assisted in setting up and managing equipment to ensure clear sound, proper lighting, and smooth multi-camera event coverage.',
      ],
    },
    {
      title: 'Frontend Engineer',
      company: 'Berde Technologies',
      location: 'Pasay, Philippines',
      period: 'Mar 2024 - Aug 2024',
      responsibilities: [
        'Developed frontend of an e-commerce platform and CRM system using ReactJS, TypeScript, and Tailwind CSS, improving usability, performance, and scalability.',
        'Integrated REST APIs with Axios and translated Figma designs into responsive production-ready interfaces.',
      ],
    },
  ]

  return (
    <section className="py-24 px-6" id="experience">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
            Experience
          </h2>
          <div className="h-px w-12 bg-primary/40 mt-4" />
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group p-6 md:p-8 rounded-xl border border-white/[0.06] bg-card hover:border-primary/20 transition-colors duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-3">{exp.title}</h3>
                  <p className="text-muted-foreground mb-1">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">
                    {exp.location}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground md:text-right md:mt-1">
                  <Calendar className="h-4 w-4 flex-shrink-0" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li
                    key={idx}
                    className="flex gap-3 text-sm md:text-base text-muted-foreground leading-relaxed"
                  >
                    <span className="text-primary mt-1.5 flex-shrink-0">▹</span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
