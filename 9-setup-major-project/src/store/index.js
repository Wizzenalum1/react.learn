import { createStore, applyMiddleware } from 'redux';
import thunk from 'react-thunk';
import reducer from '../reducers';

import logger from 'redux-logger';

let store;

export function configureStore() {
  store = createStore(reducer, applyMiddleware(thunk));
  return store;
}
