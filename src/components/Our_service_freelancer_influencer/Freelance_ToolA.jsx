import React from 'react'

// MATERIAL UI IMPORTS
import Stack from '@mui/material/Stack';

// IMAGE IMPORTS
import BroadcastTool from "../../../images/broadcastImg.svg";
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

function Freelance_ToolA() {
	return (
		<>
			<div className="bg-[#1F1E1F]" >
				<Stack spacing={2} direction="row" className="place-content-center pt-20">
					<div className="" styles={styles.img}>
						<img src={BroadcastTool} alt="" width="75%" height="75%" />
					</div>
					<div>
						<h1 className="text-white lg:text-4xl text-left font-bold font-sans">Broadcast Tools</h1>
						<p className="text-white text-left pt-2 text-lg">Send variety of content once</p>
						<p className="text-white text-left text-base pt-4">
							Reaching and engaging with your Gen-Z fans/<br />
							clients is important and intimiate, but reaching<br />
							all of them at once is also important.<br />
							This feature handles it all. Send polls, messages,<br />
							merch promos, video content and more to Gen-Z<br /> at once. Save time to do more.
						</p>
						<div className="bg-[#ffff] text-bold lg:mt-8 mt-4 py-2 w-36 rounded-lg cursor-pointer border-2 hover:bg-[#ffff]">
							Explore
						</div>
					</div>
				</Stack>

				<Stack spacing={4} direction="row" className="place-content-center pt-24">

					<div>
						<h1 className="text-white lg:text-4xl text-l text-left font-bold font-sans">Interaction Panel</h1>
						<p className="text-white text-left pt-2 text-lg">Interact with Gen-Z at a go</p>
						<p className="text-white text-left pt-4 text-base">
							This feature enables you send texts, merch<br />
							promos, video promos, polls, partnerships ( for<br />
							influencers), invoices ( for freelancers) and<br /> more.<br />
							All of which are needed in interacting with your<br /> Gen-Z fans/clients.
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
		</>)
}

export default Freelance_ToolA