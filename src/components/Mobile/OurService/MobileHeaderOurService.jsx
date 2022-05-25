import React from "react";

// IMAGE IMPORTS
import Service from "../../../../images/serviceImg.svg";

const styles = {
  img: `pl-10 pb-10`,
  heading: `text-white text-left text-2xl pl-20 font-semibold font-sans`,
  p: `text-[#FFFFFF99] text-left text-base pl-20 pt-5 font-normal font-sans`,
  customerButton: `bg-[#FFFFFF] rounded-lg font-semibold font-sans mt-4 hover:bg-[#1A191A] hover:text-white mb-10`,
};

const MobileHeaderOurService = () => {
  return (
    <>
      <div className={styles.img}>
        <img src={Service} alt="" />
      </div>
      <h1 className={styles.heading}>
        Customer <br /> Engagment Service
      </h1>
      <p className={styles.p}>
        Our services let Businesses, Brands, <br />
        Organizations, and Institutions <br />
        reach Gen-Z on Trade-X chat.
      </p>
      <button
        className={styles.customerButton}
        style={{ width: 178, height: 50, float: "left", marginLeft: 80 }}
      >
         <a href="https://trade-x-waitlist.herokuapp.com/">Join as a user</a>
      </button>
    </>
  );
};

export default MobileHeaderOurService;
