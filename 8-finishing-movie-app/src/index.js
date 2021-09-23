import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';

import './index.css';
import App from './components/App';
import rootReducer from './reducers';

import thunk from 'redux-thunk'

// middle ware logger can be written as 
const logger = ({dispatch,getstate})=>(next)=>(action)=>{
        // if(typeof action !=='function') console.log('ACTION_TYPE',action.type);
        next(action);
}


const store = createStore(rootReducer,applyMiddleware(logger,thunk));
// store.dispatch({
//   type:"ADD_MOVIES",
//   movies:[{name:"supername"}]
// });
// this code remove the wrapeer classes used to pass the store in defferent Compenents



// creating react context to share data b/w all the components.
export const StoreContext = createContext();
// method 1 wrap the App in StoreContext.Provider
//method 2 create following class
class Provider extends React.Component{
  render(){
    const {store} = this.props;
    return (
    <StoreContext.Provider value={store}>
        {this.props.children}
    </StoreContext.Provider>
    )
  }
}



export  function connect (callback){
  
 return function(Component){
    class ConnectedComponent extends React.Component{
      // below commented code is unusefull because we try to subscribe the connected
      // component but problem is that we cant because we dont have direct access to store so 
      // i have to write a class wrapper so below code make sence.
      constructor (props){
        super(props);
        this.usubscribe = this.props.store.subscribe(()=>this.forceUpdate());
      }
      componentWillUnmount(){
        this.unsubscribe();
      }
      render(){
        const state = this.props.store.getState();
        const dataToBeSent = callback(state);
        const dispatch = this.props.store.dispatch;
        return (
          // as we created the wrapper arroud this class so we dont need following 6 lines.
          // <StoreContext.Consumer>
          //     {(store) =>{
          //       const state = store.getState();
          //       const dataToBeSent = callback(state);
          //       return  <Compenent {...dataToBeSent} dispatch={store.dispatch}/>
          //     }}
          //   </StoreContext.Consumer>
          <Component {...dataToBeSent} dispatch={dispatch}/>
        )
      }
    }
    class ConnectedComponentWrapper extends React.Component{
      render(){
        return(
          <StoreContext.Consumer>
            {(store)=>{
              return <ConnectedComponent store={store}/>
            }}
          </StoreContext.Consumer>
        )
      }
    }
    return ConnectedComponentWrapper;
  }
}



ReactDOM.render(
  <React.StrictMode> 
    <Provider store={store}>
      <App/>

    </Provider>
    {/* <StoreContext.Provider value = {store}>
    <App  store={store}/>
    </StoreContext.Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
