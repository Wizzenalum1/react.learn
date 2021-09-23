import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon  from '@material-ui/icons/Add';

import TodoList from './TodoList';

function TodoMain() {
  const [task, setTask] = useState('');
  const [taskArray, setTaskArray] = useState([]);
  const onTaskChange = (event) => {
    setTask(event.target.value);
  }
  const addTaskToArray = () => {
    setTaskArray((prevTasks) => {
      return [...prevTasks, task];
    });
    setTask('');
  }
    return (
      <div className='main_div'>
        <div className='center_div'>
          <h1>Todo List</h1>
          <br />
          <input type="text" value={task} placeholder="Add tasks" onChange={onTaskChange}/>
          <Button className='newBtn' onClick={addTaskToArray}>
              <AddIcon />
          </Button>
          <ol>
            {
            taskArray.map((val, index) => {
              return <TodoList key={index} text={val} />
            })
          },
          </ol>
        </div>
      </div>
    );
  }key
  93328385553

  export default TodoMain;