import { useContext } from 'react';
import styled from '@emotion/styled';
import MovementContext from '../../context/movementContext';

const ActivityLog = () => {
  const { items } = useContext(MovementContext);
  const history = items.slice().reverse();

  return (
    <CommandHistoryContainer>
      <ul data-testid="commandLog">
        {history.map((item) => (
          <li data-testid="logEntry" key={item.id}>
            {item.command}
          </li>
        ))}
      </ul>
    </CommandHistoryContainer>
  );
};

const CommandHistoryContainer = styled.div`
  text-align: center;

  ul {
    list-style-type: none;
    padding: 0;

    & li:first-of-type {
      background-color: aquamarine;
      opacity: 1;
    }

    li {
      opacity: 0.5;
    }
  }

  @media (min-width: 560px) {
    text-align: left;
    padding: 32px;
  }
`;

export default ActivityLog;
