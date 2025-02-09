
import { useState } from "react"

function todos() {
    const [todos, setTodos] = useState([{
        tittle: "Go to gym",
        description: "Go to gym from 7-9pm",
        completed: false
    }, {
        tittle: "study DSA",
        description: "study DSA from 7-9pm",
        completed: false
    }])


    return (
        <div>
            {/* {JSON.stringify(todos)} */}
            <Todo tittle={todos[0].tittle} description={todos[0].description} ></Todo>
            <Todo tittle={todos[1].tittle} description={todos[1].description} ></Todo>

            {todos.map((todo) => {
                return (
                    <div>
                        <Todo tittle={todo.tittle} description={todo.description}></Todo>
                    </div>
                )
            })}
        </div>
    )

    function Todo(props) {
        return (
            <div>
                <h1>{props.tittle}</h1>
                <h2>{props.description}</h2>
            </div>
        )
    }
}
export default todos