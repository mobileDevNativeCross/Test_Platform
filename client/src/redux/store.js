/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

// Centralized application state
// For more information visit http://redux.js.org/
// For more information about devtools visit https://github.com/zalmoxisus/redux-devtools-extension#usage
import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import * as reducers from './reducers';
import { fetchPostUser, fetchGetPage } from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers(reducers);
const logger = createLogger({
  collapsed: true,
  diff: true,
  duration: true,
  timestamp: false,
});
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, sagaMiddleware)),
);

sagaMiddleware.run(fetchPostUser);
sagaMiddleware.run(fetchGetPage);

export default store;
