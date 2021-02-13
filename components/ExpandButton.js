import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

function ExpandButton({ text, to = '/' }) {
  return (
    <Link href={to}>
      <Container className="btn-expand">
        <span>{text}</span>

        <svg
          width="35"
          height="17"
          viewBox="0 0 35 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            id="Tail"
            y="9.3"
            width="2"
            height="34"
            rx="1"
            transform="rotate(-90 0 9.3)"
            fill="#78716C"
          />
          <rect
            id="Rectangle 2"
            x="33.5737"
            y="7"
            width="2"
            height="11.8119"
            rx="1"
            transform="rotate(46.5402 33.5737 7)"
            fill="#78716C"
          />
          <rect
            id="Rectangle 1"
            x="25.3"
            y="1.40083"
            width="2"
            height="11.3"
            rx="1"
            transform="rotate(-44.4605 25.3 1.40083)"
            fill="#78716C"
          />
        </svg>
      </Container>
    </Link>
  );
}

export default ExpandButton;

const Container = styled.div`
  display: flex;
  align-items: center;

  span {
    color: ${(props) => props.theme.colors.grey[500]};
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 600;

    background: none;
    outline: none;
    border: none;

    align-self: center;
    margin-right: 0.5rem;

    transition: all 0.4s;
  }

  rect {
    transition: all 0.4s;
  }

  &:hover {
    cursor: pointer;

    span {
      color: ${(props) => props.theme.colors.accent.dark};
    }

    rect {
      fill: ${(props) => props.theme.colors.accent.dark};
    }
  }
`;
