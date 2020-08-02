// Use Context in functional component:

import React, { useState, useEffect, useContext } from 'react';
import { v4 as id } from 'uuid';

import './todo.component.scss';

import { ToDo } from 'shared/models/todo.model';
import AddTodo from 'components/add-todo/add-todo.component';
import { AppContext } from 'context/app.context';

const Todo = () => {
  const [toDos, setToDos] = useState<ToDo[]>([
    { id: '1', name: 'Wake up' },
    { id: '2', name: 'Go to run' },
    { id: '3', name: 'Take breakfast' },
  ]);

  const addToDo = (name: string) => {
    setToDos([...toDos, { id: id(), name }]);
  };

  const { theme } = useContext(AppContext);

  useEffect(() => {
    console.log('UseEffect', toDos)
  }, [toDos]);

  return (
    <div className={`Todo ${theme}Theme`}>
      <ul className="Todo-List">
        {toDos.map((toDo: any) => <li key={toDo.id} className="Todo-ListItem">{toDo.name}</li>)}
      </ul>

      <AddTodo addTodo={addToDo} />
    </div>
  );
}

export default Todo;