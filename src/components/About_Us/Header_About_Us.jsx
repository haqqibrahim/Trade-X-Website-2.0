import React from 'react'

// COMPONENT  IMPORT
import Miniheader from "../Home/Miniheader";
import Stack from '@mui/material/Stack';
import AboutusImg from "../../../images/aboutusImg.svg"
// IMG IMPORT
import Line from "../../../images/line.svg"
const styles = {
	img: {
		marginLeft: "auto",
		marginRight: "auto",
		display: "block",
	},

}


function Header_About_Us() {
	return (
		<>

			<Stack direction="row">
				<div className="pt-10 lg:pl-60">
					<img src={AboutusImg} alt="service" />
				</div>
				<div className="lg:pl-40 pl-5 lg:pt-28 pt-9">
					<p className="text-left text-white font-sans text-sm font-semibold">
						About
					</p>
					<h1 className="text-left tracking-normal pt-5 text-white lg:text-4xl text-lg font-bold font-sans">
						Trade-X, the Gen-Z company
					</h1>
					<p className="leading-tight text-left lg:pt-5 pt-2 tracking-tight text-zinc-700 lg:text-xl font-mormal font-sans text-sm">
						It is about time a company focused on Gen-Z exists. Gen-Z is a<br />
						generation that grows in empowerment.<br />
						Trade-X is the solution between a company made for Gen-Z and a<br />
						company focused on empowering Gen-Z.<br />
						A company made by Gen-Z , for Gen-Z and with Gen-Z.
					</p>
				</div>
			</Stack>
			<div className="pt-10 items-center px-40">
				<img src={Line} alt="" styles={styles.img} />
			</div>

			<div className="pt-16">
				<p className="text-center text-white text-base font-sans">
					Our Focus
				</p>
				<h1 className="text-white text-center font-bold font-sans text-2xl">
					Make Gen-Z consumption<br />empowering
				</h1>
			</div>

		</>
	)
}

export default Header_About_Us