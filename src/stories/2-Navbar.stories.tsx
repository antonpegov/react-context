import React from 'react';

import Navbar from "components/navbar/navbar.component";

export default {
  title: 'Navbar',
  component: Navbar,
}

export const Normal = () => <Navbar appName="Test appName"></Navbar>;
