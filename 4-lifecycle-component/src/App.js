import React from 'react';
import Child from './Child'
// here we will learn methods that used in lifecycle(mounting, update,unmounting) of a component
// mounting methods
/* we have 2 ways of mounting a component 1. function based 2. class based component 
  methods in class based componentes
  1. constructor: calls at first then 
  2. render only required method that is pure function and used to define UI
  3. componentDidMount:- called only once, used to listen data, start timer or setting event listner.

*/

// methods to updating 
/* 
  1. componentDidUpdate called as component updates, usecase is "swithing between persons profile".   
*/
// methods to unmount
/* 
  1. componentWillUnmount called as one component is removed, basically cleanup is done here use case "removeing timer, eventlistners, cancel api calls"
*/
// rare life cycle methods
/* 
getDerivedStateFromProps:  static method dont have excess to this and return new state 
shouldComponentUpdate: whether or not update components on the change of state and props
getSnapshotBeforeUpdate: 
 */


// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }
class App extends React.Component{
  constructor(){
    super();
    this.state={
      count:0
    }
    console.log('Constructor')
  }
  componentDidMount(){
    // this only called once at.
    // used to set up the event listners.
    this.setState({count:2});
    this.setState((prev)=>{return {count:prev.count+1}});
    console.log("componentDid monut");
  }

  componentDidUpdate( prevProps,prevState){
    console.log("componente did upddate",prevProps,prevState,this.props,this.state)
    // if(prevState.count === 0 && this.state.count ===1){
    //   this.setState({count:100})
    // }

  }

  handleClick = ()=>{
    this.setState({count:5});
    this.setState((prevCount)=>{
      return {
        count:prevCount.count+1
      }
    })
  }

  render(){
    //this.setSate wont work;
    console.log("render");
    return(
      <div classsName="App">
        <div className="counter" 
            style={counterStyle}
            onClick={this.handleClick}>
          <span>curretnt state :: </span><span id="count">{this.state.count} </span>
        </div>
        <div style={{marginLeft:'calc(50vw - 200px)'}}>
          <button onClick={this.handleClick} style={counterStyle}>inc count</button>
        </div>
        <h1>condidtional rendring see Child.js</h1>
        <Child/>
      </div>
    )
  }
}
const counterStyle = {
  width:'400px',
  padding:'30px',
  boxShadow: '0px 0px 2px 2px gray',
  margin:'10vh auto',
  fontSize:'2em',
  textAlign:'center'
}

export default App;
