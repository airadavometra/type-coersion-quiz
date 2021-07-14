import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from '@components/App/App';
import '@style/index.scss';
import { store } from '@store/index';
import { worker } from '@mocks/browser';
import '@api/init';

if (import.meta.env.DEV) {
  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
