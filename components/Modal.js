import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { revealStill } from '../utils/animationVariants/variants';

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(3px);

  display: flex;
  justify-content: center;
  padding: 1rem 0;

  @media ${(props) => props.theme.devices.tablet} {
    padding: 2rem;
  }
`;

export default function Modal({ targetId, onClickOutside, children }) {
  function handleClick(e) {
    if (e.target === e.currentTarget) {
      onClickOutside();
    }
  }

  return createPortal(
    <AnimatePresence exitBeforeEnter>
      <Overlay
        initial="exit"
        animate="enter"
        exit="exit"
        variants={revealStill}
        onClick={handleClick}
      >
        {children}
      </Overlay>
    </AnimatePresence>,
    document.getElementById(targetId)
  );
}
