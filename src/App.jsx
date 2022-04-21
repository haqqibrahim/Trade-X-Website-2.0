// COMPONENTS IMPORTS
import Home from "./components/Home/Home";
import Our_products from "./components/Our_products/Our_products";
import Navbar from "./components/Home/Nav";

import { Routes, Route } from "react-router-dom";
// CSS IMPORTS
import './App.css'

const App = () => {

  return (

    <div className="App">
  
      <Navbar />

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/our_products" element={<Our_products />} />
      </Routes>

  
    </div>

  )
}

export default App
