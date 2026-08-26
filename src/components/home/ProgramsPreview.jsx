import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import Button from '../common/Button'

const programs = [
  {
    number: '01',
    title: 'Education Support',
    description:
      'Helping out-of-school children access opportunities to learn, grow, and pursue their dreams.',
  },
  {
    number: '02',
    title: 'Skills & Empowerment',
    description:
      'Supporting individuals in acquiring practical skills that can help them become more independent.',
  },
  {
    number: '03',
    title: 'Medical Assistance',
    description:
      'Providing support to individuals who need help with essential medical and healthcare expenses.',
  },
  {
    number: '04',
    title: 'Counseling & Mentorship',
    description:
      'Providing guidance, counseling, mentorship, and follow-up support for children and young people.',
  },
  {
    number: '05',
    title: 'Drug Rehabilitation',
    description:
      'Supporting rehabilitation and reintegration efforts for individuals affected by drug addiction.',
  },
  {
    number: '06',
    title: 'Vocational Training & Jobs',
    description:
      'Creating pathways to vocational training, employment opportunities, and sustainable livelihoods.',
  },
]

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="h-5 w-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 12h14M13 6l6 6-6 6"
    />
  </svg>
)

const ProgramsPreview = () => {
  return (
    <section className="bg-off-white py-20 sm:py-24 lg:py-28">
      <Container>
        {/* Heading */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Our Focus Areas"
            title="Where compassion becomes action."
            description="Our work focuses on practical support that helps individuals overcome challenges and move toward a brighter future."
          />

          <Button
            href="/programs"
            variant="outline"
            className="w-fit shrink-0"
          >
            View All Programs
            <span aria-hidden="true">→</span>
          </Button>
        </div>

        {/* Programs Grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <article
              key={program.number}
              className="group relative overflow-hidden rounded-3xl border border-navy/5 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Number */}
              <div className="flex items-center justify-between">
                <span className="font-heading text-sm font-bold text-teal">
                  {program.number}
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-white transition-colors duration-300 group-hover:bg-teal group-hover:text-navy">
                  <ArrowIcon />
                </div>
              </div>

              {/* Content */}
              <div className="mt-10">
                <h3 className="font-heading text-xl font-bold text-navy">
                  {program.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {program.description}
                </p>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-teal transition-all duration-300 group-hover:w-full" />
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ProgramsPreview