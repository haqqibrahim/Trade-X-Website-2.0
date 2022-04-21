// COMPONENTS IMPORTS
import Home from "./components/Home/Home";
import Our_products from "./components/Our_products/Our_products";
import Navbar from "./components/Home/Nav";

import { Routes, Route,Switch } from "react-router-dom";
// CSS IMPORTS
import './App.css'

// IMAGE IMPORTS
import LightImage from "../images/lightimage.svg";
import Hero from "../images/hero.png";

const App = () => {

  return (

    <div className="App">
  

      <Routes>
      <Navbar />

      <Route path="/" element={<Home />} />
      <Route path="/our_products" element={<Our_products />} />
      </Routes>

  
    </div>

  )
}

export default App
