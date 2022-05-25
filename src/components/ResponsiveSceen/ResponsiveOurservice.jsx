import React from "react";
import Our_services from "../Our_services/Our_services";
import MobileOurSerive from "../Mobile/OurService/MobileOurSerive";

const ResponsiveOurservice = () => {
  const mobileScreen = window.matchMedia("(max-width: 767px)").matches;

  return <div>{mobileScreen ? <MobileOurSerive /> : <Our_services />}</div>;
};

export default ResponsiveOurservice;
