import React from 'react';
import styled from 'styled-components';

import Image from 'next/image';

function FeaturedArticle() {
  return (
    <Container>
      <Content>
        <div className="text-wrapper">
          <h1>Why should you have a cat?</h1>

          <p>
            Having a cat around can actually trigger the release of calming
            chemicals in your body which lower your stress and anxiety levels
          </p>

          <button className="btn-read-more">
            Read more <span></span>
          </button>
        </div>

        <div className="img-wrapper">
          <Image src="/images/article-cat-2.png" width={300} height={485} />
        </div>
      </Content>
    </Container>
  );
}

export default FeaturedArticle;

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  margin: 2rem 0 2rem;
  border-radius: 3rem;

  background-color: ${(props) => props.theme.colors.grey[200]};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;

  .text-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 450px;

    h1 {
      color: ${(props) => props.theme.colors.bg};
      font-size: 2rem;

      margin: 2.5rem 0 2rem;

      position: relative;

      &::before {
        content: '';
        background-color: ${(props) => props.theme.colors.grey[500]};
        width: 100px;
        height: 5px;
        border-radius: 3px;

        position: absolute;
        top: -1.5rem;
        left: 0;
      }
    }

    p {
      color: ${(props) => props.theme.colors.grey[500]};
      font-weight: 500;
    }

    .btn-read-more {
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
  }

  .img-wrapper {
    display: flex;
    justify-content: center;

    margin-top: 2rem;
    min-height: 300px;
    width: 100%;
  }
`;
