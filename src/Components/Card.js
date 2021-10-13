import React from 'react'



const Card = ({todo , todoid}) => {

    return (
        <div className = "todo-card">
            <h3 className = "todos">{todo}</h3>
            <div className = "complete">
                <button></button>
            </div>
        </div>
    )
}

export default Card
