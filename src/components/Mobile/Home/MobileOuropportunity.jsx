import React from "react";

// MATERIAL UI IMPORTS
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const styles = {
  heading: `text-left text-white text-3xl font-sans font-semibold pl-20`,
  heading2: `text-left pl-20 pt-4 text-[#FFFFFF99] font-sans font-semibold]`,
};
const style = {
  line: {
    textAlign: "center",
    margin: "auto",
  },
};
const MobileOuropportunity = () => {
  return (
    <>
      <h1 className={styles.heading}>Our Opportunity</h1>
      <div>
        <h3 className={styles.heading2}>
          Our vision is to change the way Gen-Z <br /> consumes. To be more
          empowering
          <br />
          Gen-Z is a nascent and the first digital native <br /> generation,
          this is where our opportunity lies
        </h3>
      </div>

      <Box sx={{ width: "100%" }} className="pt-10 text-left pl-20">
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={8}>
            <div className="text-white ">40%</div>
            <div>
              <hr className="bg-[white] w-12 h-1" />
            </div>
            <div className="text-white pt-6 text font-semibold sm:text-sm sm:text-center">
              out of the global consumer
            </div>
            <div className="text-white text font-semibold">
              population(estimated)
            </div>
          </Grid>
          <Grid item xs={8}>
            <div className="text-white pt-2">$25-$125</div>
            <div>
              <hr className="bg-[white] w-16 h-1" />
            </div>
            <div className="text-white pt-6 text font-semibold sm:text-sm">
              Billion in direct consumer
            </div>
            <div className="text-white text font-semibold">
              spending(estimated)
            </div>
          </Grid>
          <Grid item xs={8}>
            <div className="text-white pt-2">31.2%</div>
            <div>
              <hr className="bg-[white] w-12 h-1" />
            </div>
            <div className="text-white pt-6 text font-semibold">
              of the global{" "}
            </div>
            <div className="text-white text font-semibold">population</div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default MobileOuropportunity;
