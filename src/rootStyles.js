import { css } from '@emotion/react';

const rootStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  #root {
    display: grid;
    grid-template-columns: 1fr;
    margin: 20px;

    @media (min-width: 560px) {
      grid-template-columns: 1fr 2fr;
    }
  }
`;

export default rootStyles;
