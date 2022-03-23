import React, { useState, useReducer, useEffect } from 'react';
import styled from '@emotion/styled';
import movement from '../reducers/movement';
import MovementContext from '../context/movementContext';

import CommandHistory from './CommandHistory';
import Input from './Input';
import RoverLocation from './RoverLocation';

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
        Y: Math.floor(Math.random() * 100),
        X: Math.floor(Math.random() * 100),
      };
      // console.log(newObstacle); //kept for easy debugging
      //TODO: investigate why collision breaks when using setObstacleCoordinates()
      obstacleCoordinates.push(newObstacle);
    }
  }, [obstacleCoordinates]);

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
        <Input />
        <RoverLocation />
      </CommandContainer>
      <CommandHistory />
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
