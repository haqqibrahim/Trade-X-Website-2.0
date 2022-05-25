import React from "react";
import Pic from "../../../../images/aboutPic.png"

const style = {
  heading: `text-white text-left pl-20 font-semibold text-2xl font-sans`,
  p: `text-white text-left pl-20 pt-4 font-sans `,
  p2: `text-white text-left pl-20 pt-4 font-sans font-semibold`,
};

const MobileAboutProduct = () => {
  return (
    <>
      <h1 className={style.heading}>All about Trade-X Chat</h1>
      <p className={style.p}>
        Trade-X Chat seeks to meet the needs of <br /> Gen-Z users - to find
        Businesses, Brands, <br /> Organizations, Influencers, and Institutions{" "}
        <br /> that offer great products and services
      </p>
      <p className={style.p2}>
        This is an app made For Gen-Z, By Gen-Z, <br /> With Gen-Z.
      </p>
      <img src={Pic} alt="" className="pl-20 pt-10"/>
    </>
  );
};

export default MobileAboutProduct;
