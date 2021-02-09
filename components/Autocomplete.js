import React, { useState } from 'react';
import styled from 'styled-components';

// Temporary list of breeds
const breeds = [
  {
    name: 'Egyptian Mau',
  },
  {
    name: 'European Burmese',
  },
  {
    name: 'Exotic Shorthair',
  },
  {
    name: 'Savannah',
  },
  {
    name: 'Scottish Fold',
  },
  {
    name: 'Selkirk Rex',
  },
  {
    name: 'Siamese',
  },
  {
    name: 'Siberian',
  },
  {
    name: 'Singapura',
  },
  {
    name: 'Snowshoe',
  },
];

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = (value, suggestions) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  // return inputLength === 0
  //   ? []
  //   : suggestions.filter(
  //       (suggestion) =>
  //         suggestion.name.toLowerCase().slice(0, inputLength) === inputValue
  //     );

  return inputLength === 0
    ? []
    : suggestions.filter((suggestion) =>
        suggestion.name.toLowerCase().includes(inputValue)
      );
};

function Autocomplete() {
  const [inputValue, setInputValue] = useState('');
  const [suggestionsArr, setSuggestionsArr] = useState([]);

  function handleChange(e) {
    console.log(e.target.value);
    setInputValue(e.target.value);
    const mySugg = getSuggestions(e.target.value, breeds);
    console.log(mySugg);
    setSuggestionsArr(mySugg);
  }

  return (
    <>
      <Container>
        <input
          type="text"
          name="search"
          placeholder="Enter your breed"
          value={inputValue}
          onChange={handleChange}
        />
      </Container>

      {suggestionsArr.length > 0 && (
        <SuggestionsContainer>
          {suggestionsArr.map((suggestion) => (
            <span
              key={suggestion.name}
              onClick={() => {
                setInputValue(suggestion.name);
                setSuggestionsArr([]);
              }}
            >
              {suggestion.name}
            </span>
          ))}
        </SuggestionsContainer>
      )}
    </>
  );
}

export default Autocomplete;

const Container = styled.div`
  flex: 1 1 50px;
  min-width: 50px;
  padding-right: 0.5rem;

  input {
    width: 100%;
    font-size: 1rem;
    background: none;
    border: none;
    outline: none;
    color: ${(props) => props.theme.colors.bg};

    &::placeholder {
      color: ${(props) => props.theme.colors.bg};
      opacity: 0.7;
    }
  }
`;

const SuggestionsContainer = styled.div`
  position: absolute;
  z-index: 10;
  top: 56px;
  left: 0;

  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors.grey[50]};
  width: 100%;
  max-height: 300px;
  overflow-y: scroll;
  padding: 0.5rem 0.5rem;

  display: flex;
  flex-direction: column;

  span {
    color: ${(props) => props.theme.colors.bg};
    padding: 0.5rem;

    &:not(:last-child) {
      margin-bottom: 1rem;
    }

    &:hover {
      cursor: pointer;
      background-color: ${(props) => props.theme.colors.grey[200]};
    }
  }
`;
