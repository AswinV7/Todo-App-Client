import React from 'react'
import { useContext } from 'react'
import postData from '../Services/postData'
import {TodoContext} from '../Contexts/TodoContext'

const TodoInput = () => {

    const { todoTask, setTodoTask } = useContext(TodoContext);
   

    const todoCall = (e) => {
        e.preventDefault()
        const data = {
            todoTask: todoTask
        }
        postData('/todos', data)
        setTodoTask("")
    }

    return (
        <div className = "todo-input">
            <h1>What's Todays Plan ... ?</h1>
            <form className = "todo-form" onSubmit = {todoCall} >
                <label htmlFor = "todo-task">
                    <input type = "text" name = "todo-task" value = {todoTask} placeholder = "Enter Here" onChange = {(e) => {setTodoTask(e.target.value)}} />
                    <button type = "submit">Add</button>
                </label>
            </form>
        </div>
    )
}

export default TodoInput
