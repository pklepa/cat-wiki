import Link from "next/link";

export default function CatList({ catList }) {
  return (
    <div>
      <h1>my list of cats</h1>

      <ul>
        {catList.map((cat, index) => {
          return (
            <li key={index}>
              <Link href={`/cats/${cat.name}`}>{cat.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const req = await fetch(
    `https://api.thecatapi.com/v1/breeds?api_key=${process.env.CAT_API_KEY}`
  );
  const data = await req.json();

  return {
    props: { catList: data },
  };
}
