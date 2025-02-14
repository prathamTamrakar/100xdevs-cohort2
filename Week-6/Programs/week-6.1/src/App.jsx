
/* eslint-disable react/prop-types */
import React,{useState}from "react";
import Keys from './Keys';
import CardWrapper from './CardWraaper'
import TextComponent from './TextComponent'


function App() {
  const [tittle, setTittle] = useState("pratham Tamrakar")
  // re-rendering
  function updateTittle() {
    setTittle("My name is: " + Math.random())
  }

  return (
    <>
      <button onClick={updateTittle}>Update the tittle</button>
      <Headers tittle={tittle}></Headers>
      <Headers tittle="Pratham"></Headers>
      <Headers tittle="Pratham"></Headers>
      <br />
      <Keys></Keys>
      <CardWrapper innerComponent={<TextComponent/>}></CardWrapper>
      <CardWrapper>
        <p>Hi, Global</p>
      </CardWrapper>
    </>
    // we can also use <Fragment> </Fragment> in place of <div> </div> 
  )
  // object destructuring => {tittle}

  // memo lets you skip re-rendering a component when its props are unchanged.
  // const MemoizedComponent = memo(SomeComponent, arePropsEqual?)
}
const Headers = React.memo(function Headers({tittle}) {
  return (
    <div>
      {tittle}
    </div>
  )
})
export default App






// import React, { useState } from "react"

// function App() {
//   return (
//       <div>
//         <HeaderWithButton></HeaderWithButton>
//         <Header tittle="Pratham"></Header>
//       </div>
//   )
// }

// function HeaderWithButton() {
//   const [tittle, setTittle] = useState("Global")

//   function updateTittle() {
//     setTittle("My college name is:" + Math.random())
//   }

//   return (
//     <>
//       <button onClick={updateTittle}>Update tittle</button>
//       <Header tittle={tittle}></Header>
//     </>
//   )
// }

// function Header({ tittle }) {
//   return (
//     <div>
//       {tittle}
//     </div>
//   )
// }

// export default App
