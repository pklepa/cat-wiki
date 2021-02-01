import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cat Wiki - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <HeroImageWrapper />

        <Image
          src="/images/logo.svg"
          alt="Cat Wiki Logo"
          width={180}
          height={60}
        />

        <Headline>Get to know more about your cat breed</Headline>

        <InputWrapper>
          <input type="text" name="search" placeholder="Enter your breed" />

          <div className="icon-wrapper">
            <Image src="/icons/SearchIcon.svg" width={18} height={18} />
          </div>
        </InputWrapper>
      </Container>
    </div>
  );
}

const Container = styled.main`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 2rem;
`;

const HeroImageWrapper = styled.div`
  width: min(300px, 90vw);
  height: min(300px, 90vw);

  background-color: ${(props) => props.theme.colors.bg};
  background-size: cover;
  background-position: 90% 50%;
  background-image: url("./images/heroImage.png");

  align-self: center;
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
`;

const Headline = styled.h2`
  color: ${(props) => props.theme.colors.grey[300]};
  font-weight: 400;
  font-size: 1rem;
  text-align: center;

  max-width: 315px;
  margin-top: 1rem;
`;

const InputWrapper = styled.div`
  width: 100%;
  padding: 0.5rem 1rem;
  margin-top: 1rem;

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
