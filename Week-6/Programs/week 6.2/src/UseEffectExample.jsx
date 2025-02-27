/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios"

function UseEffectExample() {
    const [inputId, setInputId] = useState(0);

    return (
        <>
            <p>Component that takes Todo id as an input and fetches the todo details from the server and displays it.</p>

            <label htmlFor="todoId">Enter Todo ID less than 6: </label>
            <input
                type="text"
                id="todoId"
                onChange={(e) => setInputId(e.target.value)}
            />

            <Todo id={inputId} />
        </>
    )
    function Todo({ id }) {
        const [todo, setTodo] = useState({})
        useEffect(() => {
            if (id <= 5 && id > 0) {
                axios.get(`http://localhost:8080/todo?id=${id}`)
                    .then(function (res) {
                        setTodo(res.data.todoss)
                    })
            } else {
                setTodo({
                    title: 'Invalid ID',
                    description: 'Please enter a valid ID'
                })
            }
        }, [id])
        return (
            <>
                <h3>{todo.title}</h3>
                <h4>{todo.description}</h4>
            </>
        )
    }

}


export default UseEffectExample;