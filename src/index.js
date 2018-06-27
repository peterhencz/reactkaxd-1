import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './components/Root';
import './public/favicon.ico';
import './styles/main.scss';

render(
  <AppContainer>
    <Root />
  </AppContainer>,
  document.getElementById('app'),
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default; // eslint-disable-line
    render(
      <AppContainer>
        <NewRoot />
      </AppContainer>,
      document.getElementById('app'),
    );
  });
}
