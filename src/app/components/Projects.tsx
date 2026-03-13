import { Github } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Pinoybot - Code-Switching Classifier",
      description:
        "Filipino-English code-switching classifier using MPNet embeddings and Random Forest. Achieved 94.16% accuracy and 0.94 weighted F1 score.",
      tags: ["Python", "Scikit-learn", "MPNet", "NLP"],
      github: "https://github.com/mbchavez27/pinoybot",
    },
    {
      title: "Leap 2025 Website",
      description:
        "Led frontend development of a registration platform for 29,000+ users with a scalable mobile-responsive interface.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/dlsu-lscs/leap25-web",
    },
    {
      title: "Annual Recruitment Week 2025 Website",
      description:
        "Co-led frontend development enabling 22,000+ students to register across 40+ organizations, delivering a mobile-responsive, scalable platform with 99.8\% uptime and sub-1.2s load times.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/dlsu-lscs/arw-2025-web",
    },
    {
      title: "LSCS Member House Clustering",
      description:
        "Built an intelligent clustering system using MPNet embeddings to group students based on interests.",
      tags: ["Python", "MPNet", "Clustering", "NLP"],
      github: "https://github.com/mbchavez27/matchmaking-cluster-api",
    },
    {
      title: "Taft Eats",
      description:
        "Full-stack restaurant review app for Taft-area establishments with scalable search and review features.",
      tags: ["React", "Express.js", "MySQL", "TypeScript"],
      github: "https://github.com/mbchavez27/taft-eats",
    },
    {
      title: "La Salle Compute Society Website",
      description:
        "Co-led frontend development of the LSCS website, delivering a modern, mobile-responsive platform to showcase initiatives, events, and projects with a scalable, intuitive UI.",
      tags: ["NextJS", "TailwindCSS", "TypeScript"],
      github: "https://github.com/dlsu-lscs/dlsu-lscs-website",
    },
  ];

  return (
    <section className="py-24 px-6" id="projects">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 inline-block bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg border border-primary/20 bg-card hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors"
                >
                  <Github className="h-6 w-6 text-primary" />
                </a>

                <div className="flex-1">
                  <h3 className="text-lg mb-2">{project.title}</h3>

                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
