import React, { useState } from 'react';
import { v4 as id } from 'uuid';


const ToDoList = () => {
  const [toDos, setToDos] = useState([
    { id: '1', name: 'Wake up' },
    { id: '2', name: 'Go to run' },
    { id: '3', name: 'Take breakfast' },
  ])

  const addToDo = () => {
    setToDos([...toDos, { id: id(), name: 'Do something' }]);
  }

  return (
    <>
      <ul>
        {toDos.map((toDo: any) => <li key={toDo.id}>{toDo.name}</li>)}
      </ul>

      <form onSubmit={addToDo}>
        <label htmlFor="">New ToDo:</label>
        <input type="text" required />
        <input type="submit" />
      </form>
      {/* <button onClick={addToDo}>Add</button> */}
    </>
  );
}

export default ToDoList;