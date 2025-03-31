/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { RecoilRoot, useRecoilState, useSetRecoilState } from 'recoil';
import { todosAtomFamily } from './atoms';
import { useEffect } from 'react';

function App() {
  return (
    <RecoilRoot>
      <UpdaterComponent />
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={2} />
    </RecoilRoot>
  )
}
function UpdaterComponent(){
  const updateTodo = useSetRecoilState(todosAtomFamily(2));
  useEffect(()=>{
    setTimeout(() => {
        updateTodo({
          id: "1",
          title: "Updated Todo",
          description: "Updated Description"
        })
    }, 5000);
  },[])
}

function Todo({ id }) {
  const [todo, setTodo] = useRecoilState(todosAtomFamily(id));

  return (
    <>
      {todo.title}
      <br />
      {todo.description}
      <br /><br />
    </>
  )
}

export default App
