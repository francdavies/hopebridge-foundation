import Container from '../common/Container'
import Button from '../common/Button'
import SectionHeading from '../common/SectionHeading'

const stories = [
  {
    category: 'Education',
    title: 'Every child deserves the opportunity to learn.',
    description:
      'A placeholder for a real beneficiary story about how educational support helped a child continue their learning journey.',
    image:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=85',
  },
  {
    category: 'Skills & Empowerment',
    title: 'Turning skills into opportunities.',
    description:
      'A placeholder for a real story highlighting how vocational or skills training helped someone move toward independence.',
    image:
      'https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=900&q=85',
  },
  {
    category: 'Community',
    title: 'Together, we can make a difference.',
    description:
      'A placeholder for a real community impact story that demonstrates the foundation’s work and the people it serves.',
    image:
      'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=900&q=85',
  },
]

const StoriesPreview = () => {
  return (
    <section className="bg-off-white py-20 sm:py-24 lg:py-28">
      <Container>
        {/* Heading */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Stories of Hope"
            title="Real people. Real journeys. Real change."
            description="Behind every initiative is a person, a family, or a community with a story worth telling."
          />

          <Button
            href="/stories"
            variant="outline"
            className="w-fit shrink-0"
          >
            View All Stories
            <span aria-hidden="true">→</span>
          </Button>
        </div>

        {/* Stories */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {stories.map((story) => (
            <article
              key={story.title}
              className="group overflow-hidden rounded-3xl border border-navy/5 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={story.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />

                {/* Category */}
                <span className="absolute bottom-4 left-4 rounded-full bg-teal px-3 py-1.5 text-xs font-semibold text-navy">
                  {story.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7">
                <h3 className="font-heading text-xl font-bold leading-snug text-navy">
                  {story.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {story.description}
                </p>

                <a
                  href="/stories"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-teal"
                >
                  Read story
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default StoriesPreview