const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = 'left',
  theme = 'light',
  className = '',
}) => {
  const alignment = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  }

  const themes = {
    light: {
      eyebrow: 'text-teal',
      title: 'text-navy',
      description: 'text-slate-600',
    },
    dark: {
      eyebrow: 'text-teal',
      title: 'text-white',
      description: 'text-white/80',
    },
  }

  const currentTheme = themes[theme]

  return (
    <div className={`max-w-2xl ${alignment[align]} ${className}`}>
      {eyebrow && (
        <p
          className={`mb-3 text-sm font-semibold uppercase tracking-[0.18em] ${currentTheme.eyebrow}`}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className={`font-heading text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${currentTheme.title}`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 text-base leading-7 sm:text-lg ${currentTheme.description}`}
        >
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading