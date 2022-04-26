import React from 'react'

//MATERIAL UI IMPORTS
import Stack from '@mui/material/Stack';

// IMAGE IMPORT
import BroadcastTool from "../../../images/broadcasttool.svg";
import InteractionTool from "../../../images/interactiontool.svg";
import Favorite from "../../../images/favorite.svg";
import Notification from "../../../images/notification.svg";
import Merch from "../../../images/merch.svg";
import Analytics from "../../../images/analytics.svg";

const styles = {

	img: {
		marginLeft: "auto",
		marginRight: "auto",
		width: "75%",
		display: "block",
		"@media (minWidth: 768px)": {
			width: "10px",
		}
	}
}

function Features_Freelancer() {
	return (
		<>
			<div className="lg:pt-28 pt-9 mb-20" style={styles.img}>
				<h1 className="text-left tracking-normal text-white lg:text-4xl text-lg font-bold font-sans">
					Features
				</h1>
				<p className="leading-tight text-left lg:pt-5 pt-2 tracking-tight text-white font-mormal font-sans text-base">
					These are dome of the tools that will let,<br />
					<p className="pt-1">you engage with your Gen-Z audience.</p>
				</p>
				<Stack spacing={8} className="pt-8">
					<Stack direction="row" justifyContent="flex-start" spacing={40}>
						<div className="w-96 h-56 lg:rounded-lg border-white border-2">
							<Stack className="pt-8 pl-3"
								spacing={2}
								justifyContent="space-evenly"
								alignItems="flex-start">
								<img src={BroadcastTool} alt="" />
								<h1 className="text-left text-white text-bold font-sans text-xl">
									Broadcast Tool
								</h1>
								<h1 className="text-left text-white text-bold font-sans text-sm">
									This tool gives you the ability to broadcast<br />
									merhandise promos, polls and other forms of<br />
									content to your Gen-Z audience at once
								</h1>
							</Stack>
						</div>
						<div className="w-96 h-56 rounded-lg border-white border-2 lg:pr-0 pr-28">
							<Stack className="pt-5 pl-3"
								spacing={2}
								justifyContent="space-evenly"
								alignItems="flex-start">
								<img src={InteractionTool} alt="" />
								<h1 className="text-left text-white text-bold font-sans text-xl">
									Interaction Panel
								</h1>
								<h1 className="text-left antialiased  text-white text-bold font-sans text-sm">
									This features allows you to interact with your<br />
									Gen-Z audience. From merchandise promos to<br />
									video content promos to polls & so much more.
								</h1>
							</Stack>
						</div>
					</Stack>
					<Stack direction="row" justifyContent="flex-start" spacing={40}>
						<div className="w-96 h-56 lg:rounded-lg border-white border-2">
							<Stack className="pt-8 pl-3"
								spacing={2}
								justifyContent="space-evenly"
								alignItems="flex-start">
								<img src={Favorite} alt="" />
								<h1 className="text-left text-white text-bold font-sans text-xl">
									Favorites
								</h1>
								<h1 className="text-left text-white text-bold font-sans text-sm">
									This feature lets you view the most active fans/<br />clients.
								</h1>
							</Stack>
						</div>
						<div className="w-96 h-56 rounded-lg bg-white border-white border-2 lg:pr-0 pr-28">
							<Stack className="pt-5 pl-3"
								spacing={2}
								justifyContent="space-evenly"
								alignItems="flex-start">
								<img src={Analytics} alt="" />
								<h1 className="text-left text-black text-bold font-sans text-xl">
									Analytics Tool
								</h1>
								<h1 className="text-left antialiased  text-black text-bold font-sans text-sm">
									The analytics allows you to view all datapoints<br />
									and insights that will let you offer better<br />
									services and products to your Gen-Z audience.
								</h1>
							</Stack>
						</div>
					</Stack>
					<Stack direction="row" justifyContent="flex-start" spacing={40}>
						<div className="w-96 h-56 lg:rounded-lg border-white border-2">
							<Stack className="pt-8 pl-3"
								spacing={2}
								justifyContent="space-evenly"
								alignItems="flex-start">
								<img src={Merch} alt="" />
								<h1 className="text-left text-white text-bold font-sans text-xl">
									Merch Store
								</h1>
								<h1 className="text-left text-white text-bold font-sans text-sm">
									Do you offer merchandise? This tool lets you sell<br />
									merchandise of all types via: a third pary site or<br />
									through our pre-existing templates.
								</h1>
							</Stack>
						</div>
						<div className="w-96 h-56 rounded-lg border-white border-2 lg:pr-0 pr-28">
							<Stack className="pt-5 pl-3"
								spacing={2}
								justifyContent="space-evenly"
								alignItems="flex-start">
								<img src={Notification} alt="" />
								<h1 className="text-left text-white text-bold font-sans text-xl">
									Notification
								</h1>
								<h1 className="text-left antialiased  text-white text-bold font-sans text-sm">
									Get all notifications from the amount of<br />
									connection from Gen-Z BroadcastTools to other forms of<br />
									engagement.
								</h1>
							</Stack>
						</div>
					</Stack>
				</Stack>
			</div>


		</>)
}

export default Features_Freelancer