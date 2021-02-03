import React from 'react';
import styled from 'styled-components';

import Image from 'next/image';

function Footer() {
  return (
    <Container>
      <LogoWrapper>
        <Image src="/images/logo.svg" alt="Cat Wiki Logo" layout="fill" />
      </LogoWrapper>

      <LinksWrapper>
        <a href="#">About</a>
        <a href="#">Breed List</a>
        <a href="#">Random</a>
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

  > *:not(:last-child) {
    margin-bottom: 2rem;
  }

  @media ${(props) => props.theme.devices.tablet} {
    flex-direction: row;
    justify-content: space-between;

    > *:not(:last-child) {
      margin-bottom: 0;
    }
  }
`;

const LogoWrapper = styled.div`
  position: relative;
  width: 180px;
  height: 80px;
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > * {
    color: ${(props) => props.theme.colors.grey[50]};

    &:not(:last-child) {
      margin-bottom: 1rem;
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
