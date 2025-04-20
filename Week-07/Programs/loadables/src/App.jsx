/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import './App.css'
import { RecoilRoot, useRecoilStateLoadable } from 'recoil';
import { todosAtomFamily } from './atoms';

// suspense and error boundry

function App() {
  return <RecoilRoot>
    <Todo id={1} />
    <Todo id={2} />
  </RecoilRoot>
}

function Todo({ id }) {
  const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));
  if (todo.state === "loading") {
    return (<div style={{ 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f0f0f0'
    }}>
      <div style={{
        width: '60px',
        height: '60px',
        border: '6px solid #f3f3f3',
        borderTop: '6px solid #3498db',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }}>
      </div>
      <style>
        {`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}
      </style>
    </div>)
  }

  return (
    <>
      {todo.contents.title}
      <br />
      {todo.contents.description}
      <br /><br />
      <br />
    </>
  )
}

export default App
