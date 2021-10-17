import React from 'react'
import { useEffect, useContext } from 'react'
import { TodoContext } from '../Contexts/TodoContext'
import API_url from '../Services/API_url'
import deleteData from '../Services/deleteData'
import Card from './Card'

const TodoList = () => {

    const {todos, setTodos, todoTask} = useContext( TodoContext )
    
    useEffect(() => {
        console.log("i am running");
        fetch(API_url + '/todos')
        .then(res => res.json())
        .then(result => setTodos(result))
    }, [todoTask])

    const deleteTodo = (id) => {
        deleteData('/todos', {id})
        fetch(API_url + '/todos')
        .then(res => res.json())
        .then(result => setTodos(result))
    }

    

    return (
        <div className = "todo-list">
            {todos.map((todo) => <Card key = {todo._id} todo = {todo.todoTask} todoid = {todo._id} onClick={()=>{deleteTodo(todo._id)}} />) }
        </div>
       
    )
}

export default TodoList
