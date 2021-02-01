import React from "react";

import Head from "next/head";
import Link from "next/link";

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

      <h1>Hello {cat.name}</h1>
      <p>{cat.description}</p>

      <a href={cat.wikipedia_url}>Read more</a>

      <img src={images[0].url} width="300" />

      <Link href="/cats">Go back</Link>
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
