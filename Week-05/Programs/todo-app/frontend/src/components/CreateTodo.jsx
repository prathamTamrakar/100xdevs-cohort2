import { useState } from "react"

/* eslint-disable no-unused-vars */
export function CreateTodo(){

    // react-query
    const [tittle,setTittle] = useState("")
    const [description,setDescription] = useState('')

    return(
        <div>
            <input style={{
                padding: 10,
                margin: 10
            }} type="text" placeholder="tittle" onChange={function(e){
                setTittle(e.target.value)
            }}/> <br />
            <input style={{
                padding: 10,
                margin: 10
            }} type="text" placeholder="description" onChange={function(e){
                setDescription(e.target.value)
            }}/> <br />

            <input style={{
                padding: 3,
                margin: 10
            }} type="submit" value="Add todo" onClick={()=>{
                fetch('http://localhost:3000/todo',{
                    method: "POST",
                    body:JSON.stringify({
                        tittle: tittle,
                        description: description
                    }),
                    headers:{
                        "content-type": "application/json"
                    }
                }).then(async function(res){
                    const json = await res.json()
                    alert("Todo added")
                })
            }}/>
        </div>
    )
}