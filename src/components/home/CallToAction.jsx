import Container from '../common/Container'
import Button from '../common/Button'

const CallToAction = () => {
  return (
    <section className="relative overflow-hidden bg-purple py-20 sm:py-24 lg:py-28">
      {/* Decorative shapes */}
      <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-teal/10 blur-3xl" />
      <div className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-navy/50 blur-3xl" />

      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-navy px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          {/* Decorative teal circle */}
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-teal/10" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
            {/* Content */}
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
                Be Part of the Change
              </p>

              <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Together, we can create brighter futures.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-white/65 sm:text-lg">
                Whether you need support or want to support our mission,
                there is a place for you in the work we are doing.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button
                href="/apply"
                className="whitespace-nowrap"
              >
                Apply for Assistance
                <span aria-hidden="true">→</span>
              </Button>

              <Button
                href="/support"
                variant="outline"
                className="whitespace-nowrap border-white/30 text-white hover:border-white hover:bg-white hover:text-navy"
              >
                Support Our Mission
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default CallToAction