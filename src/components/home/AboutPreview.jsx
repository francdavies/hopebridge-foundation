import Container from '../common/Container'
import Button from '../common/Button'
import SectionHeading from '../common/SectionHeading'

const AboutPreview = () => {
  return (
    <section className="overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem]">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=85"
                alt="Children participating in a community program"
                className="aspect-[4/3] h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-5 -right-5 -z-0 h-28 w-28 rounded-3xl bg-teal sm:-right-8">
              <div className="h-full w-full rounded-3xl border-8 border-white" />
            </div>

            {/* Experience/impact card */}
            <div className="absolute -bottom-6 left-4 rounded-2xl bg-white p-5 shadow-xl sm:left-8">
              <p className="font-heading text-2xl font-bold text-navy">
                Together
              </p>

              <p className="mt-1 text-sm text-slate-500">
                We can make a difference.
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <SectionHeading
              eyebrow="Who We Are"
              title="Creating hope where it matters most."
              description="HB Foundation is committed to improving the lives of less privileged individuals and communities by creating opportunities, providing support, and helping people build a better future."
            />

            <div className="mt-8 space-y-5">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal/10">
                  <span className="font-bold text-teal">01</span>
                </div>

                <div>
                  <h3 className="font-heading font-semibold text-navy">
                    Our Vision
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    To become one of the world's leading humanitarian
                    foundations, transforming lives through compassion,
                    empowerment, and meaningful support.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal/10">
                  <span className="font-bold text-teal">02</span>
                </div>

                <div>
                  <h3 className="font-heading font-semibold text-navy">
                    Our Mission
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    To support children, youths, and vulnerable individuals
                    through education, skills development, healthcare
                    assistance, counseling, and rehabilitation.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button href="/about">
                Learn More About Us
                <span aria-hidden="true">→</span>
              </Button>
            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}

export default AboutPreview