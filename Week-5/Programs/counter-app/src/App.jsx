 


// import { useState } from 'react'
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//       </div>
//   )
// }

// export default App


// import React from 'react'

// function App() {
//   const [count, setCount] = React.useState(0)
//   function onClickHandler(){
//     setCount(count+1)
//   }
//   return(
//     <div>
//       <button onClick={onClickHandler}>Counter {count}</button>
//     </div>
//   )
// }

// export default App


import { useState } from "react";
import Todos from "./todos"

function App(){
  const [count,setCount] = useState(0)

  return(
    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
      <Todos></Todos>
    </div>
  )
}

// component
function CustomButton(props){

  function onClickHandler(){
    props.setCount(props.count + 1)
  }

  return(
    <button onClick={onClickHandler}>
      Counter {props.count}
    </button>
  )
}



export default App