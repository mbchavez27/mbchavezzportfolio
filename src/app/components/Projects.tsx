import { ArrowUpRight } from 'lucide-react'
import { FadeIn } from './FadeIn'

export function Projects() {
  const projects = [
    {
      title: 'Pinoybot - Language Classifier',
      description:
        'Filipino-English code-switching classifier using MPNet embeddings and Random Forest. Achieved 94.16% accuracy and 0.94 weighted F1 score.',
      tags: ['Python', 'Scikit-learn', 'MPNet', 'NLP'],
      github: 'https://github.com/mbchavez27/pinoybot',
    },
    {
      title: 'Leap 2025 Website',
      description:
        'Led frontend development of a registration platform for 29,000+ users with a scalable mobile-responsive interface.',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/dlsu-lscs/leap25-web',
    },
    {
      title: 'Annual Recruitment Week 2025 Website',
      description:
        'Co-led frontend development enabling 22,000+ students to register across 40+ organizations, delivering a mobile-responsive, scalable platform with 99.8\% uptime and sub-1.2s load times.',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/dlsu-lscs/arw-2025-web',
    },
    {
      title: 'Groupify',
      description:
        'Developed Groupify, an interest-based matchmaking app that extracts and cleans user keywords, generates transformer embeddings, clusters them with K-Means, and uses a greedy algorithm to match 800+ users in under 20 seconds.',
      tags: ['Python', 'Transformer Based Models', 'KMeans Clustering', 'NLP'],
      github: 'https://github.com/mbchavez27/matchmaking-cluster-api',
    },
    {
      title: 'Taft Eats',
      description:
        'Full-stack restaurant review app for Taft-area establishments with scalable search and review features.',
      tags: ['React', 'Express.js', 'MySQL', 'TypeScript'],
      github: 'https://github.com/mbchavez27/taft-eats',
    },
    {
      title: 'Tomo Coffee Promo Web App',
      description:
        'Built a secure, mobile-first promo redemption platform for 500+ LSCS members, enabling sub-30s claims, achieving 95%+ user satisfaction, and driving a 20% boost in engagement and redemptions.',
      tags: ['React', 'Axios', 'TailwindCSS', 'TypeScript'],
      github: 'https://github.com/dlsu-lscs/dlsu-lscs-tomo-web',
    },
    {
      title: 'LSCS Links',
      description:
        'Built a custom link management platform for 100+ LSCS officers, improving link management efficiency by 30%, enabling near-instant link creation, and supporting consistent branding across 10+ events.',
      tags: ['React', 'Axios', 'TailwindCSS', 'TypeScript'],
      github: 'https://github.com/dlsu-lscs/lscs-links-web',
    },
    {
      title: 'La Salle Compute Society Website',
      description:
        'Co-led frontend development of the LSCS website, delivering a modern, mobile-responsive platform to showcase initiatives, events, and projects with a scalable, intuitive UI.',
      tags: ['NextJS', 'TailwindCSS', 'TypeScript'],
      github: 'https://github.com/dlsu-lscs/dlsu-lscs-website',
    },
    {
      title: 'Jump Shot: Tournament',
      description:
        'Built a 2D local multiplayer platformer shooter game, developing it in Unity with C# OOP and creating all game assets in Photoshop.',
      tags: ['C#', 'Unity', 'Photoshop'],
      github: 'https://epyxx-27.itch.io/jump-shot-tournament',
    },
    {
      title: 'Steakhouse Nightmare',
      description:
        'Built a 2D single-player cooking game, developing the full experience in Unity using C# and object-oriented programming.',
      tags: ['C#', 'Unity', 'Photoshop'],
      github: 'https://epyxx-27.itch.io/steakhouse-nightmare',
    },
  ]

  return (
    <section className="min-h-screen flex flex-col justify-center py-24 px-6 snap-start" id="projects">
      <div className="max-w-6xl mx-auto w-full">
        <FadeIn className="mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
            Featured Projects
          </h2>
          <div className="h-px w-12 bg-primary/40 mt-4" />
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <FadeIn key={index} delay={index * 0.05}>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-8 rounded-xl border border-white/[0.06] bg-card hover:border-primary/20 transition-colors duration-300 block"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold tracking-tight flex-1 pr-4">{project.title}</h3>
                  <ArrowUpRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0" />
                </div>

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
    </section>
  )
}
