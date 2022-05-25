import React from "react";
const styles = {
  company: `pt-10 pl-20 text-white text-left font-bold font-sans text-5xl`,
  empower: `pt-4 pl-20 text-[#FFFFFF99] text-left font-mormal font-sans text-lg`,
  customerButton: `bg-[#FFFFFF] rounded-full font-semibold font-sans mt-4 hover:bg-[#1A191A] hover:text-white`,
  userButton: `bg-[#1A191A] text-white rounded-full font-semibold font-sans border-2 border-white mt-4 hover:bg-white hover:text-black mb-10`,
};
import Appstore from "../../../../images/appstore.svg";
import Out from "../../../../images/outb.mp4";

const MobileHeaderProduct = () => {
  return (
    <>
      <h1 className={styles.company}>
        Trade-X <br /> Chat
      </h1>
      <p className={styles.empower}>
        A platform that lets Gen-Z Discover, <br /> Connect & Engage with
        Businesses, <br /> Brands, Organizations, Influencers, <br /> and
        Institutions.
      </p>
      <p className="text-left pl-20 text-[#FFFFFF99] font-semibold">
        Trade-X Chat Coming <br /> Soon on
      </p>

      <img src={Appstore} alt="" style={{ float: "left", marginLeft: 50 }} />
      <video
        loop={true}
        style={styles.img}
        src={Out}
        autoPlay={true}
        muted={true}
        className="lg:w-70% lg:h-700 sm:w-30%"
      />
    </>
  );
};

export default MobileHeaderProduct;
