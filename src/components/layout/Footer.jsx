import Container from '../common/Container'

const Footer = () => {
  return (
    <footer className="bg-purple text-white">
      <Container>
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">

          {/* Foundation */}
          <div className="lg:col-span-2">
            <a href="/" className="inline-block">
              <p className="font-heading text-2xl font-bold">
                HopeBridge <span className="text-teal">Foundation</span>
              </p>
            </a>

            <p className="mt-4 max-w-md text-sm leading-7 text-white/70">
              Transforming lives, creating opportunities, and building
              stronger communities through compassion and meaningful
              humanitarian support.
            </p>

            <p className="mt-5 text-sm font-medium text-teal">
              Hope. Compassion. Impact.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              {[
                ['About Us', '/about'],
                ['Our Programs', '/programs'],
                ['Gallery', '/gallery'],
                ['Success Stories', '/stories'],
              ].map(([name, href]) => (
                <li key={name}>
                  <a
                    href={href}
                    className="text-sm text-white/65 transition-colors hover:text-teal"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Get Involved
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="/apply"
                  className="text-sm text-white/65 transition-colors hover:text-teal"
                >
                  Apply for Assistance
                </a>
              </li>

              <li>
                <a
                  href="/support"
                  className="text-sm text-white/65 transition-colors hover:text-teal"
                >
                  Support Our Mission
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="text-sm text-white/65 transition-colors hover:text-teal"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} HB Foundation. All rights reserved.
          </p>

          <p>
            Website by{' '}
            <span className="font-medium text-teal">Francis David</span>
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer