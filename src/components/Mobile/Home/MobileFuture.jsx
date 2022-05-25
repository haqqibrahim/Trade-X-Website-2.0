import React from "react";

const styles = {
  company: `pt-20 pl-20 text-white text-left font-bold font-sans text-3xl`,
  empower: `pt-4 pl-20 text-[#FFFFFF99] text-left font-mormal font-sans text-lg`,
  customerButton: `bg-[#FFFFFF] rounded-full font-semibold font-sans mt-4 hover:bg-[#1A191A] hover:text-white`,
  userButton: `bg-[#1A191A] text-white rounded-full font-semibold font-sans border-2 border-white mt-4 hover:bg-white hover:text-black mb-10`,
};

const MobileFuture = () => {
  return (
    <>
      <h1 className="pt-5 text-white font-semibold text-lg text-left pl-20">
        We are the Future
      </h1>

      <h1 className="text-[#FFFFFF99] font-semibold text-lg text-left pl-20">
        Join us as we put Gen-Z first
      </h1>
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

export default MobileFuture;
