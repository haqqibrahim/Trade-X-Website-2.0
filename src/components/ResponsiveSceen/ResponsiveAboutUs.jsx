import React from "react";
import MobileAboutus from "../Mobile/AboutUs/MobileAboutus";
import AboutUs from "../About_Us/About_Us";

const ResponsiveAboutUs = () => {
  const mobileScreen = window.matchMedia("(max-width: 767px)").matches;

  return <div>{mobileScreen ? <MobileAboutus /> : <AboutUs />}</div>;
};

export default ResponsiveAboutUs;
