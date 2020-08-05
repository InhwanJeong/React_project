import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { Router } from "react-router-dom";

import histroy from "./history";
import store from "./state/store";
import App from './views/routes';
import './index.css';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store = {store}>
    <Router histroy={histroy}>
      <App/>
    </Router>
  </Provider>,    
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
