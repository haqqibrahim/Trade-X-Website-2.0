import React from 'react';


// COMPONENT  IMPORT
import Miniheader from "../Home/Miniheader";
import Stack from '@mui/material/Stack';
import Service from "../../../images/serviceImg.svg"
import FreelancerProduct from "../../../images/ffp.svg"

// IMG IMPORT
import Appstore from '../../../images/appstore.svg';
import Out from '../../../images/outf.mp4';

const styles = {
	img: {
		marginLeft: "auto",
		marginRight: "auto",
		display: "block",
	},

}
function Header_Freelancer_influencer() {
	return (
		<>

			<Stack direction="row">
				<div className="lg:pl-48 pl-5 lg:pt-28 pt-9">
					<h1 className="text-left tracking-normal text-white lg:text-6xl text-lg font-bold font-sans">
						Influencer &<br /> Freelancer<br /> Services
					</h1>
					<p className="leading-tight text-left lg:pt-5 pt-2 tracking-tight text-zinc-700 lg:text-xl font-mormal font-sans text-base">
						We’ve created product services for<br />
						influncers and freelancers to reach <br />
						Gen-Z on our platform
					</p>
					<h1 className="text-zinc-700 lg:text-xl text-left font-mormal md:text-base font-sans sm:text-xs">
						Trade-X Chat coming soon
					</h1>
					<div className="bg-[#ffff] text-bold lg:mt-8 mt-4 py-2 w-36 rounded-lg cursor-pointer border-2 hover:bg-[#ffff]">
						Join as a customer
					</div>
				</div>

				<div className="pt-10 lg:pl-60">
					<img src={Service} alt="service" />
				</div>
			</Stack>
		</>)
}

export default Header_Freelancer_influencer