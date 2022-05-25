// MATERIAL UI IMPORTS
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

// IMAGE IMPORTS
import Dixie from "../../../../images/dixie.svg";
import Hall from "../../../../images/hall.svg";
import Josh from "../../../../images/josh.svg";
import Rae from "../../../../images/rae.svg";
import Tiktok from "../../../../images/tiktok.svg";
import Ig from "../../../../images/ig.svg";
import Twitter from "../../../../images/twitter.svg";
import Youtube from "../../../../images/youtube.svg";


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

const Mobileinfluencers = () => {
  return (
    <>
    <h1 className="pt-32 text-[#FFFFFF99] font-semibold text-3xl text-left pl-28 font-sans">Influncers like</h1>
    <Box container className="pt-3 pl-20">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className="pt-8">
            <Grid item xs={5}>
                <div>
                    <img src={Hall} alt="hall" style={styles.img} />
                </div>
                <div>
                    <h1 className="text-gray-200 whitespace-normal lg:text-xl sm:text-sm font-semibold">Bryce Hall</h1>
                </div>
                <div>
                    <h1 className="text-gray-200 whitespace-normal lg:text-xl sm:text-sm font-semibold">25 Million</h1>
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
            <Grid item xs={5}>
                <div>
                    <img src={Dixie} alt="hall" style={styles.img} />
                </div>
                <div>
                    <h1 className="text-gray-200 whitespace-normal lg:text-xl sm:text-sm font-semibold">Dixie D'amelio</h1>
                </div>
                <div>
                    <h1 className="text-gray-200 whitespace-normal lg:text-xl sm:text-sm font-semibold">40 Million</h1>
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
            <Grid item xs={5}>
                <div>
                    <img src={Josh} alt="hall" style={styles.img} />
                </div>
                <div>
                    <h1 className="text-gray-200 whitespace-normal lg:text-xl sm:text-sm font-semibold">Josh Richards</h1>
                </div>
                <div>
                    <h1 className="text-gray-200 whitespace-normal lg:text-xl sm:text-sm font-semibold">30.9 Million</h1>
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
            <Grid item xs={5}>
                <div>
                    <img src={Rae} alt="hall" style={styles.img} />
                </div>
                <div>
                    <h1 className="text-gray-200 whitespace-normal lg:text-xl sm:text-sm font-semibold">Addison Rae</h1>
                </div>
                <div>
                    <h1 className="text-gray-200 whitespace-normal lg:text-xl sm:text-sm font-semibold">60 Million</h1>
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

export default Mobileinfluencers