import React from 'react';
import styled from 'styled-components';

import Image from 'next/image';
import ExpandButton from './ExpandButton';
import Link from 'next/link';

function FeaturedArticle() {
  return (
    <Container>
      <Content>
        <div className="text-wrapper">
          <Link href="/articles/why-should-you-have-a-cat">
            <h1>Why should you have a cat?</h1>
          </Link>

          <p>
            Having a cat around can actually trigger the release of calming
            chemicals in your body which lower your stress and anxiety levels
          </p>

          <Link href="/articles/why-should-you-have-a-cat">
            <ExpandButton text="Read more" />
          </Link>
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

  @media ${(props) => props.theme.devices.tablet} {
    align-items: flex-end;
    border-radius: 350px 0 0 350px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  width: min(100%, 1440px);

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
      cursor: pointer;
      transition: 0.4s;

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

      &:hover {
        color: ${(props) => props.theme.colors.accent.dark};
      }
    }

    p {
      color: ${(props) => props.theme.colors.grey[500]};
      font-weight: 500;
    }

    .btn-expand {
      margin-top: 2rem;
    }
  }

  .img-wrapper {
    display: flex;
    justify-content: center;

    margin-top: 2rem;
    min-height: 300px;
    width: 100%;
  }

  @media ${(props) => props.theme.devices.tablet} {
    flex-direction: row-reverse;
    padding-left: 6rem;

    .text-wrapper {
      margin-left: 2rem;
    }
  }
`;