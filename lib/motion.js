export const fadeUp = {
  initial: {
    opacity: 0,
    y: 30,
  },

  whileInView: {
    opacity: 1,
    y: 0,
  },

  viewport: {
    once: true,
  },

  transition: {
    duration: 0.7,
  },
};

export const fadeLeft = {
  initial: {
    opacity: 0,
    x: -30,
  },

  whileInView: {
    opacity: 1,
    x: 0,
  },

  viewport: {
    once: true,
  },

  transition: {
    duration: 0.7,
  },
};

export const fadeRight = {
  initial: {
    opacity: 0,
    x: 30,
  },

  whileInView: {
    opacity: 1,
    x: 0,
  },

  viewport: {
    once: true,
  },

  transition: {
    duration: 0.7,
  },
};

export const scaleIn = {
  initial: {
    opacity: 0,
    scale: .95,
  },

  whileInView: {
    opacity: 1,
    scale: 1,
  },

  viewport: {
    once: true,
  },

  transition: {
    duration: .6,
  },
};