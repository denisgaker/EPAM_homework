import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

const appContainer: HTMLElement = document.createElement('section');
appContainer.id = 'app';
document.body.appendChild(appContainer);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  appContainer
);
