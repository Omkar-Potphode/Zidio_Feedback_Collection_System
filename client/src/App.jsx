import ButtonGradient from "./assets/svg/ButtonGradient"
import Home from "./pages/Home"

function App() {

  return (
    <>
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      {/* CLient Side Rendering */}
      <Home/>

      {/* Admin Side Rendering */}

    </div>

    <ButtonGradient/>
    </>
  )
}

export default App
