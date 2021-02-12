export const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
};

export const reveal = {
  exit: { y: '-10%', opacity: 0, transition },
  enter: {
    y: '0%',
    opacity: 1,
    transition,
  },
};
