import React from "react";
import Pic from "../../../../images/miniheadermobile.svg";

const styles = {
    center: `pl-8 mb-10`
}
const MobileMiniHeader = () => {
  return (
    <>
      <center className={styles.center}>
        <img src={Pic} alt="" />
      </center>
    </>
  );
};

export default MobileMiniHeader;
