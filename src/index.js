import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Reducer from './reducer';
import thunk from 'redux-thunk';
import { compose, applyMiddleware } from 'redux';

const store = createStore(
  Reducer,
  compose(
    applyMiddleware(thunk),
    process.env.NODE_ENV !== 'production' && window.devToolsExtension
      ? window.devToolsExtension()
      : f => f
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
