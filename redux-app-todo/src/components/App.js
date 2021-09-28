import React, {Component} from 'react';
import Header from './Header';
import Taskbar from './Taskbar';
import TaskList from './TaskList';

export default class App extends Component {
  render(){
    return (
      <div className="App">
        <Header />
        <Taskbar />
        <TaskList />
      </div>
    ); 
  }
}

