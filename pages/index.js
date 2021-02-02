import styled from "styled-components";

import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cat Wiki - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Header>
          <HeaderContent>
            <LogoWrapper>
              <Image src="/images/logo.svg" alt="Cat Wiki Logo" layout="fill" />
            </LogoWrapper>

            <h2>Get to know more about your cat breed</h2>

            <InputWrapper>
              <input type="text" name="search" placeholder="Enter your breed" />

              <div className="icon-wrapper">
                <Image src="/icons/SearchIcon.svg" width={18} height={18} />
              </div>
            </InputWrapper>
          </HeaderContent>

          <HeroImageWrapper />
        </Header>
      </Container>
    </div>
  );
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  width: min(100%, 1440px);
  padding: 2rem;

  @media ${(props) => props.theme.devices.tablet} {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 2rem 0;

    height: 70vh;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  flex: 1;

  h2 {
    color: ${(props) => props.theme.colors.grey[300]};
    font-weight: 400;
    font-size: 1rem;
    text-align: center;

    max-width: 290px;
    margin: 1rem 0;
  }

  @media ${(props) => props.theme.devices.tablet} {
    align-items: flex-start;

    h2 {
      text-align: start;
      margin: 0.5rem 0 2rem;
      font-size: 1.3rem;
      max-width: 100%;
    }
  }
`;

const LogoWrapper = styled.div`
  position: relative;
  width: 180px;
  height: 80px;

  @media ${(props) => props.theme.devices.tablet} {
    width: 300px;
    height: 100px;
  }
`;

const InputWrapper = styled.div`
  width: min(100%, 400px);
  padding: 0.5rem 1rem;
  margin: 1rem 0 0;

  background-color: ${(props) => props.theme.colors.grey[50]};
  border-radius: 1.5rem;

  display: flex;

  input {
    flex: 1 2 50px;
    min-width: 50px;
    background: none;
    font-size: 1rem;
    border: none;
    outline: none;
    padding-right: 0.5rem;
  }

  .icon-wrapper {
    flex: 0 0 auto;

    display: flex;
    align-items: center;
    align-self: center;
  }
`;

const HeroImageWrapper = styled.div`
  width: min(300px, 90vw);
  height: min(300px, 90vw);

  background-color: ${(props) => props.theme.colors.bg};
  background-size: cover;
  background-position: 90% 50%;
  background-image: url("./images/heroImage.png");

  border-radius: 50%;

  margin-bottom: 1rem;

  position: relative;

  &::before {
    content: "";
    width: min(310px, calc(85vw + 10px));
    height: min(310px, calc(85vw + 10px));
    background-color: #fafaf9;
    border-radius: 50%;

    position: absolute;
    top: -10px;
    left: -1px;
    z-index: -1;
  }

  @media ${(props) => props.theme.devices.tablet} {
    border-radius: 0;
    margin: 0;
    width: 100%;
    height: 100%;

    flex: 2;

    &::before {
      display: none;
    }
  }
`;
