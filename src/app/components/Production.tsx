import { FadeIn } from './FadeIn'

export function Production() {
  const operations = [
    {
      title: 'INSCAPE: 45 Years in Motion',
      role: 'Live Sound Engineer',
      date: 'November 2025',
    },
    {
      title: 'Animo Christmas CAO Concert 2025',
      role: 'Live Broadcast Camera Operator',
      date: 'November 2025',
    },
    {
      title: 'CCS Frosh Convocation',
      role: 'Technical Operator',
      date: 'October 2025',
    },
    {
      title: 'Comedy Manila',
      role: 'Technical Director',
      date: 'June 2025',
    },
    {
      title: 'Animusika 2025',
      role: 'Logistics Lead',
      date: 'June 2025',
    },
    {
      title: 'Animo Christmas USG Concert 2024',
      role: 'Logistics Lead',
      date: 'November 2024',
    },
  ]

  return (
    <section
      className="min-h-screen flex flex-col justify-center py-24 px-6 snap-start"
      id="production"
    >
      <div className="max-w-6xl mx-auto w-full">
        <FadeIn className="mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
            Production Operations
          </h2>
          <div className="h-px w-12 bg-primary/40 mt-4" />
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-4">
          {operations.map((op, index) => (
            <FadeIn key={index} delay={index * 0.05} className="h-full">
              <div className="p-8 rounded-xl border border-white/[0.06] bg-card hover:border-primary/20 transition-colors duration-300 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight mb-2">
                    {op.title}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-4">
                    {op.role}
                  </p>
                </div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                  {op.date}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
