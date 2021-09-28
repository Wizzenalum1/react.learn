# Learn react 
single source of truth
unidirectional flow.
## follow following table of content to use this repository
here, my headings are the deffent filenames in repo. i will describe what i did in that specific file.
each file is react application so to use each file follow following steps
change directory by :- cd fileName
install dependencies by :- npm install
and run application by :- npm start

## 1-start-react
here i only start the react by two ways.
1. apply the react features into any html project.
2. create a complete react application.
also used the classed based components and props.

## 2-setstate
here i start creating the cart app.
#### implementations
1. render element without jsx in index.js
2. Create class based and function based components with styling them? in App.js and CartItem.js.
3. Use states in application? in Cart.js
4. understand the setState() for different critical cases in CartItem.js
5. eventHandling in CartItem.js.
6. can see batching effect, shallow merging etc.
7. props in App.js [here](https://www.freecodecamp.org/news/react-props-cheatsheet/)
8. handling event and binding issue fixes in carItem.js

## 3. liftState-keylist
here i completed most of the functionalities and cart app is moslty ready.
#### implementations
 1. rendling array of elements. in Cart.js
 2. create list by map embading in JSx and outside of EJX. in cart.js
 3. we lifted the states from cartItem.js to App.js and converted the class based component into function based.
 4. conditional rendring in App.js.

## 4. lifecycle methods
here i only learning concepts only
#### implementations
1. event handling
2. conditional rendring.
3. lifecycle methods.


## 6-reduxcycle
started new application that will show movies list. user can add movies to the favorites and also see then in new panel.
1. Redux cycle(with actions, action creator, dispatch, reducers, subscribe); 

## 7-middleware-usecase
started to add the search result to the previos build of favorite movie even we can add thiese movie to our movie list. now basically this project commpleted but further we understand defferent concepts and reach to redux type code.
1. Combine two reducers and then use combineResucers() in reducedrs/index.js

2. Write middle ware to log all the dispatch action types. index.js

3. Implements the thunk and then use redux-thunk(); index.js 

## 8- connect
here we actually send the store by provider to any child component as consumer. basically here we reaching Provider and connectStatestoMap by react Context.
1. use context API in react to pass states to any deccendent component
2. create connect component.
## 9-react-redux-finishing
here i will remove connect and storecontext instead that i will use react-redux connect and Provider.
1. connect function
2. mapstatestocomponent and Provider.


## 10-higher-order-component
how to use same logics that used all over the components like tooltip effect.
1. implementing a higherorder components concept.




    