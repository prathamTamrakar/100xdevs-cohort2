import { useState } from "react";

export default function FunctionBasedCompo(){
    const [count,setCount] = useState(0)

    return(
        <div>
            <p>{count}</p>
            <button onClick={()=>{
                setCount(count+1)
            }}>Increment</button>
        </div>
    )
}