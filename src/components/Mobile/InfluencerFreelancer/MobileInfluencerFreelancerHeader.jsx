import React from "react";

import Device from "../../../../images/device.svg";
import Appstore from "../../../../images/appstore.svg";

const styles = {
  img: `p-10`,
  company: `pt-10 pl-20 text-white text-left font-bold font-sans text-3xl`,
  empower: `pt-4 pl-20 text-[#FFFFFF99] text-left font-mormal font-sans text-lg`,
  customerButton: `bg-[#FFFFFF] rounded-full font-semibold font-sans mt-4 hover:bg-[#1A191A] hover:text-white`,
  userButton: `bg-[#1A191A] text-white rounded-full font-semibold font-sans border-2 border-white mt-4 hover:bg-white hover:text-black mb-10`,
};

const MobileInfluencerFreelancerHeader = () => {
  return (
    <div>
      {/* <img src={Device} alt="" className={styles.img} /> */}
      <h1 className={styles.company}>
        Influencer & <br /> Freelancer Service
      </h1>
      <p className={styles.empower}>
        We’ve created product services for <br /> influncers and freelancers to
        reach <br />
        Gen-Z on our platform
      </p>
      <p className="text-left pl-20 text-[#FFFFFF99] font-semibold">
        Trade-X Chat Coming <br /> Soon on
      </p>

      <img src={Appstore} alt="" style={{ float: "left", marginLeft: 50 }} />
    </div>
  );
};

export default MobileInfluencerFreelancerHeader;
