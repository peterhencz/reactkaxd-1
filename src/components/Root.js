import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import App from './App';

const Root = ({ history }) => (
  <ConnectedRouter history={history}>
    <App />
  </ConnectedRouter>
);

export default Root;
