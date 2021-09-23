import React, { Component } from 'react';
// function based component
const Heading = function(props){
  return (
    <h1 style={myStyle.styleHeading}>{props.msg}</h1>
  )
}

// class based compoents
export class App extends Component {
  constructor(props) {
    super(props);
  // state always declare in construction
    this.state = {
      time: '',
    };
  }
  componentDidMount() {
    setInterval(() => {
      const time = new Date().toLocaleTimeString();
      console.log('1000');
      this.setState({ time: time });
    }, 1000);
  }

  render() {
    return (
      <div style={myStyle.styleDiv}>
        <Heading msg={"time is runnig"}/>
        {this.state.time}
      </div>
    );
  }
}

// here i am definnnig the styles for elemnts
let myStyle = {
    styleHeading:{
        color:"red",
        fontSize:"2rem"
  },
  styleDiv:{
    padding:"30px",
    border:"3px solid blue"
  }
}

export default App;
