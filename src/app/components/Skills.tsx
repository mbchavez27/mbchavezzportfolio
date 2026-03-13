export function Skills() {
  const mlSkills = [
    "PyTorch",
    "TensorFlow",
    "Scikit-learn",
    "Transformers/Hugging Face",
    "Pandas & NumPy",
    "NLP & Affective Computing",
    "Deep Learning",
    "Feature Engineering",
  ];

  const fullStackSkills = [
    "TypeScript",
    "Python",
    "Go",
    "C++",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Git & Docker",
  ];

  return (
    <section className="py-24 px-6 bg-secondary/50" id="skills">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 inline-block bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Machine Learning Table */}
          <div>
            <h3 className="text-2xl mb-6 text-primary">Machine Learning</h3>
            <div className="rounded-lg border border-primary/20 overflow-hidden">
              <div className="bg-card">
                {mlSkills.map((skill, index) => (
                  <div
                    key={index}
                    className={`px-6 py-4 hover:bg-primary/5 transition-colors ${
                      index !== mlSkills.length - 1
                        ? "border-b border-primary/10"
                        : ""
                    }`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Full Stack Engineering Table */}
          <div>
            <h3 className="text-2xl mb-6 text-primary">
              Full Stack Engineering
            </h3>
            <div className="rounded-lg border border-primary/20 overflow-hidden">
              <div className="bg-card">
                {fullStackSkills.map((skill, index) => (
                  <div
                    key={index}
                    className={`px-6 py-4 hover:bg-primary/5 transition-colors ${
                      index !== fullStackSkills.length - 1
                        ? "border-b border-primary/10"
                        : ""
                    }`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
          <div className="p-4 md:p-6 rounded-lg border border-primary/20 bg-card">
            <div className="text-2xl md:text-3xl mb-2 text-primary">16K+</div>
            <div className="text-xs md:text-sm text-muted-foreground">Reviews Analyzed</div>
          </div>
          <div className="p-4 md:p-6 rounded-lg border border-primary/20 bg-card">
            <div className="text-2xl md:text-3xl mb-2 text-primary">94%</div>
            <div className="text-xs md:text-sm text-muted-foreground">Model Accuracy</div>
          </div>
          <div className="p-4 md:p-6 rounded-lg border border-primary/20 bg-card">
            <div className="text-2xl md:text-3xl mb-2 text-primary">29K+</div>
            <div className="text-xs md:text-sm text-muted-foreground">Users Served</div>
          </div>
          <div className="p-4 md:p-6 rounded-lg border border-primary/20 bg-card">
            <div className="text-2xl md:text-3xl mb-2 text-primary">50%</div>
            <div className="text-xs md:text-sm text-muted-foreground">Time Saved</div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
