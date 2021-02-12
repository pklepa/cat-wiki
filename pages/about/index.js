import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import Head from 'next/head';
import Image from 'next/image';

import Footer from '../../components/Footer';
import SlimHeader from '../../components/SlimHeader';
import { reveal } from '../../utils/animationVariants/variants';

export default function index() {
  return (
    <>
      <Head>
        <title>About - Cat Wiki</title>
      </Head>

      <Container initial="exit" animate="enter" exit="exit" variants={reveal}>
        <SlimHeader />

        <Content>
          <Title>About this page</Title>

          <ArticleWrapper>
            <article>
              <p className="quote">
                Ignorance killed the cat; curiosity was framed!
                <span>C. J. Cherryh</span>
              </p>

              <p>
                Be it for having some company, someone to talk to, or simply
                bringing joy to the household, pets are wonderful! And cats are
                (arguably) the most popular of them.
              </p>

              <p>
                CatWiki is a way to help you soothe your mind on some
                curiosities about this curious bunch of animals. Read about more
                than 66 different cat breeds with some tailored details about
                their own specific characteristics.
              </p>

              <MobileImgWrapper>
                <Image
                  className="black-cat"
                  src="/images/blackcat.jpg"
                  width={330}
                  height={495}
                />
              </MobileImgWrapper>
            </article>
          </ArticleWrapper>
        </Content>

        <Footer />
      </Container>
    </>
  );
}

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Content = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 1rem 0 4rem;
  padding: 0 1rem;
  text-align: center;
  position: relative;
  align-self: center;

  &::after {
    content: '';
    width: 200px;
    height: 4px;
    border-radius: 4px;
    background-color: ${(props) => props.theme.colors.grey[50]};

    position: absolute;
    left: 50%;
    bottom: -1rem;
    transform: translateX(-50%);
  }
`;

const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1368px;

  background-color: ${(props) => props.theme.colors.grey[300]};
  border-radius: 2rem;
  padding: 3rem 2rem;

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${(props) => props.theme.colors.grey[500]};

    p {
      color: ${(props) => props.theme.colors.grey[500]};

      &.quote {
        font-style: italic;
        font-size: 24px;
        font-weight: 500;
        text-align: center;
        padding: 0 0.5rem;
        max-width: 450px;
        margin-bottom: 2rem;

        position: relative;

        & > span {
          display: block;
          text-align: center;
          margin-top: 1rem;
          font-size: 1rem;
          font-weight: 400;
        }

        &::before {
          content: '';
          position: absolute;
          top: -0.5rem;
          left: -1rem;
          width: 30px;
          height: 25px;
          background-image: url('/icons/quote-start.svg');
          background-size: contain;
          background-repeat: no-repeat;
        }

        &::after {
          content: '';
          position: absolute;
          bottom: 2.5rem;
          right: -0.5rem;
          width: 30px;
          height: 25px;
          opacity: 0.5;
          background-image: url('/icons/quote-end.svg');
          background-size: contain;
          background-repeat: no-repeat;
        }
      }
    }

    h2 {
      margin-top: 6rem;
      text-align: center;
      position: relative;

      &::before {
        content: '';
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: ${(props) => props.theme.colors.grey[500]};

        position: absolute;
        top: -3rem;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    .closing-thoughts {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      p {
        &:not(:first-child) {
          text-align: center;
        }

        &:last-child {
          margin-top: 2rem;
        }

        a {
          color: ${(props) => props.theme.colors.grey[500]};
          font-weight: 700;
          transition: 0.4s;

          &:hover {
            color: ${(props) => props.theme.colors.accent.dark};
          }
        }
      }

      span {
        display: block;
        text-align: center;
        font-weight: 700;
        margin: 2rem 0 0.5rem;
      }
    }
  }

  @media ${(props) => props.theme.devices.tablet} {
    article {
      max-width: 800px;
    }
  }
`;

const MobileImgWrapper = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 2rem;
  min-height: 381px;
  width: 100%;

  .black-cat {
    border-radius: 2rem;
  }

  @media ${(props) => props.theme.devices.tablet} {
    & > * {
      width: 400px;
      height: 400px;
    }

    .black-cat {
      object-fit: cover;
    }
  }
`;
