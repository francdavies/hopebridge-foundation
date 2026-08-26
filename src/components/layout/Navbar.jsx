import { useState } from 'react'
import Container from '../common/Container'
import Button from '../common/Button'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Programs', href: '/programs' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Stories', href: '/stories' },
  { name: 'Contact', href: '/contact' },
]

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="h-6 w-6"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="h-6 w-6"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-navy/5 bg-white/95 backdrop-blur-md">
      <Container>
        <nav className="flex h-20 items-center justify-between">

          {/* Logo */}
          <a
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-3"
            aria-label="HopeBridge Foundation home"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-sm font-bold text-teal">
              HB
            </div>

            <div className="hidden sm:block">
              <p className="font-heading text-xl font-bold leading-none text-navy">
                HopeBridge
              </p>

              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-teal">
                Foundation
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-teal"
              >
                {link.name}
              </a>
            ))}

            <Button href="/apply" className="px-5 py-2.5">
              Apply for Assistance
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-navy transition-colors hover:bg-navy/5 lg:hidden"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-navy/5 py-5 lg:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-teal/10 hover:text-navy"
                >
                  {link.name}
                </a>
              ))}

              <div className="mt-3 px-4">
                <Button
                  href="/apply"
                  onClick={closeMenu}
                  className="w-full"
                >
                  Apply for Assistance
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}

export default Navbar