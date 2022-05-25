import React from 'react'
import MobileAboutProduct from './MobileAboutProduct';
import MobileFeatures from './MobileFeatures';
import MobileHeaderProduct from './MobileHeaderProduct'
import MobileJoinWaitlist from './MobileJoinWaitlist';
import MobileMiniHeaderProduct from './MobileMiniHeaderProduct';

const MobileOurProduct = () => {
  return (
    <>
      <MobileHeaderProduct />
      <MobileMiniHeaderProduct />
      <MobileAboutProduct />
      <MobileFeatures />
      <MobileJoinWaitlist />
    </>
  );
}

export default MobileOurProduct