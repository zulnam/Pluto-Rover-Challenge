import { useContext } from 'react';
import styled from '@emotion/styled';
import MovementContext from '../context/movementContext';

const RoverLocation = () => {
  const { coordinates } = useContext(MovementContext);

  return (
    <>
      <h3>Rover Position</h3>
      <RoverPositionContainer>
        <p>Y</p>
        <p>X</p>
        <p>Orientation</p>
        <p data-testid="Yposition">{coordinates.Y}</p>
        <p data-testid="Xposition">{coordinates.X}</p>
        <p data-testid="currentOrientation">{coordinates.orientation}</p>
      </RoverPositionContainer>
    </>
  );
};

const RoverPositionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  p {
    text-align: center;
    margin: 0;
  }

  & p:nth-of-type(4),
  & p:nth-of-type(5),
  & p:nth-of-type(6) {
    border: 1px solid black;
    padding: 12px;
  }
`;

export default RoverLocation;
