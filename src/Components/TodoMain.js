import React, { useState } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

import { TodoContext } from '../Contexts/TodoContext'

const TodoMain = () => {

    const [todos, setTodos] = useState([])
    const [todoTask, setTodoTask] = useState("")

    return (
        <div className = "todo-main">
            <TodoContext.Provider value={{todos, setTodos, todoTask, setTodoTask}} >
                <TodoInput />
                <TodoList />
            </TodoContext.Provider>
        </div>
    )
}

export default TodoMain
