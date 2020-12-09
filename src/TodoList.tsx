import * as React from 'react'
import TodoItem from './TodoItem'
import {AddTodoForm} from './AddTodoForm'

export const TodoList = ({todos}: any) => {
    const showTodos = () => {
        return todos.map((todo: any) => {
            return <TodoItem {...todo} />
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