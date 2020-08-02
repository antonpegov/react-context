import React from 'react';

import AppContextProvider from 'context/app.context';

import Navbar from 'components/navbar/navbar.component';
import Todo from 'components/todo/todo.component';

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <Navbar appName="Context API" />
        <Todo />
      </AppContextProvider>
    </div>
  );
}

export default App;
