import { Routes, Route } from "react-router-dom"
import Home from "./Components/HomePage/Home"
import Cont from "./Components/Contact/Cont"
import Navbar from "./Components/Nav/Navbar"
import Footer from "./Components/Footer/Footer"
import About from "./Components/AboutPage/About"


function App() {
  return (
    <div className="App">
    <Navbar/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={ <Cont/> } />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App