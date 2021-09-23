import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// // 1. render without jsx
// const element = React.createElement(
//   "h1",
//   {className:"hello",
//   id:"hi"},
//   'hello this what we like'
// );
// const root = document.getElementById("root");
// ReactDOM.render(element,root);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);