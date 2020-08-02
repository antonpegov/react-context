import React from 'react';
import { action } from "@storybook/addon-actions";

import AddTodo from "components/add-todo/add-todo.component";


export default {
  title: 'AddToDo',
  component: AddTodo,
}

export const Component = () => <AddTodo addTodo={action('AddTodo')}></AddTodo >
