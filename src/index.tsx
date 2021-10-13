import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

const appContainer: HTMLElement = document.createElement('section');
appContainer.id = 'app';
document.body.appendChild(appContainer);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  appContainer
);
