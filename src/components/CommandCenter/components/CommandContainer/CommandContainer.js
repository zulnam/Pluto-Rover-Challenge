import styled from '@emotion/styled';

const CommandContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.1fr 0.8fr 0.2fr;
  gap: 0px 20px;

  h3 {
    text-align: center;
    grid-column: 1 / span 4;
  }

  button {
    border-radius: 8px;
    height: 32px;
    align-self: center;
    justify-self: center;
  }
`;

export default CommandContainer;
