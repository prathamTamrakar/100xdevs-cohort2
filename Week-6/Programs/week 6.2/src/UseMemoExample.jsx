
import {useState, useMemo} from "react";


// If I ask you to create an app that does two things -  
// 1. Increases a counter by 1 
// 2. Lets user put a value in an input box (n) and you need 
// to show sum from 1-n 
// One restriction - everything needs to be inside App

function UseMemoExample(){
    const [counter,setCounter] = useState(0)
    const [inputValue,setInputValue] = useState(0)
    // when counter button is clicked then this expensive logic is also rerender
    // let count = 0;
    // for (let index = 1; index <= inputValue; index++) {
    //     count = count + index
        
    // }

    let count = useMemo(()=>{
        let finalCount = 0;
        for (let index = 1; index <= inputValue; index++) {
            finalCount = finalCount + index;  
        }
        return finalCount
    },[inputValue])

    return(
        <>
            <button onClick={()=>{
                setCounter(counter+1)
            }}>counter {counter}</button>
            <br /><br />
            <input type="text" id="sum" placeholder="Find sum from 1 to n" onChange={(e)=>{
                setInputValue(e.target.value)
            }}  />
            <p>Sum from 1 to {inputValue} is {count} </p>
        </>
    )

}

export default UseMemoExample