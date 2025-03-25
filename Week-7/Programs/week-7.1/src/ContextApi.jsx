import { useContext, useState } from "react"
import { CountContext } from "./Context";


export default function ContextApi(){
    const [count,setCount] = useState(0);

    return(
        <div>
            <CountContext.Provider value={count}>
            <Count setCount={setCount} />   
            </CountContext.Provider>
        </div>
    )
}

function Count({setCount}){
    return(
        <div>
            <CountReader />
            <Buttons setCount={setCount} />
        </div>
    )
}

function CountReader(){
    const count = useContext(CountContext)
    return(
        <div>
            {count}
        </div>
    )
}

function Buttons({setCount}){
    const count = useContext(CountContext)
return(
    <div>
        <button onClick={()=>{
            setCount(count+1)
        }} >Increase</button>
        <button onClick={()=>{
            setCount(count-1)
        }}>Decrease</button>
    </div>
)

}