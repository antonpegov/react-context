import * as React from 'react';

export interface ToDoListProps {
  
}
 
export interface ToDoListState {
  
}
 
class ToDoList extends React.Component<ToDoListProps, ToDoListState> {
  
  render() { 
    return (
      <ul>
        <li>Wash up</li>
        <li>Go to run</li>
        <li>Take breakfast</li>
      </ul>
    );
  }
}
 
export default ToDoList;