import React, { useState, useReducer, useEffect } from 'react';
import styled from '@emotion/styled';
import movement from '../reducers/movement';
import MovementContext from '../context/movementContext';

import ActivityLog from './ActivityLog/ActivityLog';
import InputContainer from './InputContainer/InputContainer';
import CoordinatesDisplay from './CoordinatesDisplay/CoordinatesDisplay';

const initialCoordinates = {
  X: 0,
  Y: 0,
  orientation: 'N',
};

const App = () => {
  const [coordinates, setCoordinates] = useReducer(
    movement,
    initialCoordinates
  );
  const [items, setItems] = useState([]);
  const [obstacleCoordinates, setObstacleCoordinates] = useState([]);

  useEffect(() => {
    const preliminaryScan = Math.floor(Math.random() * 100);

    for (let i = 1; i <= preliminaryScan; i++) {
      const newObstacle = {
        X: Math.floor(Math.random() * 100),
        Y: Math.floor(Math.random() * 100),
      };

      setObstacleCoordinates((obstacleCoordinates) => [
        ...obstacleCoordinates,
        newObstacle,
      ]);
    }
    /** excluded eslint rule for obstacleCoordinates dependency as
     * this is the boot spawn generator for obstacles
     */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MovementContext.Provider
      value={{
        coordinates,
        setCoordinates,
        items,
        setItems,
        obstacleCoordinates,
      }}
    >
      <Title>Rover Command</Title>
      <CommandContainer>
        <h3>Controls</h3>
        <InputContainer />
        <CoordinatesDisplay />
      </CommandContainer>
      <ActivityLog />
    </MovementContext.Provider>
  );
};

const Title = styled.h1`
  grid-column: 1 / span 2;
  font-size: 2.5em;
  margin: 0;
  padding-top: 16px;
`;

const CommandContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.1fr 0.8fr 0.2fr;
  gap: 0px 20px;

  h3 {
    text-align: center;
    grid-column: 1 / span 4;
  }

  button {
    border-radius: 8px;
    height: 32px;
    align-self: center;
    justify-self: center;
  }
`;

export default App;
