import { ArrowUpRight } from 'lucide-react'
import { FadeIn } from './FadeIn'

export function Projects() {
  const projectCategories = [
    {
      title: 'ML & Research',
      projects: [
        {
          title: 'Pinoybot - Language Classifier',
          role: 'ML Engineer',
          description:
            'Built a Filipino-English code-switching classifier using MPNet embeddings and Random Forest. Achieved 94.16% accuracy and 0.94 weighted F1 score.',
          tags: ['Python', 'Scikit-learn', 'MPNet', 'NLP'],
          github: 'https://github.com/mbchavez27/pinoybot',
        },
        {
          title: 'Groupify',
          role: 'ML Engineer',
          description:
            'Built an interest-based matchmaking app that extracts user keywords, generates transformer embeddings, and clusters them with K-Means. Matched 800+ users in under 20 seconds.',
          tags: ['Python', 'Transformers', 'KMeans', 'NLP'],
          github: 'https://github.com/mbchavez27/matchmaking-cluster-api',
        },
      ],
    },
    {
      title: 'Software Engineering',
      projects: [
        {
          title: 'Leap 2025 Website',
          role: 'Lead Frontend Engineer',
          description:
            'Led frontend development of a registration platform for 29,000+ users with a scalable mobile-responsive interface.',
          tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
          github: 'https://github.com/dlsu-lscs/leap25-web',
        },
        {
          title: 'Annual Recruitment Week 2025 Website',
          role: 'Co-Lead Frontend Engineer',
          description:
            'Co-led frontend development enabling 22,000+ students to register across 40+ organizations. Delivered 99.8% uptime and sub-1.2s load times.',
          tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
          github: 'https://github.com/dlsu-lscs/arw-2025-web',
        },
        {
          title: 'La Salle Compute Society Website',
          role: 'Co-Lead Frontend Engineer',
          description:
            'Co-led frontend development of the organization website, delivering a modern, mobile-responsive platform.',
          tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
          github: 'https://dlsu-lscs.org/',
        },
        {
          title: 'Taft Eats',
          role: 'Full-Stack Engineer',
          description:
            'Built a full-stack restaurant review app for Taft-area establishments with scalable search and review features.',
          tags: ['React', 'Express.js', 'MySQL', 'TypeScript'],
          github: 'https://github.com/mbchavez27/taft-eats',
        },
        {
          title: 'Tomo Coffee Promo Web App',
          role: 'Frontend Engineer',
          description:
            'Built a secure, mobile-first promo redemption platform for 500+ members. Achieved sub-30s claims and 95%+ user satisfaction.',
          tags: ['React', 'Axios', 'Tailwind CSS', 'TypeScript'],
          github: 'https://github.com/dlsu-lscs/dlsu-lscs-tomo-web',
        },
        {
          title: 'LSCS Links',
          role: 'Frontend Engineer',
          description:
            'Built a custom link management platform for 100+ officers. Improved efficiency by 30% with near-instant link creation.',
          tags: ['React', 'Axios', 'Tailwind CSS', 'TypeScript'],
          github: 'https://links.app.dlsu-lscs.org/',
        },
      ],
    },
    {
      title: 'Game Development',
      projects: [
        {
          title: 'Jump Shot: Tournament',
          role: 'Game Engineer',
          description:
            'Built a 2D local multiplayer platformer shooter game in Unity with C# OOP, creating all assets in Photoshop.',
          tags: ['C#', 'Unity', 'Photoshop'],
          github: 'https://epyxx-27.itch.io/jump-shot-tournament',
        },
        {
          title: 'Steakhouse Nightmare',
          role: 'Game Engineer',
          description:
            'Built a 2D single-player cooking game in Unity using C# and object-oriented programming.',
          tags: ['C#', 'Unity', 'Photoshop'],
          github: 'https://epyxx-27.itch.io/steakhouse-nightmare',
        },
      ],
    },
    {
      title: 'Technical Product Management',
      projects: [
        {
          title: 'Pana - App Directory for Lasallians',
          role: 'Product Owner / Scrum Master',
          description:
            'Leading product direction and sprint planning for an app directory enabling Lasallians to discover and connect with student applications.',
          tags: ['Next.js', 'Express', 'TypeScript', 'Scrum', 'Agile'],
          github: 'https://github.com/dlsu-lscs/pana',
        },
      ],
    },
  ]

  return (
    <section
      className="min-h-screen flex flex-col justify-center py-24 px-6 snap-start"
      id="projects"
    >
      <div className="max-w-6xl mx-auto w-full">
        <FadeIn className="mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
            Technical Projects
          </h2>
          <div className="h-px w-12 bg-primary/40 mt-4" />
        </FadeIn>

        <div className="space-y-12">
          {projectCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-6">
                {category.title}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {category.projects.map((project, index) => (
                  <FadeIn key={index} delay={index * 0.05}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-8 rounded-xl border border-white/[0.06] bg-card hover:border-primary/20 transition-colors duration-300 block"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="text-lg font-semibold tracking-tight flex-1 pr-4">
                          {project.title}
                        </h4>
                        <ArrowUpRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0" />
                      </div>

                      <p className="text-primary font-medium text-sm mb-4">
                        {project.role}
                      </p>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 text-[11px] font-medium bg-primary/10 text-primary rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </a>
                  </FadeIn>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
