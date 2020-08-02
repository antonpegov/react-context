import React, { FormEvent } from 'react';

import './add-todo.component.scss';

import { AppContext } from 'context/app.context';

export interface AddTodoProps {
  addTodo: Function,
}

const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
  const input = React.createRef<HTMLInputElement>();

  return (
    <AppContext.Consumer>{(context: any) => {
      const handleAddTodo = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addTodo(input?.current?.value);
      };

      return (
        <form onSubmit={handleAddTodo} >
          <label htmlFor="">New ToDo:</label>
          <input type="text" name="todo" ref={input} required />
          <input type="submit" />
        </form>
      )
    }}</AppContext.Consumer>
  )
}

export default AddTodo;