import React from 'react'
import { useState,useEffect } from 'react'
import API_url from '../Services/API_url'
import Card from './Card'

const TodoList = () => {

    const [todos, setTodos] = useState([])
    
    useEffect(() => {
        fetch(API_url + '/todos')
        .then(res => res.json())
        .then(result => setTodos(result))
    }, [])


    return (
        <div className = "todo-list">
            {todos.map((todo) => <Card key = {todo._id} todo = {todo.todoTask} todoid = {todo._id} />) }
        </div>
       
    )
}

export default TodoList
