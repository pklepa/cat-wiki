import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import Footer from '../../components/Footer';
import SlimHeader from '../../components/SlimHeader';

export default function CatList({ catList }) {
  console.log(catList);

  return (
    <>
      <Head>
        <title>Full Breed List - Cat Wiki</title>
      </Head>

      <SlimHeader />

      <Container>
        <h1>Breed List</h1>

        <ul>
          {catList.map((cat, index) => {
            return (
              <li key={index}>
                <Link href={`/cats/${cat.id}`}>{cat.name}</Link>
              </li>
            );
          })}
        </ul>
      </Container>

      <Footer />
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

const Container = styled.article`
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
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 1rem;

      > * {
        color: ${(props) => props.theme.colors.grey[500]};
        font-weight: 500;
      }
    }
  }
`;
