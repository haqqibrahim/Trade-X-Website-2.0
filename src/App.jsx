// COMPONENTS IMPORTS
import Home from "./components/Home/Home";
import Our_products from "./components/Our_products/Our_products";
import Our_services from "./components/Our_services/Our_services";
import Navbar from "./components/Home/Nav";
import Footer from "./components/Home/Footer";

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
        <Route path="/our_services" element={<Our_services />} />
      </Routes>
      <Footer />

    </div>

  )
}

export default App
