import React from 'react';
function TodoList(props) {
    return (
      <div>
       <li>{props.text}</li>
      </div>
    );
  }

  export default TodoList;