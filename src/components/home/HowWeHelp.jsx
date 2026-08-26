import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'

const steps = [
  {
    number: '01',
    title: 'Identify',
    description:
      'We listen, understand individual needs, and identify opportunities where meaningful support can make a difference.',
  },
  {
    number: '02',
    title: 'Support',
    description:
      'We provide practical assistance through education, skills development, healthcare support, counseling, and other initiatives.',
  },
  {
    number: '03',
    title: 'Empower',
    description:
      'Our goal goes beyond immediate assistance. We help people gain the confidence, skills, and opportunities to build better futures.',
  },
]

const HowWeHelp = () => {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Heading */}
          <div>
            <SectionHeading
              eyebrow="How We Help"
              title="From support to lasting impact."
              description="We believe meaningful change begins by understanding people's needs and creating the right opportunities for them to move forward."
            />
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-5 top-6 hidden h-[calc(100%-3rem)] w-px bg-navy/10 sm:block" />

            <div className="space-y-10">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="relative flex gap-6"
                >
                  {/* Number */}
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal font-heading text-sm font-bold text-navy ring-8 ring-white">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="pt-1">
                    <h3 className="font-heading text-xl font-bold text-navy sm:text-2xl">
                      {step.title}
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HowWeHelp