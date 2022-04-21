// CSS  IMPORT
import './Header_Our_products.css';

// IMG IMPORT
import Appstore from '../../../images/appstore.svg';
const HeaderOurProducts = () => {
  return (
    <>
      <div className="divWrapper">
        <div className="lg:ml-36 divA">
          <h1 className="text-white ml-5 font-sans font-bold text-left text-5xl">
            Trade-X <br /> Chat
          </h1>
          <h1 className="pt-5 text-left ml-5 text-gray-200">
            A platform that that lets Gen-Z Discover, <br />
            Connect and Engage with Businesses, <br />
            Brands, Organizations, Influencers, <br />
            Institutions
          </h1>
          <p className="text-left text-sm ml-5 text-gray-200">
            Trade-X Chat coming soon.
          </p>
          <img src={Appstore} alt="Appstore" className="imgApp" />
        </div>
        <div className="divB">Div B</div>
      </div>
    </>
  );
};

export default HeaderOurProducts;
