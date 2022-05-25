import React from "react";
import Our_products from "../Our_products/Our_products";
import MobileOurProduct from "../Mobile/OurProduct/MobileOurProduct";
const ResponsiveOurProduct = () => {
  const mobileScreen = window.matchMedia("(max-width: 767px)").matches;

  return <div>{mobileScreen ? <MobileOurProduct /> : <Our_products />}</div>;
};

export default ResponsiveOurProduct;
