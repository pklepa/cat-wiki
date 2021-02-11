import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Image from 'next/image';
import Autocomplete from './Autocomplete';
import { useRouter } from 'next/router';

function Header({ catList }) {
  const [searchInput, setSearchInput] = useState('');
  const [breedList, setBreedList] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setBreedList(
      catList.map((cat) => {
        return {
          name: cat.name,
          id: cat.id,
        };
      })
    );
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    const selectedCat = breedList.find((cat) =>
      cat.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    if (selectedCat) {
      router.push(`/cats/${selectedCat.id}`);
    } else {
      alert('Breed not found');
    }
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoWrapper>
          <Image src="/images/logo.svg" alt="Cat Wiki Logo" layout="fill" />
        </LogoWrapper>

        <h2>Get to know more about your cat breed</h2>

        <InputWrapper onSubmit={handleSubmit}>
          <Autocomplete
            breedList={breedList}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />

          <button type="submit" className="icon-wrapper">
            <Image src="/icons/SearchIcon.svg" width={18} height={18} />
          </button>
        </InputWrapper>
      </HeaderContent>

      <HeroImageWrapper />
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  width: min(100%, 1440px);
  padding: 2rem;

  @media ${(props) => props.theme.devices.tablet} {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 2rem 0;

    height: 80vh;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  flex: 1;

  h2 {
    color: ${(props) => props.theme.colors.grey[300]};
    font-weight: 400;
    font-size: 1rem;
    text-align: center;

    max-width: 290px;
    margin: 1rem 0;
  }

  @media ${(props) => props.theme.devices.tablet} {
    align-items: flex-start;

    h2 {
      text-align: start;
      margin: 0.5rem 0 2rem;
      font-size: 1.3rem;
      max-width: 100%;
    }
  }
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

const InputWrapper = styled.form`
  width: min(100%, 400px);
  padding: 0.5rem 1rem;
  margin: 1rem 0 0;

  background-color: ${(props) => props.theme.colors.grey[50]};
  border-radius: 1.5rem;

  display: flex;
  position: relative;

  button {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
  }

  .icon-wrapper {
    flex: 0 0 auto;

    display: flex;
    align-items: center;
    align-self: center;
  }
`;

const HeroImageWrapper = styled.div`
  width: min(300px, 90vw);
  height: min(300px, 90vw);

  background-color: ${(props) => props.theme.colors.bg};
  background-size: cover;
  background-position: 90% 50%;
  background-image: url('./images/heroImage.png');

  border-radius: 50%;

  margin-bottom: 1rem;

  position: relative;

  &::before {
    content: '';
    width: min(310px, calc(85vw + 10px));
    height: min(310px, calc(85vw + 10px));
    background-color: #fafaf9;
    border-radius: 50%;

    position: absolute;
    top: -10px;
    left: -1px;
    z-index: -1;
  }

  @media ${(props) => props.theme.devices.tablet} {
    border-radius: 0;
    margin: 0;
    width: 100%;
    height: 100%;

    flex: 2;

    &::before {
      display: none;
    }
  }
`;
