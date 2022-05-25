import React from "react";
import Pic from "../../../../images/miniheadermobile.svg";

const styles = {
  center: `pl-8`,
};
const MobileMiniHeaderService = () => {
  return (
    <>
      <center className={styles.center}>
        <img src={Pic} alt="" />
      </center>
    </>
  );
};

export default MobileMiniHeaderService;
