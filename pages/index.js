import styled from 'styled-components';
import { motion } from 'framer-motion';

import Head from 'next/head';
import Header from '../components/Header';
import MainArticle from '../components/MainArticle';
import FeaturedArticle from '../components/FeaturedArticle';
import Footer from '../components/Footer';
import { reveal } from '../utils/animationVariants/variants';
import SlideLeftWhenVisible from '../components/AnimationWrappers/SlideLeftWhenVisible';
import SlideRightWhenVisible from '../components/AnimationWrappers/SlideRightWhenVisible';

export default function Home({ catList }) {
  return (
    <>
      <Head>
        <title>Cat Wiki - Home</title>
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content="Cat Wiki - Home" />
        <meta
          property="og:description"
          content="Get to know the details of over 66 different cat breeds from all around the world."
        />
        <meta
          property="og:image"
          content="https://user-images.githubusercontent.com/22618438/107892064-9126bd00-6f1a-11eb-9f48-f8f564756383.png"
        />
        <meta property="og:url" content="https://cat-wiki.pklepa.vercel.app/" />
      </Head>

      <Container
        id="root-home"
        initial="exit"
        animate="enter"
        exit="exit"
        variants={reveal}
      >
        <Header catList={catList} />
        <SlideLeftWhenVisible>
          <MainArticle />
        </SlideLeftWhenVisible>
        <SlideRightWhenVisible>
          <FeaturedArticle />
        </SlideRightWhenVisible>
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

  overflow-x: hidden;
`;
