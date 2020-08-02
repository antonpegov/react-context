import React from 'react';

import './todo-item.component.scss';
import { ToDo } from 'shared/models/todo.model';

interface TodoItemProps {
  todo: ToDo
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {

  return (<div className="TodoItem">{todo.name}</div>);
}

export default TodoItem;