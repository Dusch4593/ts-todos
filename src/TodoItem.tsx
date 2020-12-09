import * as React from 'react'

interface TodoProps {
  id: number
  text: string
  done: boolean
}

const TodoItem: React.FunctionComponent<TodoProps> = (todo) => {
  return <><label><input type="checkbox" checked={todo.done}/>{todo.id}. {todo.text}</label> <br/></>
}

export default TodoItem
