
/* eslint-disable react/prop-types */

// UseEffect is a hook that allows you to perform side effects in function components. 
// It is similar to componentDidMount, componentDidUpdate, and componentWillUnmount in class components. 
// It is used to fetch data from the server, update the DOM, and perform other side effects.


import { useState, useEffect } from "react";

function UseEffectExample() {
    const [todos, setTodos] = useState([]);

    // we cant use async in the useEffect 
    // useAsyncEffect
    useEffect(() => {
        setInterval(() => {
            fetch("http://localhost:8080/todos")
                .then(async function (res) {
                    const json = await res.json();
                    setTodos(json.todos)
                })
        }, 100)
    }, [])

    return (
        <>
            {todos.map((todo) => {
                return (
                    <Todo title={todo.title} description={todo.description} key={todo.id} ></Todo>
                )
            }
            )}
        </>
    )

    function Todo({ title, description }) {
        return (
            <>
                <h3>{title}</h3>
                <h4>{description}</h4>
            </>
        )
    }

}
export default UseEffectExample;