import { useEffect, useState } from "react";


export default function LifecycleFeature(){

    const [render,setRender] = useState(true)
    setTimeout(() => {
        setRender(!render)
    }, 5000);

    return(
        <div>
            {render ? <MyComponent /> : <p>Component Unmounted</p>}
        </div>
    )
}

function MyComponent(){
    useEffect(()=>{
        console.log("Component Mounted");
        return () => {
            console.log("Component Unmounted");
        }
    },[])
    // in useEffect when the depedency array is empty it means the useEffect will run only once when the component is mounted
    // and the return function will run when the component is unmounted
    // in useEffect when the depedency changes the return function is called first and then the useEffect function is called
    // so it is used to clean up the previous effect before applying the new one 

    return(
        <div>
            <p>From Lifecycle Feature</p>
        </div>
    )
}