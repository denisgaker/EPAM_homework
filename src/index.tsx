import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store';
// import { createStore } from 'redux';

const appContainer: HTMLElement = document.createElement('section');
appContainer.id = 'app';
document.body.appendChild(appContainer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  appContainer
);
