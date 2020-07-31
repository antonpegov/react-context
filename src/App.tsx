import React from 'react';

import Navbar from 'components/navbar/navbar.component';
import ToDoList from 'components/todo-list/todo-list.component';
import ThemeContextProvider from 'context/theme.context';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar appName="Context API" />
        <ToDoList />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
