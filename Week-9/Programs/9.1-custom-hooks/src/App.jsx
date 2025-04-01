import ClassBasedCompo from "./ClassBasedCompo"
import FunctionBasedCompo from "./FunctionBasedCompo"
import LifecycleFeature from "./LifecycleFeature"

function App() {
  return(
    <div>
      <p>Class Based Component</p>
      <ClassBasedCompo />
      <p>Function Based Component</p>
      <FunctionBasedCompo />
      <LifecycleFeature />
    </div>
  )
}

export default App
