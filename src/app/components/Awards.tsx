export function Awards() {
  const awards = [
    {
      title: "Bluehacks 2025",
      position: "2nd Place Winner",
      date: "February 2025",
      description:
        "Contributed to Hackin Ka Nalang, the second-place winning team that developed Flare, an SOS mobile app supporting victims of natural disasters, focusing on typhoon response and emergency assistance.",
    },
    {
      title: "Microsoft Imagine Cup Junior 2022",
      position: "Competitor",
      date: "May 2022",
      description:
        "Participated in a global student innovation competition, pitching a mobile app utilizing computer vision to detect food spoilage and promote food safety.",
    },
    {
      title: "Cyphersupercluster: Capture the Flag",
      position: "Top 1",
      date: "October 2021",
      description:
        "Secured 1st place in a Capture the Flag (CTF) cybersecurity competition, demonstrating problem-solving, cryptography, and system exploitation skills.",
    },
  ];

  return (
    <section className="py-24 px-6" id="awards">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
            Awards & Achievements
          </h2>
          <div className="h-px w-12 bg-primary/40 mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {awards.map((award, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl border border-white/[0.06] bg-card hover:border-primary/20 transition-colors duration-300"
            >
              <h3 className="text-lg font-semibold tracking-tight mb-2">{award.title}</h3>
              <div className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
                {award.position}
              </div>
              <p className="text-xs text-muted-foreground mb-4">{award.date}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {award.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
