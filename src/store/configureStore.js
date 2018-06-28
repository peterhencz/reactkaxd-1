import 'babel-polyfill';
import { createStore, compose, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from 'reducers';

export const history = createHistory();

function configureDevStore(initialState) {
  const reactRouterMiddleware = routerMiddleware(history);

  const middlewares = [
    reactRouterMiddleware,
  ];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(...middlewares),
    ),
  );

  /*
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }
  */
  return store;
}

const configureStore = configureDevStore;

export default configureStore;
