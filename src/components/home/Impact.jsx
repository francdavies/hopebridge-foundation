import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'

const impactStats = [
  {
    value: '100+',
    label: 'Lives Supported',
    description: 'Individuals and families reached through our programs.',
  },
  {
    value: '50+',
    label: 'Children Supported',
    description: 'Children given opportunities to learn and grow.',
  },
  {
    value: '25+',
    label: 'Skills Opportunities',
    description: 'Individuals supported through skills and empowerment.',
  },
  {
    value: '10+',
    label: 'Community Initiatives',
    description: 'Activities focused on creating positive community impact.',
  },
]

const Impact = () => {
  return (
    <section className="relative overflow-hidden bg-navy py-20 sm:py-24 lg:py-28">
      {/* Decorative shapes */}
      <div className="absolute -left-40 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-teal/10 blur-3xl" />
      <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-purple/50 blur-3xl" />

      <Container>
        <div className="relative">
          {/* Heading */}
          <div className="max-w-3xl">
            <SectionHeading
              eyebrow="Our Impact"
              title="Small acts can create lasting change."
              description="Every child supported, every opportunity created, and every life touched represents a step toward a stronger and more hopeful community."
              theme="dark"
            />
          </div>

          {/* Stats */}
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {impactStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-navy p-7 transition-colors duration-300 hover:bg-white/5 sm:p-8"
              >
                <p className="font-heading text-4xl font-bold tracking-tight text-teal sm:text-5xl">
                  {stat.value}
                </p>

                <h3 className="mt-4 font-heading text-lg font-semibold text-white">
                  {stat.label}
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/55">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom message */}
          <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-sm leading-7 text-white/60 sm:text-base">
              Our greatest measure of success is not just in numbers, but in
              the lives changed and opportunities created.
            </p>

            <div className="shrink-0">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-teal">
                Making a difference together
                <span aria-hidden="true">→</span>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Impact