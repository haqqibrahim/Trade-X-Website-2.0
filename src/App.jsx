// COMPONENTS IMPORTS
import Home from "./components/Home/Home";
import Our_products from "./components/Our_products/Our_products";
import Our_services from "./components/Our_services/Our_services";
import Footer from "./components/Home/Footer";
import Our_service_freelancer_influencer from "./components/Our_service_freelancer_influencer/Freelancer_Influencer";
import About_US from "./components/About_Us/About_Us";
import Contact_Us from "./components/Contact_Us/Contact_Us";
import { Routes, Route } from "react-router-dom";
// CSS IMPORTS
import "./App.css";

import NavigationBar from "./components/static/NavigationBar";
import ResponsiveHome from "./components/ResponsiveSceen/ResponsiveHome";
import ResponsiveOurProduct from "./components/ResponsiveSceen/ResponsiveOurProduct";
import ResponsiveOurservice from "./components/ResponsiveSceen/ResponsiveOurservice";
import ResponsiveInfluencer from "./components/ResponsiveSceen/ResponsiveInfluencer";
import ResponsiveAboutUs from "./components/ResponsiveSceen/ResponsiveAboutUs";
import ResponsiveContact from "./components/ResponsiveSceen/ResponsiveContact";
const App = () => {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<ResponsiveHome />} />
        <Route path="/our_products" element={<ResponsiveOurProduct />} />
        <Route path="/our_services" element={<ResponsiveOurservice />} />
        <Route path="/our_service_freelancer_influencer" element={<ResponsiveInfluencer />} />
        <Route path="/about_us" element={<ResponsiveAboutUs />} />
        <Route path="/contact_us" element={<ResponsiveContact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
