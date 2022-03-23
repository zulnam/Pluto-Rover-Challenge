import { useState, useContext, useEffect, useCallback } from 'react';
import MovementContext from '../../context/movementContext';
import { collisionCheck, decipherLog } from '../scripts/input';

const InputContainer = () => {
  const { items, setItems, coordinates, setCoordinates, obstacleCoordinates } =
    useContext(MovementContext);
  const [command, setCommand] = useState('');

  /**
   * @param {string} logCommand
   * @param {string} type
   *
   * Updates visible log with the latest command
   */
  const fireLogEntry = useCallback(
    (logCommand, type) => {
      const newItem = decipherLog(logCommand, type);

      if (items.length === 10) {
        items.splice(0, 1);
        setItems([...items, newItem]);
      } else {
        setItems([...items, newItem]);
      }
    },
    [items, setItems]
  );

  /**
   * @param {string} input
   *
   * Executes and logs command if collisionCheck returns false
   */
  const fireCommand = useCallback(
    (input) => {
      let collisionDetected = collisionCheck(
        coordinates,
        input,
        obstacleCoordinates
      );

      if (collisionDetected) {
        setCoordinates({ type: 'C' });
        fireLogEntry('C', 'collision');
      } else {
        setCoordinates({ type: input });
        fireLogEntry(input, 'info');
      }
    },
    [coordinates, fireLogEntry, obstacleCoordinates, setCoordinates]
  );

  useEffect(() => {
    const handleKeyboard = (e) => {
      e.preventDefault();
      const validCommands = ['W', 'S', 'A', 'D'];
      const key = e.key.toUpperCase();

      if (validCommands.find((element) => element === key)) {
        setCommand(key);
      }
    };

    window.addEventListener('keyup', (event) => {
      handleKeyboard(event);
    });

    return () => {
      window.removeEventListener('keyup', handleKeyboard);
    };
  }, []);

  useEffect(() => {
    if (!command.length) {
      return false;
    }

    fireCommand(command);
    setCommand('');
  }, [command, fireCommand]);

  return (
    <>
      <button
        data-testid="forward"
        onClick={() => {
          setCommand('W');
        }}
      >
        Forward
      </button>
      <button
        data-testid="backward"
        onClick={() => {
          setCommand('S');
        }}
      >
        Backward
      </button>
      <button
        data-testid="left"
        onClick={() => {
          setCommand('A');
        }}
      >
        Turn Left
      </button>
      <button
        data-testid="right"
        onClick={() => {
          setCommand('D');
        }}
      >
        Turn Right
      </button>
    </>
  );
};

export default InputContainer;
