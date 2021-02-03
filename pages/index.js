import styled from 'styled-components';

import Head from 'next/head';
import Header from '../components/Header';
import MainArticle from '../components/MainArticle';
import FeaturedArticle from '../components/FeaturedArticle';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cat Wiki - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Header />
        <MainArticle />
        <FeaturedArticle />
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
