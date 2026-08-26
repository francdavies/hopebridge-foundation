const Button = ({
  children,
  href,
  variant = 'primary',
  className = '',
  ...props
}) => {
  const variants = {
    primary:
      'bg-teal text-navy hover:bg-teal-dark',

    secondary:
      'bg-navy text-white hover:bg-navy-dark',

    outline:
      'border-2 border-navy text-navy hover:bg-navy hover:text-white',

    light:
      'bg-white text-navy hover:bg-off-white',

    ghost:
      'text-navy hover:bg-navy/5',
  }

  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2'

  const styles = `${baseStyles} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={styles} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  )
}

export default Button