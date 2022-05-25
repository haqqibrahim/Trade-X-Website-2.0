import React from "react";
import MobileInfluencerFreelancer from "../Mobile/InfluencerFreelancer/MobileInfluencerFreelancer";
import FreelancerInfluencer from "../Our_service_freelancer_influencer/Freelancer_Influencer";

const ResponsiveInfluencer = () => {
  const mobileScreen = window.matchMedia("(max-width: 767px)").matches;

  return (
    <div>
      {mobileScreen ? <MobileInfluencerFreelancer /> : <FreelancerInfluencer />}
    </div>
  );
};

export default ResponsiveInfluencer;
