import { useRecoilValue, useRecoilState, RecoilRoot, useSetRecoilState } from 'recoil'
import {countAtom, evenSelector } from './store/atoms/count.jsx'
import { useMemo } from 'react';

export default function App() {
  return (
    <div>
        <RecoilRoot>
          <Count /> 
        </RecoilRoot>
    </div>
  )
}
// re-rendering
function Count() {
  return (
    <div>
      <CountReader />
      <Buttons />
      <EvenOdd />
    </div>
  )
}

function CountReader() {
  const count = useRecoilValue(countAtom);
  return (
    <div>
      {count}
    </div>
  )
}

function Buttons() {
  // const[count, setCount] = useRecoilState(countAtom)
  // this component will re-render when the count changes
  // because it uses the useRecoilState hook

  const setCount  = useSetRecoilState(countAtom)
  // this component will not re-render when the count changes
  // setCount(count + 1) === setCount(count => count+1)
  return (
    <div>
      <button onClick={() => {
        setCount(count => count + 1)
      }} >Increase</button>
      <button onClick={() => {
        setCount(count => count - 1)
      }}>Decrease</button>
    </div>
  )
}

function EvenOdd(){
  // const count = useRecoilValue(countAtom);
  // const isEven = useMemo(()=>{
  //   return count % 2 === 0
  // },[count])
  // selectors in recoil are used to derive state from atoms or other selectors

  const isEven = useRecoilValue(evenSelector)

  return(
    <div>
      { isEven ? 'Even' : 'Odd'}
    </div>
  )
}