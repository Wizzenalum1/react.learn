import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import './index.css';
import App from './components/App';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

const store = createStore(rootReducer,applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode> 
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);