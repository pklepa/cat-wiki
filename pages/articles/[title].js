import React from 'react';
import styled from 'styled-components';

import Head from 'next/head';
import Image from 'next/image';

import Footer from '../../components/Footer';
import SlimHeader from '../../components/SlimHeader';
import { reveal } from '../../utils/animationVariants/variants';
import { motion } from 'framer-motion';
import FadeInWhenVisible from '../../components/AnimationWrappers/FadeInWhenVisible';

export default function Article() {
  return (
    <>
      <Head>
        <title>Why should you have a cat? - Cat Wiki</title>
      </Head>

      <Container initial="exit" animate="enter" exit="exit" variants={reveal}>
        <SlimHeader />
        <Content>
          <Title>Why should you have a cat?</Title>
          <ArticleWrapper>
            <article>
              <p className="article-intro">
                Cats are one of the best pets you can get. If you are hesitant
                to take on the responsibility of owning a pet, you might want to
                look again at the benefits of having a cat. They are sweet,
                quiet and independent, and hearing a cat’s purr can melt your
                heart. Here are the top five reasons you should own a cat.
              </p>

              <MobileImgWrapper>
                <Image
                  src="/images/article-cat-2.png"
                  width={300}
                  height={485}
                />
              </MobileImgWrapper>

              <DesktopImgWrapper>
                <Image src="/images/Mosaic.png" width={611} height={536} />
              </DesktopImgWrapper>

              <FadeInWhenVisible>
                <h2>Cats can bathe themselves</h2>
                <p>
                  Cats are clean pretty much 100 percent of the time. That means
                  you never have to take the time out of your day to perform the
                  somewhat painstaking task of washing and grooming your cat.
                </p>
              </FadeInWhenVisible>

              <FadeInWhenVisible>
                <h2>Cats will keep your house and yard rodent-free</h2>
                <p>
                  If you are not a fan of rats, chipmunk, voles or mice in your
                  home, owning a cat will take care of that right away. Your cat
                  may even bring you its prize to make you proud!
                </p>
              </FadeInWhenVisible>

              <FadeInWhenVisible>
                <h2>Cats are low-maintenance and independent</h2>
                <p>
                  If you think you do not have the time or energy to own a pet,
                  then a cat could be perfect for you. Taking care of a cat
                  requires less responsibility than some other animals. Those
                  who have full-time jobs can rest easy, knowing that their
                  kitty can take care of itself for the most part. And when you
                  do have extra time, cuddling up with your cat will feel better
                  than ever.
                </p>
              </FadeInWhenVisible>

              <FadeInWhenVisible>
                <h2>Cats are an eco-friendly pet choice</h2>
                <p>
                  Living a “green” lifestyle can be difficult, but a cat is a
                  great choice for potential pet owners looking to stay
                  eco-friendly. Studies show that the lifetime resources needed
                  to feed and care for a cat have a smaller carbon footprint
                  than for other animals. Plus, most cats prefer fish to beef or
                  corn, which is better for the environment. You can feel good
                  about owning your kitty.
                </p>
              </FadeInWhenVisible>

              <FadeInWhenVisible>
                <h2>Cats can help reduce stress</h2>
                <p>
                  We all get stressed out, and people have many different ways
                  of relieving their stress. Cat owners can reduce tensions by
                  just stroking their furry friend’s head. Petting a cat
                  releases endorphins into the brain, which makes you happier.
                  Also, cats have the softest fur!
                </p>
              </FadeInWhenVisible>

              <FadeInWhenVisible>
                <div className="closing-thoughts">
                  <p>
                    There are so many more reasons that you should get a cat to
                    fill your home with love. Check out your local shelter to
                    find a kitty that really needs a home.
                  </p>

                  <span>by</span>
                  <p>Paige Plumblee & Lauren Adams, AnimalKind Volunteers</p>

                  <p>
                    visit <a href="https://animalkind.org/">AnimalKind</a> for
                    more
                  </p>
                </div>
              </FadeInWhenVisible>
            </article>
          </ArticleWrapper>
        </Content>
        <Footer />
      </Container>
    </>
  );
}

export async function getStaticProps({ params }) {
  return {
    props: { title: params.title },
  };
}

export async function getStaticPaths() {
  const paths = [{ params: { title: 'why-should-you-have-a-cat' } }];

  return {
    paths,
    fallback: false,
  };
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
    color: ${(props) => props.theme.colors.grey[500]};

    p {
      color: ${(props) => props.theme.colors.grey[500]};

      &.article-intro {
        font-style: italic;
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
  min-height: 300px;
  width: 100%;

  @media ${(props) => props.theme.devices.tablet} {
    display: none;
  }
`;

const DesktopImgWrapper = styled.div`
  display: none;

  @media ${(props) => props.theme.devices.tablet} {
    display: flex;
    justify-content: center;
    align-self: center;

    margin-top: 2rem;
    width: 100%;
    max-width: 700px;
  }

  @media ${(props) => props.theme.devices.laptop} {
    margin-right: 2rem;
  }
`;
