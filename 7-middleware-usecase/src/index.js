import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';

import './index.css';
import App from './components/App';
import rootReducer from './reducers';

import thunk from 'redux-thunk'

// middle ware 
// this called as logger(obj)(next)(action); is done internally. where next is another middleware or dispatch.
// const logger = function({dispatch,getstate}){
//     return function(next){
//       return function(action){
//         // middleware code
//         console.log('ACTION_TYPE',action.type);
//         next(action);
//       }
//     }
// }

// logger can be written as 
// const logger = ({dispatch,getstate})=>(next)=>(action)=>{
//         // if(typeof action !=='function') console.log('ACTION_TYPE',action.type);
//         next(action);
// }

// //middle war
// we do not need to write this middelware because we have redux-thunk
// const thunk = ({dispatch,getState}) => (next) =>(action)=>{
//   if(typeof action==='function'){
//     action(dispatch);
//     return;
//   }
//   next(action);
// }

const store = createStore(rootReducer,applyMiddleware(thunk));
// console.log("store is created",store);
// console.log('store',store);
// console.log('bfore state',store.getState());

// store.dispatch({
//   type:"ADD_MOVIES",
//   movies:[{name:"supername"}]
// });
// console.log('after state',store.getState());

ReactDOM.render(
  <React.StrictMode> 
    <App  store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);
