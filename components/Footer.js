import React from 'react';
import styled from 'styled-components';

import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return (
    <Container>
      <Link href="/" scroll={false}>
        <LogoWrapper>
          <Image src="/images/logo.svg" alt="Cat Wiki Logo" layout="fill" />
        </LogoWrapper>
      </Link>

      <LinksWrapper>
        <Link href="/about" scroll={false}>
          About
        </Link>
        <Link href="/cats" scroll={false}>
          Full Cats List
        </Link>
        <Link href="/random" scroll={false}>
          Random Cat
        </Link>
      </LinksWrapper>

      <Credits>
        <div>
          <span>made by</span>

          <a href="https://github.com/pklepa">pklepa</a>
        </div>
        <div>
          <span>inspired by</span>

          <a href="https://devchallenges.io">devchallenges</a>
        </div>
      </Credits>
    </Container>
  );
}

export default Footer;

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 2rem 4rem;
  width: 100%;
  max-width: 1440px;

  > *:not(:last-child) {
    margin-bottom: 2rem;
  }

  @media ${(props) => props.theme.devices.tablet} {
    flex-direction: row;
    justify-content: space-between;
    padding: 2rem;

    > *:not(:last-child) {
      margin-bottom: 0;
    }
  }
`;

const LogoWrapper = styled.div`
  position: relative;
  width: 180px;
  height: 80px;
  transition: 0.4s;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > * {
    color: ${(props) => props.theme.colors.grey[50]};
    transition: 0.4s;

    &:not(:last-child) {
      margin-bottom: 1rem;
    }

    &:hover {
      color: ${(props) => props.theme.colors.accent.dark};
    }
  }

  @media ${(props) => props.theme.devices.tablet} {
    flex-direction: row;

    > *:not(:last-child) {
      margin: 0 1.5rem 0 0;
    }
  }
`;

const Credits = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      font-size: 12px;
    }

    a {
      color: ${(props) => props.theme.colors.grey[50]};
      font-weight: 700;
      transition: 0.4s;

      &:hover {
        color: ${(props) => props.theme.colors.accent.dark};
      }
    }

    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }

  @media ${(props) => props.theme.devices.tablet} {
    align-items: flex-end;

    div {
      align-items: flex-end;
    }
  }
`;
