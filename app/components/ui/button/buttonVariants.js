export const buttonVariants = {
  primary: `
    bg-primary
    text-black
    hover:bg-primary-hover
    border-primary
  `,

  secondary: `
    bg-panel
    text-text
    border-border
    hover:bg-card
  `,

  ghost: `
    bg-transparent
    text-text
    border-transparent
    hover:bg-white/5
  `,

  outline: `
    bg-transparent
    text-text
    border-border
    hover:border-primary/30
    hover:bg-panel
  `,

  danger: `
    bg-danger
    text-white
    border-danger
    hover:opacity-90
  `,
};

export const buttonSizes = {
  sm: `
    h-9
    px-3
    text-sm
  `,

  md: `
    h-11
    px-5
    text-sm
  `,

  lg: `
    h-12
    px-6
    text-base
  `,

  icon: `
    h-11
    w-11
    p-0
  `,
};
