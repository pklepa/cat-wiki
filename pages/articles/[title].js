import Head from 'next/head';
import React from 'react';
import Footer from '../../components/Footer';

export default function Article() {
  return (
    <>
      <Head>
        <title>Why should you have a cat? - Cat Wiki</title>
      </Head>

      <h1>Why should you have a cat?</h1>

      <Footer />
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
