import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import {createStore} from 'redux';
import { product } from './reducers';
import { Provider } from 'react-redux'


const store = createStore(product);
console.log(store);


ReactDOM.render(
  <Provider>
    <React.StrictMode>
        <App/>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

