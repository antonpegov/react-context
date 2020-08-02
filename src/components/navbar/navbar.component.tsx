// Use Context in class component:

import React, { Component } from 'react';

import './navbar.component.scss';

import { AppContext } from 'context/app.context';
import { Theme } from 'shared/models/theme.enum';

interface NavbarProps {
  appName: string;
}

class Navbar extends Component<NavbarProps> {

  render() {
    return (
      <AppContext.Consumer>{(context: any) => {
        const { isLightTheme, light, dark, toggleTheme, theme } = context;
        const nextTheme = isLightTheme ? Theme.Dark : Theme.Light;

        return (
          <nav className={`Navbar ${theme}Theme`}>
            <h1>{this.props.appName}</h1>
            <ul className="Navbar-Menu">
              <li className="Navbar-MenuItem">Home</li>
              <li className="Navbar-MenuItem">About</li>
              <li className="Navbar-MenuItem" onClick={toggleTheme}>{nextTheme} Theme</li>
            </ul>
          </nav>
        )
      }}</AppContext.Consumer>
    );
  }
}

export default Navbar;