import { css } from '@emotion/react';

const rootStyles = css`
  body {
    margin: 0;
    font-family: 'Roboto', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.2fr 1fr 1fr;
    grid-auto-flow: column;
    padding: 10px;

    @media (min-width: 560px) {
      grid-template-columns: 1fr 2fr;
      grid-template-rows: 0.2fr 1fr;
      padding: 20px;
    }
  }
`;

export default rootStyles;
