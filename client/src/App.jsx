import ButtonGradient from "./assets/svg/ButtonGradient"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"

function App() {

  return (
    <>
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      {/* CLient Side Rendering */}
      <Header/>
      <Hero/>
      <Footer/>

      {/* Admin Side Rendering */}

    </div>

    <ButtonGradient/>
    </>
  )
}

export default App
