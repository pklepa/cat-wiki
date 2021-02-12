import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import styled from 'styled-components';
import breedIds from '../../utils/breedIds';
import { motion } from 'framer-motion';
import { reveal } from '../../utils/animationVariants/variants';

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

  return (
    <Container
      initial="exit"
      animate="enter"
      exit="exit"
      variants={reveal}
      key="page-random"
    >
      <LogoWrapper>
        <Image src="/images/logo.svg" alt="Cat Wiki Logo" layout="fill" />
      </LogoWrapper>
    </Container>
  );
}

const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100%;
`;

const LogoWrapper = styled.div`
  position: relative;
  width: 180px;
  height: 80px;

  @media ${(props) => props.theme.devices.tablet} {
    width: 300px;
    height: 100px;
  }
`;
