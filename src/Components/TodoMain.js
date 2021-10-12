import React from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

const TodoMain = () => {
    return (
        <div className = "todo-main">
            <TodoInput />
            <TodoList />
        </div>
    )
}

export default TodoMain
