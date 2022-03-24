import { useContext } from 'react';
import MovementContext from '../../context/movementContext';
import ActivityLogContainer from './components/ActivityLogContainer/ActivityLogContainer';

const ActivityLog = () => {
  const { items } = useContext(MovementContext);
  const history = items.slice().reverse();

  return (
    <ActivityLogContainer>
      <ul data-testid="commandLog">
        {history.map((item) => (
          <li data-testid="logEntry" key={item.id}>
            {item.command}
          </li>
        ))}
      </ul>
    </ActivityLogContainer>
  );
};

export default ActivityLog;
