import { useContext } from 'react';
import styled from '@emotion/styled';
import MovementContext from '../context/movementContext';

const CommandHistory = () => {
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
  ul {
    list-style-type: none;

    & :first-child {
      background-color: aquamarine;
      opacity: 1;
    }

    li {
      opacity: 0.5;
    }
  }
`;

export default CommandHistory;
