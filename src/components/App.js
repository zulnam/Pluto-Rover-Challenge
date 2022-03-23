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
      <CommandContainer>
        <h3>Rover Command</h3>
        <InputContainer />
        <CoordinatesDisplay />
      </CommandContainer>
      <ActivityLog />
    </MovementContext.Provider>
  );
};

const CommandContainer = styled.div`
  h3 {
    text-align: center;
  }

  form {
    display: flex;
    justify-content: space-around;

    button {
      border-radius: 8px;
      width: 64px;
      height: 32px;
    }
  }
`;

export default App;
