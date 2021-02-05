import React from "react";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

export default function Cat({ data }) {
  const [cat] = data[0].breeds;

  const images = data.map((x) => {
    return { url: x.url, width: x.width, height: x.height };
  });

  return (
    <>
      <Head>
        <title>{cat.name} - Cat Wiki</title>
      </Head>

      <Container>
        <LogoWrapper>
          <Image src="/images/logo.svg" alt="Cat Wiki Logo" layout="fill" />
        </LogoWrapper>



        <HeroImgWrapper>
          <Image src={images[0].url} className="main-img" alt="Cat Wiki Logo" layout="fill" />
        </HeroImgWrapper>

        <h1>{cat.name}</h1>

        <Intro>
          <p>{cat.description}</p>
        </Intro>


        <a href={cat.wikipedia_url}>Read more</a>

        <img src={images[0].url} width="300" />

        <Link href="/cats">Go back</Link>
      </Container>
    </>
  );
}

// Fetches API data before Next generates the page
export async function getStaticProps({ params }) {
  const req = await fetch(
    `https://api.thecatapi.com/v1/images/search?breed_id=${params.id}&limit=9`
  );
  const data = await req.json();

  return {
    props: { data: data },
  };
}

// Tells Next how many and which pages will be generated through this dynamic url
export async function getStaticPaths() {
  const req = await fetch(
    `https://api.thecatapi.com/v1/breeds?api_key=${process.env.CAT_API_KEY}`
  );
  const data = await req.json();

  const paths = data.map((cat) => {
    return { params: { id: cat.id } };
  });

  return {
    paths,
    fallback: false,
  };
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;

  background-color: ${props => props.theme.colors.bg};

  h1 {
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
    padding: 2rem;
  }
`;

const LogoWrapper = styled.div`
  position: relative;
  width: 180px;
  height: 80px;
  transition: 0.4s;

  margin-bottom: 1rem;
  padding: 0 2rem 1rem;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

const HeroImgWrapper = styled.div`
  position: relative;

  width: calc(100% - 4rem);
  max-width: 350px;
  min-height: 350px;

  .main-img {
    object-fit: cover;
    border-radius: 1rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -10px;
    transform: translateY(-50%);

    border-radius: 1rem;
    background-color: ${(props) => props.theme.colors.accent.light};
    height: calc(100% - 2px);
    width: 100%;

    transition: all 0.4s;
  }
`;

const Intro = styled.section`
  display: flex;
  flex-direction: column;

  padding: 3rem 2rem;
  border-radius: 2rem;

  background-color: ${props => props.theme.colors.grey[300]};

  p {
    color: ${props => props.theme.colors.grey[500]};
  }
`;