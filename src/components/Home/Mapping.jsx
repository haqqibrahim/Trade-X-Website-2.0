// IMAGE IMPORTS
import Map from "../../../images/map.svg";

const styles = {
	img: {
		marginLeft: "auto",
		marginRight: "auto",
		display: "block",
	},
	
}

const Mapping = () => {
	return (
		<>
			<div className="lg:pt-16">
				<img src={Map} alt="map" style={styles.img}/>
			</div>
		</>
	)
}

export default Mapping