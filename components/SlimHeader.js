import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

function SlimHeader() {
  return (
    <Container>
      <Link href="/">
        <LogoWrapper>
          <Image src="/images/logo.svg" alt="Cat Wiki Logo" layout="fill" />
        </LogoWrapper>
      </Link>

      <nav>
        <Link href="/about" scroll={false}>
          About
        </Link>
        <Link href="/cats" scroll={false}>
          Full Cat List
        </Link>
        <Link href="/random" scroll={false}>
          Random Cat
        </Link>
      </nav>
    </Container>
  );
}

export default SlimHeader;

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  width: 100%;
  max-width: 1440px;

  nav {
    display: none;
  }

  @media ${(props) => props.theme.devices.tablet} {
    justify-content: space-between;

    nav {
      display: grid;
      align-items: center;
      justify-content: space-between;
      grid-gap: 1rem;
      grid-template-columns: repeat(3, auto);

      flex: 0 1 400px;

      > * {
        color: ${(props) => props.theme.colors.grey[50]};
        transition: 0.4s;

        &:hover {
          color: ${(props) => props.theme.colors.accent.dark};
        }
      }
    }
  }
`;

const LogoWrapper = styled.div`
  position: relative;
  width: 180px;
  height: 80px;
  transition: 0.4s;

  padding: 0 2rem 1rem;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }

  @media ${(props) => props.theme.devices.tablet} {
    margin-right: 3rem;
  }
`;
