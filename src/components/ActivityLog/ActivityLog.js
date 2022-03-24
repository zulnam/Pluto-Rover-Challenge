import { useContext } from 'react';
import styled from '@emotion/styled';
import MovementContext from '../../context/movementContext';
import theme from '../../styling/theme';

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
  height: 200px;

  ul {
    list-style-type: none;
    padding: 0;

    & li:first-of-type {
      background-color: ${theme.colors.lightTurqoise};
      opacity: 1;
    }

    li {
      opacity: 0.6;
    }

    & li:nth-of-type(8) {
      opacity: 0.4;
    }

    & li:nth-of-type(9) {
      opacity: 0.3;
    }

    & li:nth-of-type(10) {
      opacity: 0.2;
    }
  }

  @media (min-width: ${theme.breakpoints.md}) {
    text-align: left;
    padding: 32px;
  }
`;

export default ActivityLog;
