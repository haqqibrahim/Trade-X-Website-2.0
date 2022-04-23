// CSS  IMPORT
import './Header_Our_products.css';
// COMPONENT  IMPORT
import Miniheader from "../Home/Miniheader";

// IMG IMPORT
import Appstore from '../../../images/appstore.svg';
import Out from '../../../images/outb.mp4';
import Vid from '../../../images/vid.mp4'

const styles = {
  img: {
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
  },

}

const HeaderOurProducts = () => {
  return (
    <>
      <h1 className="text-white lg:text-7xl text-5xl font-semibold font-sans pt-20">Trade-X Chat</h1>
      <h1 className="text-zinc-700 pt-4 lg:text-xl font-mormal text-base font-sans">
        A platform that lets Gen-Z Discover,
        Connect, and Engage with Businesses,<br />
        Brands, Organizations, influencers,
        and Institutions.
      </h1>
      <h1 className="text-zinc-700 lg:text-xl font-mormal md:text-base font-sans sm:text-xs">
        Trade-X Chat coming soon
      </h1>
      <div className="flex space-x-10 lg:max-w-screen-{425}:flex-col items-center justify-center sm:columns-2">
        <img src={Appstore} alt="App Store" />
      </div>
      <Miniheader />

      <div className="pt-14">
        <video loop={true} style={styles.img} src={Out} autoPlay={true} muted={true} className="lg:w-70% lg:h-700 sm:w-30%" />

      </div>
    </>
  );
};

export default HeaderOurProducts;


