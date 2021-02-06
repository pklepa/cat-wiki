import React from 'react'
import styled from 'styled-components';

function CatStat({title, level}) {
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
  )
}

export default CatStat

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 2rem;

  h1 {
    font-size: 1rem;
    font-weight: 600;
    color: ${props => props.theme.colors.bg};
    margin-bottom: .8rem;
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
  background-color: ${props => props.active ? "#696059" : "#C1BCBA"};
  height: 12px;
  border-radius: 15px;
`;