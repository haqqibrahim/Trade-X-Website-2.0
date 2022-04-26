import React from 'react'
// MATERIAL UI IMPORTS
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from '@mui/material/Stack';

const style = {
	line: {
		textAlign: "center",
		margin: "auto",
	}
}

function BodyB() {
	return (
		<>
			<Stack>
				<Box sx={{ width: "100%" }} className="pt-24">
					<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
						<Grid item xs={6}>
							<div><hr className="bg-[white] w-20 h-2" style={style.line} /></div>
							<h1 className="text-white pt-2 lg:text-xl sm:text-sm sm:text-center">As consumers with businesse<br />
								of all types offering products and<br /> services we need and want.</h1>

						</Grid>
						<Grid item xs={6}>
							<div><hr className="bg-[white] w-20 h-2" style={style.line} /></div>
							<h1 className="text-white pt-2 lg:text-xl sm:text-sm">As activists, involved in causes from
								<br /> Social Justice to Climate change to<br />
								Economic empowerment.</h1>

						</Grid>

					</Grid>
				</Box>
				<Box sx={{ width: "100%" }} className="pt-24">
					<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

						<Grid item xs={20}>
							<div><hr className="bg-[white] w-20 h-2" style={style.line} /></div>
							<h1 className="text-white pt-2 lg:text-xl sm:text-sm">
								As clients to freelancers,<br /> who offer services we need and want.
							</h1>

						</Grid>

					</Grid>
				</Box>

				<Box sx={{ width: "100%" }} className="pt-24">
					<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
						<Grid item xs={6}>
							<div><hr className="bg-[white] w-20 h-2" style={style.line} /></div>
							<h1 className="text-white pt-2 lg:text-xl sm:text-sm sm:text-center">
								As citizens, with the desire of governments<br />
								and their institutions trying to reach us to<br />
								hear our needs and concerns.
							</h1>

						</Grid>
						<Grid item xs={6}>
							<div><hr className="bg-[white] w-20 h-2" style={style.line} /></div>
							<h1 className="text-white pt-2 lg:text-xl sm:text-sm">
								As fans to content creators and<br />
								influencers who create content that<br /> entertains and educates us.
							</h1>

						</Grid>

					</Grid>
				</Box>
			</Stack>
		</>
	)
}

export default BodyB