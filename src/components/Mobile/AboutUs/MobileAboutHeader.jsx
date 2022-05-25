import React from "react";
import AboutusImg from "../../../../images/aboutusImg.svg";

const styles = {
  heading: `text-white text-left pl-20 font-semibold text-xl`,
  subHeading: `text-white text-left pl-20 font-semibold text-2xl`,
  p: `text-[#FFFFFF99] text-left pl-20 pt-5 text-base`,
  line: `bg-[#FFFFFF99] pt-5`,
  p2: `text-white text-left pl-20 pt-8 text-base`,
};

export const MobileAboutHeader = () => {
  return (
    <>
      <center>
        <img src={AboutusImg} alt="" />
        <h1 className={styles.heading}>About Us</h1>
        <h1 className={styles.subHeading}>Trade-X, the Gen-Z company</h1>
        <p className={styles.p}>
          It is about time a company focused on Gen-Z <br /> exists. Gen-Z is a
          generation that grows in <br /> empowerment. <br /> Trade-X is the
          solution between a company <br /> made for Gen-Z and a company focused
          on <br /> empowering Gen-Z. <br /> A company made by Gen-Z , for Gen-Z
          and <br />
          with Gen-Z.
        </p>
        <div
          style={{
            width: "345px",
            height: "1px",
            backgroundColor: "#FFFFFF1A",
            marginTop: "40px",
          }}
        ></div>
        <p className={styles.p2}>Our Focus</p>
        <h1 className={styles.heading}>
          Make Gen-Z consumption <br /> empowering.
        </h1>
      </center>
    </>
  );
};

export default MobileAboutHeader;
