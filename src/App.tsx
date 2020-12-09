import * as React from 'react';
import {TodoList} from './TodoList'

function App() {
  const todos = [
    {
        id: 1,
        text: "Revise Resume",
        done: false
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

  return (
    <div className="App">
      <h1>Todo App!</h1>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
