import React from 'react'
import { useHistory } from 'react-router'

const Overview = () => {

    const history = useHistory()

    return (
        <div className = "overview">
            <h1>WELCOME</h1>
            <p>Your Key For An Effective Way To Accomplish Your Goals</p>
            <button onClick = {() => {history.push("/todos")}}>CONTINUE</button>
        </div>
    )
}

export default Overview
