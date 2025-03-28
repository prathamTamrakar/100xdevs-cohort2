import { useRecoilValue, useRecoilState, RecoilRoot } from 'recoil'
import { countAtom } from './store/atoms/count'

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
    </div>
  )
}

function CountReader() {
  const count = useRecoilValue(countAtom)
  return (
    <div>
      {count}
    </div>
  )
}

function Buttons() {
  const[count, setCount] = useRecoilState(countAtom)
  return (
    <div>
      <button onClick={() => {
        setCount(count + 1)
      }} >Increase</button>
      <button onClick={() => {
        setCount(count - 1)
      }}>Decrease</button>
    </div>
  )
}