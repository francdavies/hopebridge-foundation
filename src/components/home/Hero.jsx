import Container from '../common/Container'
import Button from '../common/Button'

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-navy">
      {/* Decorative background shapes */}
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-teal/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-purple/40 blur-3xl" />

      <Container>
        <div className="relative grid min-h-[calc(100vh-5rem)] items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">

          {/* Hero Content */}
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-teal" />
              <span className="text-sm font-semibold text-teal">
                Hope. Compassion. Impact.
              </span>
            </div>

            <h1 className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Transforming Lives.
              <span className="block text-teal">
                Building Brighter Futures.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
              HB Foundation is committed to supporting the less privileged
              through education, skills development, healthcare assistance,
              counseling, and rehabilitation.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/apply">
                Apply for Assistance
                <span aria-hidden="true">→</span>
              </Button>

              <Button
                href="/about"
                variant="outline"
                className="border-white/30 text-white hover:border-white hover:bg-white hover:text-navy"
              >
                Discover Our Mission
              </Button>
            </div>

            {/* Small trust statement */}
            <div className="mt-10 flex items-center gap-4 border-t border-white/10 pt-6">
              <div className="flex -space-x-2">
                <div className="h-9 w-9 rounded-full border-2 border-navy bg-teal" />
                <div className="h-9 w-9 rounded-full border-2 border-navy bg-white/70" />
                <div className="h-9 w-9 rounded-full border-2 border-navy bg-purple" />
              </div>

              <p className="text-sm text-white/60">
                Creating opportunities and making a difference in communities.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative mx-auto max-w-xl">

              {/* Main image container */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-white/10 shadow-2xl ring-1 ring-white/10">
                <img
                  src="/images/diane-aguilar-unsplash.jpg"
                  alt="Young people in a community setting"
                  className="h-full w-full object-cover"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />

                {/* Image caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-sm font-medium text-teal">
                    Building brighter futures
                  </p>

                  <p className="mt-1 text-lg font-semibold text-white">
                    Every life deserves an opportunity to thrive.
                  </p>
                </div>
              </div>

              {/* Floating impact card */}
              <div className="absolute -bottom-6 -left-4 rounded-2xl bg-white p-5 shadow-xl sm:-left-8">
                <p className="text-3xl font-bold text-navy">
                  5+
                </p>

                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                  Areas of impact
                </p>
              </div>

              {/* Floating accent */}
              <div className="absolute -right-4 -top-4 h-20 w-20 rounded-2xl bg-teal p-4 shadow-lg sm:-right-6 sm:-top-6">
                <div className="flex h-full items-center justify-center rounded-xl border border-navy/10 bg-white/10">
                <span className="font-heading text-lg font-bold text-navy">
                  HB
                </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}

export default Hero