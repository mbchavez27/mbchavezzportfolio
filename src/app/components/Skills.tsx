import { FadeIn } from './FadeIn'

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
    <section className="min-h-screen flex flex-col justify-center py-24 px-6 snap-start" id="skills">
      <div className="max-w-6xl mx-auto w-full">
        <FadeIn className="mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
            Skills & Expertise
          </h2>
          <div className="h-px w-12 bg-primary/40 mt-4" />
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <FadeIn>
              <h3 className="text-sm font-medium text-primary uppercase tracking-wider mb-6">Machine Learning</h3>
            </FadeIn>
            <div className="space-y-1">
              {mlSkills.map((skill, index) => (
                <FadeIn key={index} delay={index * 0.04} distance={10}>
                  <div
                    className="px-4 py-3 rounded-lg text-muted-foreground hover:bg-primary/5 transition-colors duration-200"
                  >
                    {skill}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <div>
            <FadeIn>
              <h3 className="text-sm font-medium text-primary uppercase tracking-wider mb-6">
                Full Stack Engineering
              </h3>
            </FadeIn>
            <div className="space-y-1">
              {fullStackSkills.map((skill, index) => (
                <FadeIn key={index} delay={index * 0.04} distance={10}>
                  <div
                    className="px-4 py-3 rounded-lg text-muted-foreground hover:bg-primary/5 transition-colors duration-200"
                  >
                    {skill}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
