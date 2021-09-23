import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const name = 'ghanshyam'
  let loading = false;
  const isLogedIn = true;
  if(loading) {
    window.addEventListener('load',function(){
      loading = false;
      App();
    })
    return "loading"
  }
  else{
    return (
    // we cannot return more than one two elements
    // to do so you can wrap all componenets into div or use react fragment
    <React.Fragment>
      <h1>hey there</h1>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {!isLogedIn && "hello world"}
            {isLogedIn && "hello"+name}
            todays date is {new Date().toDateString()}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      </React.Fragment>
    );

  }
}

export default App;
