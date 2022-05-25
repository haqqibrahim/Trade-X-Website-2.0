import React from "react";

const styles = {
  company: `pt-20 pl-20 text-white text-left font-bold font-sans text-3xl`,
  empower: `pt-4 pl-20 text-[#FFFFFF99] text-left font-mormal font-sans text-lg`,
  customerButton: `bg-[#FFFFFF] rounded-full font-semibold font-sans mt-4 hover:bg-[#1A191A] hover:text-white`,
  userButton: `bg-[#1A191A] text-white rounded-full font-semibold font-sans border-2 border-white mt-4 hover:bg-white hover:text-black mb-10`,
};
const MobileHeader = () => {
  return (
    <>
      <h1 className={styles.company}>
        We are a Gen-Z <br /> Consumer Comapny
      </h1>
      <p className={styles.empower}>
        our mission is to create products <br /> and services that empower Gen-Z{" "}
        <br /> consumers
      </p>
      <button
        className={styles.customerButton}
        style={{ width: 178, height: 50, float: "left", marginLeft: 80 }}
      >
         <a href="https://trade-x-waitlist.herokuapp.com/customers">Join as a customer</a>
      </button>
     
      <button
        className={styles.userButton}
        style={{ width: 178, height: 50, float: "left", marginLeft: 80 }}
      >
         <a href="https://trade-x-waitlist.herokuapp.com/">Join as a user</a>
      </button>
    </>
  );
};

export default MobileHeader;
