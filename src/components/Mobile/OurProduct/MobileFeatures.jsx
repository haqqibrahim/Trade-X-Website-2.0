import React from "react";

const style = {
  backBoard: `mt-10 rounded-lg shadow-lg`,
  boardText: `text-white text-left pl-5 pt-8 text-lg font-sans font-semibold`,
  boardText2: `text-[#FFFFFF99] text-left pl-5 pt-4 font-sans`,
};
const MobileFeatures = () => {
  return (
    <>
      <h1 className="pt-10 text-2xl text-white font-sans font-bold text-left pl-20">
        Our Key Features
      </h1>
      <center>
        <div
          className={style.backBoard}
          style={{ width: "345px", height: "225px", background: "#FFFFFF14" }}
        >
          <h1 className={style.boardText}>Discover</h1>
          <p className={style.boardText2}>
            Find businesses, brands, influencers, <br /> organizations, &
            institutions that offer the <br /> products and services you might
            just need <br /> and want through our discovery feed.
          </p>
        </div>
        <div
          className={style.backBoard}
          style={{ width: "345px", height: "225px", background: "#FFFFFF14" }}
        >
          <h1 className={style.boardText}>Connect</h1>
          <p className={style.boardText2}>
            After finding the right business or <br /> influencer that offers
            the products and <br /> services you want and need, you may <br />{" "}
            connect with them as you connect to a <br /> friend on social media.
          </p>
        </div>
        <div
          className={style.backBoard}
          style={{ width: "345px", height: "225px", background: "#FFFFFF14" }}
        >
          <h1 className={style.boardText}>Engage</h1>
          <p className={style.boardText2}>
            Once you discover and have connected with <br /> brands or
            influencers, you will then have <br /> access to their products or
            services, <br /> merchandise, video content and so much <br /> more.
          </p>
        </div>
      </center>
    </>
  );
};

export default MobileFeatures;
