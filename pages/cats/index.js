import styled from 'styled-components';
import { motion } from 'framer-motion';
import { reveal } from '../../utils/animationVariants/variants';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import SlimHeader from '../../components/SlimHeader';
import Footer from '../../components/Footer';

export default function CatList({ catList }) {
  return (
    <>
      <Head>
        <title>Full Breed List - Cat Wiki</title>
      </Head>

      <Container initial="exit" animate="enter" exit="exit" variants={reveal}>
        <SlimHeader />

        <Content>
          <h1>Breed List</h1>

          <ul>
            {catList.map((cat, index) => {
              return (
                <li key={index}>
                  <Link href={`/cats/${cat.id}`} scroll={false}>
                    <div className="wrapper">
                      <div className="preview-img-wrapper">
                        <Image
                          className="preview-img"
                          src={
                            cat.image && cat.image.url
                              ? cat.image.url
                              : '/images/nopreview.png'
                          }
                          alt="Photo of a Norwegian Forest cat"
                          layout="fill"
                        />
                      </div>

                      <span>{cat.name}</span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Content>

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

const Container = styled(motion.main)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${(props) => props.theme.devices.tablet} {
    padding: 0 2rem;
  }
`;

const Content = styled.article`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.grey[200]};
  border-radius: 2rem;
  width: 100%;
  max-width: 1440px;
  padding: 2rem;

  h1 {
    font-size: 1.6rem;
    color: ${(props) => props.theme.colors.bg};
    margin-bottom: 2.5rem;
    align-self: flex-start;

    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -0.5rem;
      left: 0;

      width: 50%;
      height: 4px;
      border-radius: 3px;
      background-color: ${(props) => props.theme.colors.grey[500]};
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    justify-content: center;
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 1rem;

      > * {
        color: ${(props) => props.theme.colors.grey[500]};
        font-weight: 500;
      }

      .wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;

        cursor: pointer;

        .preview-img-wrapper {
          width: 100%;
          border-radius: 1rem;

          min-height: 200px;

          position: relative;

          .preview-img {
            object-fit: cover;
            border-radius: 1rem;
          }

          &::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);

            border-radius: 1rem;
            background-color: ${(props) => props.theme.colors.accent.light};
            height: 100%;
            width: 100%;

            transition: all 0.4s;
          }
        }

        span {
          margin: 0.5rem 0;
          color: ${(props) => props.theme.colors.bg};
          font-weight: 700;
          transition: all 0.4s;
        }

        &:hover,
        &:focus {
          .preview-img-wrapper::before {
            transform: translateY(-50%) translateX(-10px);
          }

          span {
            color: ${(props) => props.theme.colors.accent.dark};
          }
        }
      }

      @media ${(props) => props.theme.devices.tablet} {
        .wrapper .preview-img-wrapper {
          min-height: 250px;
        }
      }
    }
  }
`;
