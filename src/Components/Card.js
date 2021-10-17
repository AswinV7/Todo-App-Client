import React from 'react'



const Card = ({todo , todoid, onClick}) => {

    return (
        <div className = "todo-card">
            <h3 className = "todos">{todo}</h3>
            <div className = "complete">
                <button onClick ={onClick}></button>
            </div>
        </div>
    )
}

export default Card
