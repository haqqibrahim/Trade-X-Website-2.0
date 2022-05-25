// IMAGE IMPORTS
import Rise from "../../../../images/rise.svg";
import Rise1 from "../../../../images/rise1.svg";
import Rise2 from "../../../../images/rise2.svg";

// MATERIAL UI IMPORTS
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
const styles = {
  img: {
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
  },
};

const Mobileriseofgenz = () => {
  return (
    <>
      <Box container className="pt-2 pl-10">
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          className="pt-8"
        >
          <Grid item xs={10}>
            <div>
              <img
                src={Rise}
                alt="rise of genz"
                style={styles.img}
                className="m-16"
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div>
              <img src={Rise1} alt="rise of genz" style={styles.img} />
            </div>
            <div>
              <h1 className="text-[#FFFFFF99] font-semibold text-base text-left">
                Our consumption is <br />
                driven by social trends <br />
                influencers
              </h1>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div>
              <h1 className="text-[#FFFFFF99] font-semibold text-base text-left">
                About 60% of our <br />
                consumption is over <br />
                internet
              </h1>
            </div>
            <div>
              <img src={Rise2} alt="rise of genz" style={styles.img} />
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Mobileriseofgenz;
