import React from "react";
import Home from "../Home/Home";
import MobileHome from "../Mobile/Home/MobileHome";

const ResponsiveHome = () => {
  const mobileScreen = window.matchMedia("(max-width: 767px)").matches;
  return (
    <div>
      {mobileScreen ? <MobileHome /> : <Home />}
    </div>
  );
};

export default ResponsiveHome;
