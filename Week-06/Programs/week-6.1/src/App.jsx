/* eslint-disable react/display-name */

/* eslint-disable react/prop-types */
import {useState,memo}from "react";
import Keys from './Keys';
import CardWrapper from './CardWraaper'
import TextComponent from './TextComponent'
import UseEffectExample from "./UseEffect";


function App() {
  const [firstTitle, setfirstTitle] = useState("pratham Tamrakar")
  // re-rendering
  function changeTittle() {
    setfirstTitle("My name is: " + Math.random())
  }

  return (
    <div>
      <button onClick={changeTittle}>Click me to change the title</button>
      <Header tittle={firstTitle}/>
      <Header tittle="Pratham"/>
      <Header tittle="Pratham"/>
      <br />
      <Keys></Keys>
      <CardWrapper innerComponent={<TextComponent/>}></CardWrapper>
      <CardWrapper>
        <p>Hi, Global</p>
      </CardWrapper>
      <UseEffectExample></UseEffectExample>
    </div>
    // we can also use <Fragment> </Fragment> in place of <div> </div> 
  )
  // object destructuring => {tittle}

  // memo lets you skip re-rendering a component when its props are unchanged.
  // const MemoizedComponent = memo(SomeComponent, arePropsEqual?)
}
const Header = memo(function({tittle}) {
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


// memo

// import { useState } from "react"
// import { memo } from 'react';

// function App() {
//   const [firstTitle, setFirstTitle] = useState("my name is harkirat");

//   function changeTitle() {
//     setFirstTitle("My name is " + Math.random())
//   }

//   return (
//     <div>
//       <button onClick={changeTitle}>Click me to change the title</button>
//       <Header title={firstTitle} />
//       <br />
//       <Header title="My name is raman" />
//       <Header title="My name is raman" />
//       <Header title="My name is raman" />
//       <Header title="My name is raman" />
//     </div>
//   )
// }

// const Header = memo(function ({title}) {
//   return <div>
//     {title}
//   </div>
// })

// export default App