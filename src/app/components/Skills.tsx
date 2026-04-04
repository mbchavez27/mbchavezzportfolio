export function Skills() {
  const mlSkills = [
    'PyTorch',
    'TensorFlow',
    'Scikit-learn',
    'Transformers/Hugging Face',
    'Pandas & NumPy',
    'NLP & Affective Computing',
    'Deep Learning',
    'Feature Engineering',
  ]

  const fullStackSkills = [
    'TypeScript',
    'Python',
    'Go',
    'C++',
    'Next.js',
    'React',
    'Tailwind CSS',
    'Git & Docker',
  ]

  return (
    <section className="py-24 px-6" id="skills">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
            Skills & Expertise
          </h2>
          <div className="h-px w-12 bg-primary/40 mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-sm font-medium text-primary uppercase tracking-wider mb-6">Machine Learning</h3>
            <div className="space-y-1">
              {mlSkills.map((skill, index) => (
                <div
                  key={index}
                  className="px-4 py-3 rounded-lg text-muted-foreground hover:bg-primary/5 transition-colors duration-200"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-primary uppercase tracking-wider mb-6">
              Full Stack Engineering
            </h3>
            <div className="space-y-1">
              {fullStackSkills.map((skill, index) => (
                <div
                  key={index}
                  className="px-4 py-3 rounded-lg text-muted-foreground hover:bg-primary/5 transition-colors duration-200"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
