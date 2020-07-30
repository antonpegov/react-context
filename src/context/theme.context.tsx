import React, { Component, createContext } from 'react';

const state = {
  isLightTheme: true,
  light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
  dark: { syntax: '#ddd', ui: '#333', bg: '#555'}
}

export const ThemeContext = createContext({...state, toggleTheme: () => {}});

class ThemeContextProvider extends Component {
  state = state;

  toggleTheme= () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
  }

  render() { 
    return (
      <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
 
export default ThemeContextProvider;