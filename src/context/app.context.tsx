import React, { Component, createContext } from 'react';

import { Theme } from 'shared/models/theme.enum';

const state = {
  isLightTheme: true,
  theme: Theme.Light,
}

const methods = {
  toggleTheme: () => { },
  addTodo: (s: string) => { }
}

export const AppContext = createContext({ ...state, ...methods });

class AppContextProvider extends Component {
  state = state;

  toggleTheme = () => {
    this.setState({
      isLightTheme: !this.state.isLightTheme,
      theme: this.state.isLightTheme ? Theme.Dark : Theme.Light,
    });
  }

  addTodo = (todo: string) => {
    console.log(todo);
  }

  render() {
    return (
      <AppContext.Provider value={{ ...this.state, toggleTheme: this.toggleTheme, addTodo: this.addTodo }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppContextProvider;
