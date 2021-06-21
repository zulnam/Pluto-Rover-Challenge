import { useContext } from "react";
import MovementContext from "../context/movementContext";

const CommandHistory = () => {
    const { items } = useContext(MovementContext);
    const history = items.slice().reverse();

    return (
      <ul data-testid='commandLog'>
        {history.map((item) => (
          <li data-testid="logEntry" key={item.id}>{item.command}</li>
        ))}
      </ul>
    );
};

export default CommandHistory;