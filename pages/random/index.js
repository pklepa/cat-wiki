import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import breedIds from '../../utils/breedIds';

function randomCat() {
  const randomIndex = Math.floor(Math.random() * 67);

  return breedIds.breeds[randomIndex];
}

export default function Random() {
  const router = useRouter();
  const random = randomCat();

  useEffect(() => {
    router.push(`/cats/${random}`);
  }, []);

  return <div></div>;
}
