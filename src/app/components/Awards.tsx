import { Trophy, Award } from "lucide-react";

export function Awards() {
  const awards = [
    {
      title: "Bluehacks 2025",
      position: "2nd Place Winner",
      date: "February 2025",
      description:
        "Contributed to Hackin Ka Nalang, the second-place winning team that developed Flare, an SOS mobile app supporting victims of natural disasters, focusing on typhoon response and emergency assistance.",
      icon: Trophy,
    },
    {
      title: "Microsoft Imagine Cup Junior 2022",
      position: "Competitor",
      date: "May 2022",
      description:
        "Participated in a global student innovation competition, pitching a mobile app utilizing computer vision to detect food spoilage and promote food safety.",
      icon: Award,
    },
    {
      title: "Cyphersupercluster: Capture the Flag",
      position: "Top 1",
      date: "October 2021",
      description:
        "Secured 1st place in a Capture the Flag (CTF) cybersecurity competition, demonstrating problem-solving, cryptography, and system exploitation skills.",
      icon: Trophy,
    },
  ];

  return (
    <section className="py-24 px-6 bg-card/50" id="awards">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 inline-block bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Awards & Achievements
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {awards.map((award, index) => {
            const Icon = award.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-lg border border-primary/20 bg-card hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg mb-1">{award.title}</h3>
                    <div className="inline-block px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20 mb-2">
                      {award.position}
                    </div>
                    <p className="text-xs text-muted-foreground">{award.date}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {award.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
