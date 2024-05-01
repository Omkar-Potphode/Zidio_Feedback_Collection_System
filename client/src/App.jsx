import ButtonGradient from "./assets/svg/ButtonGradient";
import About from "./components/About";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";


function App() {

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">

        {/* Client Side Rendering */}
        <Header/>
        <Hero/>
        <Features/>
        <About/>
        <Contact/>
        <Footer/>


        {/* Admin Side Rendering */}
      </div>

      <ButtonGradient/>
    </>
  )
}

export default App
