import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const middleware = [
  routerMiddleware(browserHistory),
  sagaMiddleware,
];

// mount it on the Store
const Store = createStore(rootReducer, {}, applyMiddleware(...middleware));

// then run the saga
sagaMiddleware.run(rootSaga);

export default Store;
