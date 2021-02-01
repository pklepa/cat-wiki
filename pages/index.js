import Head from "next/head";
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
        <Title>Hello mom</Title>
      </Container>
    </div>
  );
}

const Title = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const Container = styled.main`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 2rem;
`;

const HeroImageWrapper = styled.div`
  width: 300px;
  height: 300px;

  background-color: ${(props) => props.theme.colors.bg};
  background-size: cover;
  background-position: 90% 50%;
  background-image: url("./heroImage.png");

  align-self: center;
  border-radius: 50%;

  position: relative;

  &::before {
    content: "";
    width: 310px;
    height: 310px;
    background-color: white;
    border-radius: 50%;

    position: absolute;
    top: -10px;
    left: -1px;
    z-index: -1;
  }
`;
