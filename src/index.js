import React from 'react';
import ReactDOM from 'react-dom';
import { Global } from '@emotion/react';
import rootStyles from './rootStyles';
import App from '../src/components/App';

ReactDOM.render(
  <React.StrictMode>
    <Global styles={rootStyles} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
