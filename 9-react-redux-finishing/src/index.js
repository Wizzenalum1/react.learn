import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import './index.css';
import App from './components/App';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

// here you can see there is concept redux(store) and concept of the react(connect,provider,consumer)
// for those we created much code we can do one thing that is just use react-redux to ot type these for ever




const store = createStore(rootReducer,applyMiddleware(thunk));

// creating react context to pass the states to all diccendent components.
// export const StoreContext = createContext();

// class Provider extends React.Component{
//   render(){
//     const {store} = this.props;
//     return (
//     <StoreContext.Provider value={store}>
//       {/* following line will render the all the children of the Provider function */}
//         {this.props.children}  
//     </StoreContext.Provider>
//     )
//   }
// }
ReactDOM.render(
  <React.StrictMode> 
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



// export  function connect (callback){
//  return function(Component){
//     class ConnectedComponent extends React.Component{
//           constructor (props){
//         super(props);
//         this.usubscribe = this.props.store.subscribe(()=>{this.forceUpdate()});
//       }
//       componentWillUnmount(){
//         this.unsubscribe();
//       }
//       render(){
//         const state = this.props.store.getState();
//         const dataToBeSent = callback(state);
//         const dispatch = this.props.store.dispatch;
//         return (
//          <Component {...dataToBeSent} dispatch={dispatch}/>
//         )
//       }
//     }
//     class ConnectedComponentWrapper extends React.Component{
//       render(){
//         return(
//           <StoreContext.Consumer>
//             {(store)=>{
//               return <ConnectedComponent store={store}/>
//             }}
//           </StoreContext.Consumer>
//         )
//       }
//     }
//     return ConnectedComponentWrapper;
//   }
// }
