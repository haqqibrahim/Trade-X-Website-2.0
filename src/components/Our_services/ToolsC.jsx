import React from 'react'

// MATERIAL UI IMPORTS
import Stack from '@mui/material/Stack';

// IMAGE IMPORTS
import MerchTool from "../../../images/merchtool.svg";
import NotificationTol from "../../../images/nottool.svg";

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


function ToolsC() {
	return (
		<>
			<div className="bg-[#1F1E1F] mb-10" >
				<Stack spacing={2} direction="row" className="place-content-center pt-20">
					<div className="" styles={styles.img}>
						<img src={MerchTool} alt="" width="75%" height="75%" />
					</div>
					<div>
						<h1 className="text-white lg:text-4xl text-left font-bold font-sans">Merch</h1>
						<p className="text-white text-left pt-2 text-lg">Manage merch activities</p>
						<p className="text-white text-left text-base pt-4">
							The demand for merchandise of all types by<br />
							Gen-Z is very much an opportunity, not just to<br />
							make more revenues but rather an opportunity<br />
							to grow your brand.<br />
							Don’t have a third party site? Use our pre<br />
							-existing templates and reach Gen-Z fast.<br />
							Get insights on their sales, all for free.

						</p>
						<div className="bg-[#ffff] text-bold lg:mt-8 mt-4 py-2 w-36 rounded-lg cursor-pointer border-2 hover:bg-[#ffff]">
							Explore
						</div>
					</div>
				</Stack>

				<Stack spacing={4} direction="row" className="place-content-center pt-24">

					<div>
						<h1 className="text-white lg:text-4xl text-l text-left font-bold font-sans">Notifications</h1>
						<p className="text-white text-left pt-2 text-lg">Recieve instant notifications</p>
						<p className="text-white text-left pt-4 text-base">
							Having knowledge on the effectivness of your<br />
							reach to Gen-Z is paramount.<br />
							Our notifications lets that happen.<br />
							Get notified, instantly and fast.
						</p>
						<div className="bg-[#ffff] text-bold lg:mt-8 mt-4 py-2 w-36 rounded-lg cursor-pointer border-2 hover:bg-[#ffff]">
							Explore
						</div>
					</div>
					<div className="pb-10" styles={styles.img}>
						<img src={NotificationTol} alt="" width="75%" height="75%" />
					</div>
				</Stack>
			</div>
		</>
	)
}

export default ToolsC