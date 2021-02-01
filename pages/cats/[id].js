import React from "react";

import Head from "next/head";
import Link from "next/link";

export default function Cat({ cat }) {
  console.log(cat);

  return (
    <>
      <Head>
        <title>{cat.name} - Cat Wiki</title>
      </Head>

      <h1>Hello {cat.name}</h1>
      <p>{cat.description}</p>

      <Link href="/cats">Go back</Link>
    </>
  );
}

// Fetches API data before Next generates the page
export async function getStaticProps({ params }) {
  const req = await fetch(
    `https://api.thecatapi.com/v1/breeds/search?q=${params.id}`
  );
  const data = await req.json();

  return {
    props: { cat: data[0] },
  };
}

// Tells Next how many and which pages will be generated through this dynamic url
export async function getStaticPaths() {
  const req = await fetch(
    `https://api.thecatapi.com/v1/breeds?api_key=${process.env.CAT_API_KEY}`
  );
  const data = await req.json();

  const paths = data.map((cat) => {
    return { params: { id: cat.name } };
  });

  return {
    paths,
    fallback: false,
  };
}
