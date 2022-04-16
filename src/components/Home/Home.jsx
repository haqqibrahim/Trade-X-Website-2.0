// HOME COMPONENTS
import Navbar from "./Navbar";
import Header from "./Header";
import Miniheader from "./Miniheader";
import Ouropportunity from "./Ouropportunity";
import TradeXopportunity from "./Trade-Xopportunity";
import Risefogenz from "./riseofgenz";

// IMAGE IMPORTS
import LightImage from "../../../images/lightimage.svg";
import Hero from "../../../images/hero.png";

const Home = () => {
	return (
		<>
			<Navbar />
			<Header />
			<Miniheader />
			<Ouropportunity />
			<TradeXopportunity />
			<Risefogenz />
		</>
	)
}

export default Home