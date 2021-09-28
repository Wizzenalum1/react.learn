import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addTask} from '../actions/index';

class Taskbar extends Component {
    render() {
        return (
            <div>
                <input type="text" placeholder='add new task' ref='task' />
                <button onClick={() => this.props.addTask(this.refs.task.value)}>Add The Task</button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({addTask}, dispatch);
}

export default connect(() => {}, mapDispatchToProps)(Taskbar);
