import React from 'react'

// IMAGE IMPORTS
import Discover from "../../../images/discover.svg";
import Connect from "../../../images/connect.svg";
import Engage from "../../../images/engage.svg";

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


function Key_Features() {
	return (
		<>
			<div className="bg-[#252425] mt-12" style={styles.mck}>
				<div className=" pt-16">
					<h1 className="text-white lg:ml-48 text-left whitespace-normal lg:text-3xl pt-8 font-sans font-semibold">Our Key Features</h1>
					<div className="pt-5">
						<img src={Discover} alt="Discover" style={styles.img} className="pt-10" />
						<img src={Connect} alt="Connect" style={styles.img} className="pt-10" />
						<img src={Engage} alt="Engage" style={styles.img} className="pt-10" />

					</div>

				</div>

			</div>
		</>
	)
}

export default Key_Features