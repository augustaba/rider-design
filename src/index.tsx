import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './global.scss';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.querySelector('#root'),
);
