import React, { useState, useReducer, useEffect } from 'react';
import movement from '../reducers/movement';
import MovementContext from '../context/movementContext';
import Title from './Title/Title';
import CommandCenter from './CommandCenter/CommandCenter';
import ActivityLog from './ActivityLog/ActivityLog';

const initialCoordinates = {
  X: 0,
  Y: 0,
  direction: 'N',
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
      <Title />
      <CommandCenter />
      <ActivityLog />
    </MovementContext.Provider>
  );
};

export default App;
