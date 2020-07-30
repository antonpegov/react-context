import React from 'react';
import Navbar from './components/navbar/navbar.component';
import ToDoList from './components/todo-list/todo-list.component';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ToDoList/>
    </div>
  );
}

export default App;
