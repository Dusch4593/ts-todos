import * as React from 'react'
import './TodoItem.css'

interface TodoItemProps {
  key: number
  todo: TodoProps
  toggleTodo: ToggleTodoProps
}

const TodoItem = ({todo, toggleTodo}: TodoItemProps) => {
  
  const todoInfo: string = `${todo.id}. ${todo.text}`

  // excellent example of using union types!
  const strikethrough: string | undefined = todo.done ? "strikethrough" : undefined
  
  return (
    <div>
      <label className={strikethrough}>
        <input type="checkbox" onChange={() => toggleTodo(todo)} checked={todo.done} />
        {todoInfo}
      </label> 
      <br/>
    </div>
  )
}

export default TodoItem
