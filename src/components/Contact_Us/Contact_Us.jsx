import React from 'react'
import ContactImg from "../../../images/contacImg.svg"
import Stack from '@mui/material/Stack';
import Join_Waitlist from "../Our_services/Join_Waitlist_Services"
const styles = {
	img: {
		marginLeft: "auto",
		marginRight: "auto",
		display: "block",
	},

}

function Contact_Us() {
	return (
		<>
			<Stack direction="row"  className="mb-10">
				<div className="pt-10">
					<img src={ContactImg} alt="service" />
				</div>
				<div className="lg:pl-20 pl-5 lg:pt-28 pt-9">
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
			<Join_Waitlist />
		</>
	)
}

export default Contact_Us