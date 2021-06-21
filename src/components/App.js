import React, { useState, useReducer, useEffect } from 'react';
import movement from '../reducers/movement';
import MovementContext from '../context/movementContext';

import CommandHistory from './CommandHistory';
import Input from './Input';
import RoverLocation from './RoverLocation';

const initialCoordinates = {
    X: 0,
    Y: 0,
    orientation: 'N'
};

const App = () => {
    const [ coordinates, setCoordinates ] = useReducer(movement, initialCoordinates);
    const [ items, setItems ] = useState([]);
    const [ obstacleCoordinates, setObstacleCoordinates ] = useState([]);

    useEffect(() => {
      const preliminaryScan = Math.floor(Math.random() * 100);

      for (let i = 1; i <= preliminaryScan; i++) {
        const newObstacle = { 
          Y: Math.floor(Math.random() * 100), 
          X: Math.floor(Math.random() * 100) 
        };
        // console.log(newObstacle); //kept for easy debugging
        //TODO: investigate why collision breaks when using setObstacleCoordinates()
        obstacleCoordinates.push(newObstacle);
      }
    }, [obstacleCoordinates]);

        return (
          <MovementContext.Provider value={{ coordinates, setCoordinates, items, setItems, obstacleCoordinates}}>
              <div className="commandContainer">
              <h3>Rover Command</h3>
              <Input />
              <RoverLocation />
            </div>
            <div className="commandHistoryContainer">
            <CommandHistory />
            </div>
          </MovementContext.Provider>
        );

  };

  export default App;
