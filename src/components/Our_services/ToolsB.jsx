import React from 'react'

// MATERIAL UI IMPORTS
import Stack from '@mui/material/Stack';

// IMAGE IMPORTS
import AdminTool from "../../../images/admintool.svg";
import AnalyticsTool from "../../../images/analyticstool.svg";

const styles = {
	img: {
		marginLeft: "auto",
		marginRight: "auto",
		width: "58%",
		display: "block",
		"@media (minWidth: 768px)": {
			width: "10px",
		}
	},

}

function ToolsB() {
	return (
		<>
			<div className="pb-20" >
				<Stack spacing={2} direction="row" className="place-content-center pt-20">
					<div className="" styles={styles.img}>
						<img src={AdminTool} alt="" width="75%" height="75%" />
					</div>
					<div>
						<h1 className="text-white lg:text-4xl text-left font-bold font-sans">Admin</h1>
						<p className="text-white text-left pt-2 text-lg">Have control over your team</p>
						<p className="text-white text-left text-base pt-4">
							We believe your products or services are deeply<br />
							in want and need by Gen-Z. To accomodate<br />
							such demand, we have made this feature to let<br />
							teams with a very large  Gen-Z audience, assign<br />
							other team members to deliver the great<br />
							experience needed by your Gen-Z audience.
						</p>
						<div className="bg-[#ffff] text-bold lg:mt-8 mt-4 py-2 w-36 rounded-lg cursor-pointer border-2 hover:bg-[#ffff]">
							Explore
						</div>
					</div>
				</Stack>

				<Stack spacing={4} direction="row" className="place-content-center pt-24">

					<div>
						<h1 className="text-white lg:text-4xl text-l text-left font-bold font-sans">Analytics</h1>
						<p className="text-white text-left pt-2 text-lg">Kepp track of your progress</p>
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
					<div className="" styles={styles.img}>
						<img src={AnalyticsTool} alt="" width="75%" height="75%" />
					</div>
				</Stack>
			</div>
		</>
	)
}

export default ToolsB