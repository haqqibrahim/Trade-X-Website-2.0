// COMPONENTS IMPORTS
import Home from "./components/Home/Home";
import Our_products from "./components/Our_products/Our_products";
import Our_services from "./components/Our_services/Our_services";
import Navbar from "./components/Home/Nav";
import Footer from "./components/Home/Footer";
import Our_service_freelancer_influencer from "./components/Our_service_freelancer_influencer/Freelancer_Influencer";
import About_US from "./components/About_Us/About_Us"
import Contact_Us from "./components/Contact_Us/Contact_Us"
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
        <Route path="/our_service_freelancer_influencer" element={<Our_service_freelancer_influencer />} />
        <Route path="/about_us" element={<About_US />} />
        <Route path="/contact_us" element={<Contact_Us />} />
      </Routes>
      <Footer />

    </div>

  )
}

export default App
