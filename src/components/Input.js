import { useState, useContext, useEffect } from "react";
import MovementContext from "../context/movementContext";
import { collisionCheck, decipherLog } from './scripts/input';

const Input = () => {
    const { items, setItems, coordinates, setCoordinates, obstacleCoordinates } = useContext(MovementContext);
    const [ command, setCommand] = useState('');

    useEffect(() => {
        const handleKeyboard = (e) => {
            e.preventDefault();
            const validCommands = ['F', 'B', 'L', 'R'];
            const key = e.key.toUpperCase();
    
            if (validCommands.find(element => element === key))
            {
                setCommand(key);
            }
        };

        window.addEventListener('keyup', (event) => {handleKeyboard(event);});
        
        return () => {
            window.removeEventListener('keyup', handleKeyboard);
        };
    }, []);

    useEffect(() => {
        if (command.length === 0) {
            return false;
        }

        fireCommand(command);
        setCommand('');
    }, [command]);

    /**
     * 
     * @param {string} logCommand 
     * @param {string} type 
     * 
     * Updates visible log with the latest command
     */
    const fireLogEntry = (logCommand, type) => {
        const newItem = decipherLog(logCommand, type);
          setItems([...items, newItem]);
    };
  
    /**
     * 
     * @param {Event} e 
     * 
     * The form container could be replaced with a div, removing the need for e.preventDefault()
     * however maintaining it a form and building around that will ensure any future
     * iterations on commands will already support any form input methods
     */
    const handleSubmit = (e) => {
      e.preventDefault();

    };


    /**
     * 
     * @param {string} input
     * 
     * Executes and logs command if collisionCheck returns false
     */
    const fireCommand = (input) => {
        let collisionDetected = collisionCheck(coordinates, input, obstacleCoordinates);

        if (collisionDetected) {
            setCoordinates({type: 'C'});
            fireLogEntry('C', 'collision');
        } else {
            setCoordinates({type: input});
            fireLogEntry(input, 'info');
        }
    };

    return (
        <form data-testid="controlZone" onSubmit={handleSubmit}>
              <button
                data-testid='forward'
                onClick={() => {
                    setCommand('F');
                }}
              > F </button>
              <button
                data-testid='backward'
                onClick={() => {
                    setCommand('B');
                }}
              > B </button>
              <button
                data-testid='left'
                onClick={() => {
                    setCommand('L');
                }}
              > L </button>
              <button
                data-testid='right'
                onClick={() => {
                    setCommand('R');
                }}
              > R </button>
            </form>
    );
};

export default Input;