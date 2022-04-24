import React from 'react'

// MATERIAL UI IMPORTS
import Stack from '@mui/material/Stack';

// IMAGE IMPORTS
import UserTool from "../../../images/usertool.svg";
import CommTool from "../../../images/commtool.svg";

const styles = {

	img: {
		marginLeft: "auto",
		marginRight: "auto",
		width: "58%",
		display: "block",
		"@media (minWidth: 768px)": {
			width: "10px",
		}
	}
}

function ToolsA() {
	return (
		<>
			<div className="bg-[#1F1E1F]" >
				<Stack spacing={2} direction="row" className="place-content-center pt-20">
					<div className="" styles={styles.img}>
						<img src={UserTool} alt="" width="75%" height="75%" />
					</div>
					<div>
						<h1 className="text-white lg:text-4xl text-left font-bold font-sans">User Tools</h1>
						<p className="text-white text-left pt-2 text-lg">Track your audience progress</p>
						<p className="text-white text-left text-base pt-4">
							This feature fully gives you all the ability needed<br />
							to understand how your Gen-Z audience<br />
							interacts with you on our platform. From daily<br />
							active user data to engagment data. You will<br />
							never be blindsided with this feature. This<br />
							feature lets you offer more and better product,<br />
							services, content & more.
						</p>
						<div className="bg-[#ffff] text-bold lg:mt-8 mt-4 py-2 w-36 rounded-lg cursor-pointer border-2 hover:bg-[#ffff]">
							Explore
						</div>
					</div>
				</Stack>

				<Stack spacing={4} direction="row" className="place-content-center pt-24">

					<div>
						<h1 className="text-white lg:text-4xl text-l text-left font-bold font-sans">Communication</h1>
						<p className="text-white text-left pt-2 text-lg">Converse with your audience</p>
						<p className="text-white text-left pt-4 text-base">
							Data is what gives growth. This feature lets you<br />
							understand what services and products you<br />
							may offer to your Gen-Z audience and other<br />
							Gen-Z users on Trade-X Chat. Have access to<br />
							great insights for growth- in this Gen-Z world.
						</p>
						<div className="bg-[#ffff] text-bold lg:mt-8 mt-4 py-2 w-36 rounded-lg cursor-pointer border-2 hover:bg-[#ffff]">
							Explore
						</div>
					</div>
					<div className="pb-10" styles={styles.img}>
						<img src={CommTool} alt="" width="75%" height="75%" />
					</div>
				</Stack>
			</div>
		</>
	)
}

export default ToolsA