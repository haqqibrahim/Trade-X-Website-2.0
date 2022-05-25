import React from "react";
import MobileFeaturesService from "./MobileFeaturesService2";
import MobileFeaturesServices from "./MobileFeaturesServices";
import MobileHeaderOurService from "./MobileHeaderOurService";
import MobileJoinServices from "./MobileJoinServices";
import MobileMiniHeaderService from "./MobileMiniHeaderService";

const MobileOurSerive = () => {
  return (
    <div>
      <MobileHeaderOurService />
      <MobileMiniHeaderService />
      <MobileFeaturesServices />
      <MobileJoinServices />
      <MobileFeaturesService />
      <MobileJoinServices />
    </div>
  );
};

export default MobileOurSerive;
