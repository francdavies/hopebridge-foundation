import Container from '../common/Container'
import Button from '../common/Button'
import SectionHeading from '../common/SectionHeading'

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1494386346843-e12284507169?auto=format&fit=crop&w=1200&q=85',
    alt: 'Children learning together',
    className: 'lg:col-span-2 lg:row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=85',
    alt: 'Young people together',
    className: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=900&q=85',
    alt: 'Community gathering',
    className: '',
  },
  {
    src: '/images/unsplash-photo.jpg',
    alt: 'Children participating in activities',
    className: '',
  },
  {
    src: '/images/children.jpg',
    alt: 'Community support activity',
    className: '',
  },
]

const GalleryPreview = () => {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        {/* Heading */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Our Gallery"
            title="Moments that tell our story."
            description="A glimpse into the people, activities, and moments that make our work meaningful."
          />

          <Button
            href="/gallery"
            variant="outline"
            className="w-fit shrink-0"
          >
            View Full Gallery
            <span aria-hidden="true">→</span>
          </Button>
        </div>

        {/* Gallery Grid */}
        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] sm:gap-5 lg:grid-cols-4 lg:auto-rows-[200px]">
          {galleryImages.map((image, index) => (
            <div
              key={image.src}
              className={`group relative overflow-hidden rounded-3xl ${image.className}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading={index === 0 ? 'eager' : 'lazy'}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Hover icon */}
              <div className="absolute bottom-5 right-5 flex h-10 w-10 translate-y-3 items-center justify-center rounded-full bg-teal text-navy opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default GalleryPreview