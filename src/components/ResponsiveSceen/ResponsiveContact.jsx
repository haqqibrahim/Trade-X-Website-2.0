import React from "react";
import MobileContactUs from "../Mobile/ContactUs/MobileContactUs";
import Contact_Us from "../Contact_Us/Contact_Us";

const ResponsiveContact = () => {
  const mobileScreen = window.matchMedia("(max-width: 767px)").matches;

  return <div>{mobileScreen ? <MobileContactUs /> : <Contact_Us />}</div>;
};

export default ResponsiveContact;
