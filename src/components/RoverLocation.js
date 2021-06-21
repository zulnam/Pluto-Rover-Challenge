import { useContext } from "react";
import MovementContext from "../context/movementContext";

const RoverLocation = () => {
    const { coordinates } = useContext(MovementContext);
    
    return (
        <>
            <h3>Rover Position</h3>
            <div className="roverPositionContainer">
                <p>Y</p><p>X</p><p>Orientation</p>
                <p data-testid='Yposition' >{coordinates.Y}</p>
                <p data-testid='Xposition' >{coordinates.X}</p>
                <p data-testid='currentOrientation' >{coordinates.orientation}</p>
            </div>
        </>
    );
};

export default RoverLocation;