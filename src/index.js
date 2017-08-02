/* eslint-disable no-underscore-dangle */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducers from './reducers/index';

import './index.css';
import App from './App';

ReactDOM.render(
  <Provider
    store={createStore(
      rootReducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )} >
    <App />
  </Provider>,
   document.getElementById('root')
);
/* eslint-enable */
