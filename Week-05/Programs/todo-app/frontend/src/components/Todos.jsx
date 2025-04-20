/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

export function Todos({todos}){
    return(
        <div>
            {todos.map(function(todo){
                return(
                    <div>
                        <h3>{todo.tittle}</h3>
                        <h4>{todo.description}</h4>
                        <button>{todo.completed==true ? "Completed" : "Mark as Complete"}</button>
                    </div>
                )
            })}
        </div>
    )
}