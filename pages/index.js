import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

import Head from 'next/head';
import Header from '../components/Header';
import MainArticle from '../components/MainArticle';
import FeaturedArticle from '../components/FeaturedArticle';
import Footer from '../components/Footer';
import { reveal } from '../utils/animationVariants/variants';

export default function Home({ catList }) {
  return (
    <>
      <Head>
        <title>Cat Wiki - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container
        id="root-home"
        initial="exit"
        animate="enter"
        exit="exit"
        variants={reveal}
      >
        <Header catList={catList} />
        <MainArticle />
        <FeaturedArticle />
        <Footer />
      </Container>
    </>
  );
}

// Fetches API data before Next generates the page
export async function getStaticProps() {
  const req = await fetch(
    `https://api.thecatapi.com/v1/breeds?api_key=${process.env.CAT_API_KEY}`
  );
  const data = await req.json();

  return {
    props: { catList: data },
  };
}

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;
