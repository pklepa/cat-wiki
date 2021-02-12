export const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
};

export const reveal = {
  exit: { y: '-20vh', opacity: 0, transition },
  enter: {
    y: '0%',
    opacity: 1,
    transition,
  },
};

export const pop = {
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { delay: 0.5, ease: [0.43, 0.13, 0.23, 0.96] },
  },
  enter: {
    scale: 1,
    opacity: 1,
    transition: { delay: 0.5, ease: [0.43, 0.13, 0.23, 0.96] },
  },
};

export const revealStill = {
  exit: { opacity: 0, transition: { duration: 0.5 } },
  enter: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};
