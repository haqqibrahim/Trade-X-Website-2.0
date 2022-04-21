// MATERIAL UI IMPORTS
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

// IMAGE IMPORTS
import Dixie from "../../../images/dixie.svg";
import Hall from "../../../images/hall.svg";
import Josh from "../../../images/josh.svg";
import Rae from "../../../images/rae.svg";
import Tiktok from "../../../images/tiktok.svg";
import Ig from "../../../images/ig.svg";
import Twitter from "../../../images/twitter.svg";
import Youtube from "../../../images/youtube.svg";


const styles = {
	img: {
		marginLeft: "auto",
		marginRight: "auto",
		display: "block",
	},
	table: {
		display: "flex",
		justifyContent: "center",
		paddingTop: "15px"
	}
}


const Influencers = () => {
	return (
		<>
			<Box container sx={{ width: "100%" }} className="lg:pt-32 md:pt-56 pb-20">
				<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className="pt-8">
					<Grid item xs={3}>
						<div>
							<img src={Hall} alt="hall" style={styles.img} />
						</div>
						<div>
							<h1 className="text-gray-200 whitespace-normal lg:text-xl sm:text-sm">Bryce Hall</h1>
						</div>
						<div>
							<h1 className="text-gray-200 whitespace-normal lg:text-xl sm:text-sm">25 Million</h1>
						</div>
						<div className="self-center">
							<table style={styles.table} >
								<tbody>
									<tr>
									<td>
										<img src={Tiktok} alt="" style={styles.img} />
									</td>
									<td>
										<img src={Twitter} alt="" style={styles.img} />
									</td>
									<td>
										<img src={Ig} alt="" style={styles.img} />
									</td>
									<td>
										<img src={Youtube} alt="" style={styles.img} />
									</td>
								</tr>
								</tbody>
							</table>
						</div>
					</Grid>
					<Grid item xs={3}>
						<div>
							<img src={Dixie} alt="hall" style={styles.img} />
						</div>
						<div>
							<h1 className="text-gray-200 whitespace-normal lg:text-xl sm:text-sm">Dixie D'amelio</h1>
						</div>
						<div>
							<h1 className="text-gray-200 whitespace-normal lg:text-xl sm:text-sm">40 Million</h1>
						</div>
						<div className="self-center">
							<table style={styles.table} >
								<tbody>
									<tr>
									<td>
										<img src={Tiktok} alt="" style={styles.img} />
									</td>
									<td>
										<img src={Twitter} alt="" style={styles.img} />
									</td>
									<td>
										<img src={Ig} alt="" style={styles.img} />
									</td>
									<td>
										<img src={Youtube} alt="" style={styles.img} />
									</td>
								</tr>
								</tbody>
							</table>
						</div>
					</Grid>
					<Grid item xs={3}>
						<div>
							<img src={Josh} alt="hall" style={styles.img} />
						</div>
						<div>
							<h1 className="text-gray-200 whitespace-normal lg:text-xl sm:text-sm">Josh Richards</h1>
						</div>
						<div>
							<h1 className="text-gray-200 whitespace-normal lg:text-xl sm:text-sm">30.9 Million</h1>
						</div>
						<div className="self-center">
							<table style={styles.table} >
								<tbody>
									<tr>
									<td>
										<img src={Tiktok} alt="" style={styles.img} />
									</td>
									<td>
										<img src={Twitter} alt="" style={styles.img} />
									</td>
									<td>
										<img src={Ig} alt="" style={styles.img} />
									</td>
									<td>
										<img src={Youtube} alt="" style={styles.img} />
									</td>
								</tr>
								</tbody>
							</table>
						</div>
					</Grid>
					<Grid item xs={3}>
						<div>
							<img src={Rae} alt="hall" style={styles.img} />
						</div>
						<div>
							<h1 className="text-gray-200 whitespace-normal lg:text-xl sm:text-sm">Addison Rae</h1>
						</div>
						<div>
							<h1 className="text-gray-200 whitespace-normal lg:text-xl sm:text-sm">60 Million</h1>
						</div>
						<div className="self-center">
							<table style={styles.table} >
								<tbody>
									<tr>
										<td>
											<img src={Tiktok} alt="" style={styles.img} />
										</td>
										<td>
											<img src={Twitter} alt="" style={styles.img} />
										</td>
										<td>
											<img src={Ig} alt="" style={styles.img} />
										</td>
										<td>
											<img src={Youtube} alt="" style={styles.img} />
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</Grid>
				</Grid>
			</Box>
		</>
	)
}

export default Influencers