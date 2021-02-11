import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(3px);

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;

  @media ${(props) => props.theme.devices.tablet} {
    padding: 2rem;
  }
`;

export default function Modal({ targetId, onClickOutside, children }) {
  console.log(targetId);
  function handleClick(e) {
    if (e.target === e.currentTarget) {
      onClickOutside();
    }
  }

  return createPortal(
    <Overlay onClick={handleClick}>{children}</Overlay>,
    document.getElementById(targetId)
  );
}