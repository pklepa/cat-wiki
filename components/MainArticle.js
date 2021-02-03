import React from 'react';
import styled from 'styled-components';

import Link from 'next/link';
import Image from 'next/image';

function MainArticle() {
  return (
    <Container>
      <Content>
        <span className="preface">Most Searched Breeds</span>

        <h1>66+ Breeds for you to explore</h1>

        <LinksContainer>
          <Link href="/cats/beng">
            <div className="wrapper">
              <div className="preview-img-wrapper">
                <Image
                  className="preview-img"
                  src="/images/bengal.jpg"
                  alt="Photo of a bengal cat"
                  layout="fill"
                />
              </div>
              <span>Bengal</span>
            </div>
          </Link>

          <Link href="/cats/sava">
            <div className="wrapper">
              <div className="preview-img-wrapper">
                <Image
                  className="preview-img"
                  src="/images/savannah.jpg"
                  alt="Photo of a Savannah cat"
                  layout="fill"
                />
              </div>
              <span>Savannah</span>
            </div>
          </Link>

          <Link href="/cats/norw">
            <div className="wrapper">
              <div className="preview-img-wrapper">
                <Image
                  className="preview-img"
                  src="/images/norwegian.jpg"
                  alt="Photo of a Norwegian Forest cat"
                  layout="fill"
                />
              </div>
              <span>Norwegian Forest Cat</span>
            </div>
          </Link>

          <Link href="/cats/srex">
            <div className="wrapper">
              <div className="preview-img-wrapper">
                <Image
                  className="preview-img"
                  src="/images/selkirk.jpg"
                  alt="Photo of a Selkirk Rex cat"
                  layout="fill"
                />
              </div>
              <span>Selkirk Rex</span>
            </div>
          </Link>
        </LinksContainer>

        <button className="btn-see-more">
          See more <span></span>
        </button>
      </Content>
    </Container>
  );
}

export default MainArticle;

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  margin: 2rem 0 4rem;
  border-radius: 3rem;

  background-color: ${(props) => props.theme.colors.grey[300]};

  @media ${(props) => props.theme.devices.tablet} {
    margin-top: 0;
    border-radius: 0 350px 350px 0;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: min(100%, 1440px);
  min-height: 625px;
  padding: 2rem;

  .preface {
    color: ${(props) => props.theme.colors.grey[500]};
    font-weight: 500;

    margin-bottom: 2rem;

    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -0.5rem;
      left: 0;

      background-color: ${(props) => props.theme.colors.grey[500]};
      width: 80px;
      height: 4px;
      border-radius: 2px;
    }
  }

  h1 {
    color: ${(props) => props.theme.colors.bg};
    font-size: 2rem;

    margin-bottom: 2rem;
  }

  .btn-see-more {
    color: ${(props) => props.theme.colors.grey[500]};
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 600;

    background: none;
    outline: none;
    border: none;

    align-self: center;
    margin-top: 2rem;

    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 0.5rem;
    align-items: center;

    span {
      width: 34px;
      height: 17px;
      background-image: url('/icons/Arrow.svg');
    }
  }

  @media ${(props) => props.theme.devices.tablet} {
    padding-right: 6rem;
    position: relative;

    h1 {
      max-width: 550px;
    }

    .btn-see-more {
      position: absolute;
      top: 142px;
      right: 6rem;
    }
  }
`;

const LinksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 2rem;
  width: 100%;

  position: relative;

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
`;
