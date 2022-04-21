// HOME COMPONENTS
import Navbar from "./Navbar";
import Header from "./Header";
import Miniheader from "./Miniheader";
import Ouropportunity from "./Ouropportunity";
import TradeXopportunity from "./Trade-Xopportunity";
import Risefogenz from "./riseofgenz";
import Influencers from "./Influencers";
import Wespend from "./Wespend";
import Map from "./Mapping";
import Future from "./Future";
import Footer from "./Footer";
import Nav from "./Nav";

import LightImage from  "../../../images/lightimage.svg";
import Hero from "../../../images/hero.png";
const Home = () => {
	return (
		<>
			
			<Header />
			  
			<Miniheader />
			<Ouropportunity />
			<TradeXopportunity />
			<Risefogenz />
			<Influencers />
			<Wespend />
			<Map />
			<Future />
			<Footer />
			
		</>
	)
}

export default Home