import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from '@components/App/App';
import '@style/index.scss';
import { store } from '@store/index';
import { createHistory, LocationProvider } from '@reach/router';
import { Analytics } from '@vercel/analytics/react';

ReactDOM.render(
  <React.StrictMode>
    <Analytics />
    <LocationProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </LocationProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
