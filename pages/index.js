import Head from "next/head";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cat Wiki - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Title>Hello mom</Title>
      </main>
    </div>
  );
}
