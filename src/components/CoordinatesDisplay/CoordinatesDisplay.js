import { useEffect, useContext, useRef } from 'react';
import styled from '@emotion/styled';
import MovementContext from '../../context/movementContext';
import theme from '../../styling/theme';

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
  height: ${theme.baseSizes.lg};
  align-items: end;

  & p {
    margin: 0;
  }

  & p:first-of-type {
    justify-self: right;
  }

  & p:nth-of-type(2) {
    padding-left: ${theme.baseSizes.sm};

    @keyframes enlrage {
      20% {
        font-size: ${theme.baseSizes.md};
        color: ${theme.colors.charcoal};
        font-weight: normal;
      }

      50% {
        font-size: ${theme.baseSizes.st};
        color: ${theme.colors.chillRed};
        font-weight: bold;
      }

      100% {
        font-size: ${theme.baseSizes.md};
        color: ${theme.colors.charcoal};
        font-weight: normal;
      }
    }
  }
`;

export default CoordinatesDisplay;
