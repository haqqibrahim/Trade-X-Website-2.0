import React from 'react'
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { grey } from '@mui/material/colors';

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
		paddingTop: "5px",
		float: "right",
	}
}

function Join_Waitlist() {
	return (
		<>
			<div className="bg-[#252425] h-20 mb-11">
				<div className='bg-white h-36 rounded-lg' style={styles.img}>
					<div style={styles.img} className="pt-10">
						<div style={styles.divA}>
							<p className='text-left text-gray-500'>
								READY TO START? <br />
								<h1 className="text-black lg:text-4xl text-l font-bold font-sans">Join the Waitlist</h1>

							</p>
						</div>
						<div style={styles.divB}>
							<Button variant="contained" sx={{ color: grey[900], backgroundColor: grey[500], ":hover" : {backgroundColor: '#9e9e9e'} }} endIcon={<ArrowRightAltIcon fontSize="small" sx={{ color: grey[900] }} />}>
							<a href="https://trade-x-waitlist.herokuapp.com/">Sign Up!</a>
							</Button>
						</div>
					</div>

				</div>
			</div>

		</>
	)
}

export default Join_Waitlist