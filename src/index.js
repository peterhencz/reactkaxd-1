import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './components/Root';
import { history } from 'store/configureStore';
import './public/favicon.ico';
import './styles/main.scss';

render(
  <AppContainer>
    <Root history={history} />
  </AppContainer>,
  document.getElementById('app'),
);
