import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function SlideLeftWhenVisible({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.05 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 1 }}
      variants={{
        visible: { x: 0, opacity: 1 },
        hidden: { x: '-90vw', opacity: 0 },
      }}
      style={{ width: '100%', height: '100%' }}
    >
      {children}
    </motion.div>
  );
}

export default SlideLeftWhenVisible;
