import React from 'react';
import styled from 'styled-components';

function CatStat({ title, level }) {
  return (
    <Container>
      <h1>{title}:</h1>

      <div>
        <StatBullet active={level >= 1} />
        <StatBullet active={level >= 2} />
        <StatBullet active={level >= 3} />
        <StatBullet active={level >= 4} />
        <StatBullet active={level >= 5} />
      </div>
    </Container>
  );
}

export default CatStat;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  h1 {
    font-size: 1rem;
    font-weight: 600;
    color: ${(props) => props.theme.colors.bg};
    margin-bottom: 0.8rem;
  }

  div {
    display: grid;
    grid-template-columns: repeat(5, 60px);
    gap: 4px;
    justify-content: space-between;
    width: 100%;
    max-width: 350px;
  }
`;

const StatBullet = styled.div`
  background-color: ${(props) => (props.active ? '#FDBA74' : '#C1BCBA')};
  box-shadow: inset 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
  height: 12px;
  border-radius: 15px;
`;
