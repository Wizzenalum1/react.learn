import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';

import './index.css';
import App from './components/App';
import rootReducer from './reducers';

import thunk from 'redux-thunk'


const store = createStore(rootReducer,applyMiddleware(thunk));

// creating react context to pass the states to all diccendent components.
export const StoreContext = createContext();
// // method 1 wrap the App in StoreContext.Provider and we access the store
// // in any deccendent component by store.context.Consumer property.
// ReactDOM.render(
//   <React.StrictMode> 
//     <StoreContext.Provider value = {store}>
//     <App  store={store}/>
//     </StoreContext.Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

//method 2 create provider class from there pass.
class Provider extends React.Component{
  render(){
    const {store} = this.props;
    return (
    <StoreContext.Provider value={store}>
      {/* following line will render the all the children of the Provider function */}
        {this.props.children}  
    </StoreContext.Provider>
    )
  }
}
ReactDOM.render(
  <React.StrictMode> 
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



// to see how i to use passed value like store to Provider in children components, then see way 1 in Stats.js and way 2 in App.js.
// way 3 using connect concept which create a function to wrap the classes so we dont have to wrap them. 
export  function connect (callback){
 return function(Component){
    class ConnectedComponent extends React.Component{
      // below commented code is unusefull because we try to subscribe the connected
      // component but problem is that we cant because we dont have direct access to store so 
      // i have to write a class wrapper so below code make sence.
      constructor (props){
        super(props);
        this.usubscribe = this.props.store.subscribe(()=>{this.forceUpdate()});
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
