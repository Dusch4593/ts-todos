import React, { useState } from 'react';
import TodoList from './TodoList'
import { listOfTodos } from './listOfTodos'

const initialTodos: TodoProps[] = listOfTodos

const App: React.FunctionComponent = () => {
  const [todos, setTodos] = useState<TodoProps[]>(initialTodos)

  const toggleTodo: ToggleTodoProps = (selectedTodo) => {
    const updatedTodosList = todos.map(todo => {
      if(todo === selectedTodo) {
        return {
          ...todo,
          done: !todo.done
        }
      }
      return todo
    })
    
    setTodos(updatedTodosList)
  }

  return (
    <div className="App">
      <h1>Todo App!</h1>
      <TodoList todos={initialTodos} toggleTodo={toggleTodo}/>
    </div>
  );
}

export default App;
