import React from "react";

import Facebook from "../../../images/facebook.svg"
import Twitter from "../../../images/twitter2.svg"
import Instagram from "../../../images/instagram.svg"

const styles = {
	img: {
		marginLeft: "auto",
		marginRight: "auto",
		display: "block",
	},
	table: {
		display: "flex",
		justifyContent: "center",
		paddingTop: "15px"
	}
}
const Footer = () => (
	<div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">

		<div className="sm:w-[90%] w-full h-[0.25px] bg-[#1A191A] mt-5 " />
		<div className="sm:w-[90%] w-full lg:flex lg:justify-between lg:items-center mt-3">
			<div className="pb-5 text-left" style={styles.table}>
				<img src={Facebook} alt="" style={styles.img} className="pl-5" />
				<img src={Twitter} alt="" style={styles.img} className="pl-5" />
				<img src={Instagram} alt="" style={styles.img} className="pl-5" />
			</div>
			<div className="items-center flex justify-between text-center pb-5">
				<p className="text-white text-left text-xs">Terms & Conditions</p>
				<p className="text-white  ml-5 text-right text-xs">Privacy Policy</p>

			</div>
			<div className=" text-right pb-5">
				<p className="text-white text-xs">2022 All rights reserved</p>
			</div>
		</div>
	</div>
);

export default Footer;