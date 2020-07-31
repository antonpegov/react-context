import React, { Component } from 'react';

import { ThemeContext } from 'context/theme.context';

interface NavbarProps {
  appName: string;
}

class Navbar extends Component<NavbarProps> {

  render() {
    return (
      <ThemeContext.Consumer>{(context: any) => {
        const { isLightTheme, light, dark } = context;
        const theme = isLightTheme ? light : dark;
        return (
          <nav style={{ background: theme.ui, color: theme.syntax }}>
            <h1>{this.props.appName}</h1>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        )
      }}</ThemeContext.Consumer>
    );
  }
}

export default Navbar;