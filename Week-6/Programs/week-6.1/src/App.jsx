import React, {useState,Fragment} from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Headers tittle="Pratham Tamrakar"></Headers>
      <Headers tittle="Pratham"></Headers>
    </>

    // we can also use <Fragment> </Fragment> in place of <div> </div> 
  )
  // object destructuring => {tittle}
  function Headers(props) {
    return (
      <div>
        {props.tittle}
      </div>
    )
  }
}

export default App
