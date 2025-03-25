import Tailwind from "./tailwind"
import RevenueCard from "./revenueCard"
function App() {

  return (
    <div className="grid grid-cols-3">
      <RevenueCard title={"Amount pending"} amount={"92,210.20"} orderCount={"2"}></RevenueCard>
    </div>
  )
}

export default App
