/* eslint-disable react/prop-types */
import {useState} from 'react'
let counter = 3
function Todos(){
    const [todo,setTodo] = useState([
        {
            id:0,
            tittle:"Go to Gym",
            description:"At 7 o'clock"
        },
        {
            id:1,
            tittle:"Go to Market",
            description:"At 7 o'clock"
        },
        {
            id:2,
            tittle:"Go to College",
            description:"At 7 o'clock"
        }
    ])

    function AddTodo(){
        setTodo([...todo,{
            id:counter++,
            tittle: Math.random(),
            description: Math.random()
        }])
    }



    return(
        <>
            <button onClick={AddTodo}>Add Todo</button>
            {todo.map(function(todo){
                return(
                    <Todo tittle={todo.tittle} key={todo.id} description={todo.description} ></Todo>
                )
            })}
        </>

    )

    function Todo({tittle,description}){
        return(
            <>
                <h3>{tittle}</h3>
                <h4>{description}</h4>
            </>
        )
    }
}

export default Todos