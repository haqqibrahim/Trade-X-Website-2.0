// IMAGE IMPORTS
import DCE from "../../../images/dce.svg";

const styles = {
	textColor: {
		color: '#A5A5A5',
	},
	mck: {
		height: "150%",
		paddingBottom: "40px",
		paddingLeft: "10px"
	},

	img: {
		marginLeft: "auto",
		marginRight: "auto",
		display: "block",
		"@media (minWidth: 768px)": {
			width: "10px",
		}


	}
}
const About_Trade_X = () => {
	return (

		<div className="mt-20" style={styles.mck}>
			<div className="lg:ml-36 pt-16">
				<h1 className="text-white lg:text-3xl text-left pt-8 font-sans font-semibold">All about Trade-X Chat</h1>
				<div className="pt-5">
					<p className="text-white font-sans text-left font-light">
					Trade-X Chat seeks to meet the needs of Gen-Z users - to find Businesses, Brands,<br /> Organizations, Influencers, and Institutions that offer great products and services 					</p>
					<p className="text-white font-sans text-left pt-5 font-light">
					This is an app made For Gen-Z, By Gen-Z,<br /> With Gen-Z.					</p>
				</div>
				<div className="pt-20">
					<img src={DCE} alt="dce" style={styles.img} />
				</div>
			</div>

		</div>)
}

export default About_Trade_X