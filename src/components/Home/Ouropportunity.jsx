// IMAGE IMPORTS
import oupoint from "../../../images/oupoint.svg";

// MATERIAL UI IMPORTS
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
const style = {
  line: {
    textAlign: "center",
    margin: "auto",
  },
};
const Ouropportunity = () => {
  return (
    <>
      <div className="pt-24">
        <h1 className="text-white lg:text-5xl md:text-xl sm:text-xl font-sans">
          Our Opportunity
        </h1>
      </div>
      <div>
        <h1 className="text-zinc-700 pt-5 lg:text-xl  font-mormal md:text-base  font-sans sm:text-xs">
          Our vision is to change the way Gen-Z consumes. To be more empowering{" "}
        </h1>
        <h1 className="text-zinc-700 lg:text-xl font-mormal md:text-base font-sans sm:text-xs">
          Gen-Z is a nascent and the first digital native generation, this is
          where our opportunity lies{" "}
        </h1>
      </div>

      <Box sx={{ width: "100%" }} className="pt-24">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={4}>
            <div className="text-white pb-1">40%</div>
            <div>
              <hr className="bg-[white] w-12 h-2" style={style.line} />
            </div>
            <div className="text-white pt-9 lg:text-2xl sm:text-sm sm:text-center">
              out of the global
            </div>
            <div className="text-white lg:text-2xl">consumer population</div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-white pb-1">$25-$125</div>
            <div>
              <hr className="bg-[white] w-16 h-2" style={style.line} />
            </div>
            <div className="text-white pt-9 lg:text-2xl sm:text-sm">
              Billion in direct
            </div>
            <div className="text-white lg:text-2xl">consumer spending</div>
          </Grid>
          <Grid item xs={4}>
            <div className="text-white pb-1">31.2%</div>
            <div>
              <hr className="bg-[white] w-12 h-2" style={style.line} />
            </div>
            <div className="text-white pt-9 lg:text-2xl">$2B of</div>
            <div className="text-white lg:text-2xl">
              the global consumer spending
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Ouropportunity;
