import React from 'react';
import {TodoList} from './TodoList'

const initialTodos = [
  {
      id: 1,
      text: "Revise Resume",
      done: true
  },
  {
      id: 2,
      text: "Laundry",
      done: false
  },
  {
      id: 3,
      text: "Dishes",
      done: false
  },

]

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <h1>Todo App!</h1>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
