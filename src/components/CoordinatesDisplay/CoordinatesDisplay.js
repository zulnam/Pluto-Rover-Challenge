import { useEffect, useContext, useRef } from 'react';
import styled from '@emotion/styled';
import MovementContext from '../../context/movementContext';

const CoordinatesDisplay = () => {
  const { coordinates } = useContext(MovementContext);

  const xCoordinate = useRef(null);
  useEffect(() => {
    xCoordinate.current.style.animation = 'enlrage 0.5s 1';
    setTimeout(() => {
      xCoordinate.current.style.animation = null;
    }, 500);
  }, [coordinates.X]);

  const yCoordinate = useRef(null);
  useEffect(() => {
    yCoordinate.current.style.animation = 'enlrage 0.5s 1';
    setTimeout(() => {
      yCoordinate.current.style.animation = null;
    }, 500);
  }, [coordinates.Y]);

  const direction = useRef(null);
  useEffect(() => {
    direction.current.style.animation = 'enlrage 0.5s 1';
    setTimeout(() => {
      direction.current.style.animation = null;
    }, 500);
  }, [coordinates.direction]);

  return (
    <RoverPositionContainer>
      <h3>Position</h3>
      <CoordinateContainer>
        <p>Y</p>
        <p ref={yCoordinate} data-testid="Yposition">
          {coordinates.Y}
        </p>
      </CoordinateContainer>
      <CoordinateContainer>
        <p>X</p>
        <p ref={xCoordinate} data-testid="Xposition">
          {coordinates.X}
        </p>
      </CoordinateContainer>
      <CoordinateContainer>
        <p>Direction</p>
        <p ref={direction} data-testid="currentOrientation">
          {coordinates.direction}
        </p>
      </CoordinateContainer>
    </RoverPositionContainer>
  );
};

const RoverPositionContainer = styled.div`
  grid-column: 1 / span 4;
  display: grid;
  grid-template-columns: repeat(2, 0.5fr) 1fr;
  grid-template-rows: 0.5fr 0.5fr;
`;

const CoordinateContainer = styled.span`
  display: grid;
  grid-template-columns: repeat(2, 0.5fr);
  height: 24px;
  align-items: end;

  & p {
    margin: 0;
  }

  & p:first-of-type {
    justify-self: right;
  }

  & p:nth-of-type(2) {
    padding-left: 12px;

    @keyframes enlrage {
      20% {
        font-size: 16px;
        color: black;
        font-weight: normal;
      }

      50% {
        font-size: 18px;
        color: red;
        font-weight: bold;
      }

      100% {
        font-size: 16px;
        color: black;
        font-weight: normal;
      }
    }
  }
`;

export default CoordinatesDisplay;
