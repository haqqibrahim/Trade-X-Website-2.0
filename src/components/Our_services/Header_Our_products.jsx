import React from 'react'
import Stack from '@mui/material/Stack';
import Service from "../../../images/serviceImg.svg"

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
		width: "75%",
		display: "block",
		"@media (minWidth: 768px)": {
			width: "10px",
		}
	},
	divA: {
		float: "left",
	},
	divB: {

		float: "right",
	}
}

function Header_Our_products() {
	return (
		<>
			<Stack direction="row">
				<div className="lg:pl-48 pl-5 lg:pt-28 pt-9">
					<h1 className="text-left tracking-normal text-white lg:text-6xl text-lg font-bold font-sans">
						Customer<br />
						Enganement<br />
						Service
					</h1>
					<p className="leading-tight text-left lg:pt-5 pt-2 tracking-tight text-zinc-700 lg:text-xl font-mormal font-sans text-base">
						Our services let Businesses, Brands,<br />
						Organizations, and Institutions<br />
						reach Gen-Z on Trade-X chat.
					</p>
					<div className="bg-[#ffff] text-bold lg:mt-8 mt-4 py-2 w-36 rounded-lg cursor-pointer border-2 hover:bg-[#ffff]">
						Join as a customer
					</div>
				</div>
			
				<div className="pt-10 lg:pl-60">
					<img src={Service} alt="service"/>
				</div>
			</Stack>
		</>
	)
}

export default Header_Our_products