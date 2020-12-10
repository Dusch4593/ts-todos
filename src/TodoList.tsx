import * as React from 'react'
import TodoItem from './TodoItem'
import {AddTodoForm} from './AddTodoForm'

interface TodoListProps {
    todos: Array<TodoProps>
    toggleTodo: ToggleTodoProps
}

const TodoList = ({todos, toggleTodo}: TodoListProps) => {
    
    const showTodos = () => {
        return todos.map((todo: TodoProps) => {
            return <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo}/>
        })
    }
    return (
        <div>
            {showTodos()}
            <br/>
            <AddTodoForm />         
        </div>
        
    )
}

export default TodoList