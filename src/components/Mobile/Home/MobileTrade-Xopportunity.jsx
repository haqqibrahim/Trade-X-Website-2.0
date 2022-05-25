// IMAGE IMPORTS
import Star from "../../../../images/star.svg";
import Vote from "../../../../images/voting.png";
import Social from "../../../../images/social.png";
import Political from "../../../../images/political.png";

const style = {
  involved: `bg-white mt-20 m-10 rounded-lg flex flex-col items-center justify-center`,
};

const styles = {
  textColor: {
    color: "#A5A5A5",
  },
  mck: {
    height: "150%",
    paddingBottom: "40px",
    paddingLeft: "10px",
  },

  img: {
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
    "@media (minWidth: 768px)": {
      width: "10px",
    },
  },

  involved: {
    height: "440px",
    width: "380px",
  },
};

const MobileTradeXopportunity = () => {
  return (
    <>
      <div className="bg-[#252425] mt-12" style={styles.mck}>
        <div className="lg:ml-36 pt-16">
          <h1
            className="text-left font-sans font-semibold pl-20"
            style={styles.textColor}
          >
            TRADE-X OPPORTUNITY
          </h1>
          <h1 className="text-white text-xl text-left pt-6 font-sans font-semibold pl-20">
            40% of the Global
          </h1>
          <h1 className="text-white  text-xl text-left font-sans font-semibold pl-20">
            Consumer population
          </h1>
          <div className="pt-5">
            <p className="text-white font-sans text-left font-semibold pl-20">
              According to Mckinsey and company, Forbes
            </p>
            <p className="text-white font-sans text-left font-semibold pl-20">
              and other recongnizable sites, we are:
            </p>
          </div>
          <div className="pt-5 pl-20">
            <div className="flex space-x-2">
              <div>
                <img src={Star} alt="" className="pt-1.5" />
              </div>
              <div>
                <p className="text-white font-sans text-left pt-0.5 font-semibold">
                  A very loyal consumer class
                </p>
              </div>
            </div>
            <div className="flex space-x-2">
              <div>
                <img src={Star} alt="" className="pt-2" />
              </div>
              <div>
                <p className="text-white font-sans text-left pt-0.5 font-semibold">
                  We have an indirect spending power of $600 Billion(estimated)
                </p>
              </div>
            </div>
            <div className="flex space-x-2">
              <div>
                <img src={Star} alt="" className="pt-3" />
              </div>
              <div>
                <p className="text-white font-sans text-left pt-1 font-semibold">
                  We will be entering the workforce and would spend even more
                </p>
              </div>
            </div>
            <div className="flex space-x-2">
              <div>
                <img src={Star} alt="" className="pt-3" />
              </div>
              <div>
                <p className="text-white font-sans text-left pt-1 font-semibold">
                  Our consumption is driven by Influencers
                </p>
              </div>
            </div>
            <div className="flex space-x-2">
              <div>
                <img src={Star} alt="" className="pt-3" />
              </div>
              <div>
                <p className="text-white font-sans text-left pt-2 font-semibold">
                  Our influence is unmatched
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.involved} style={styles.involved}>
        <h1 className="text-black font-semibold font-sans">
          We are deeply involved with
        </h1>
        <p className="text-sm font-semibold">
          Social, Political and Economic groups and movements
        </p>
        <div className="flex space-x-10 pt-10">
          <div>
            <img src={Vote} alt="" className="pt-2" />
          </div>
          <div>
            <p className="text-black font-sans text-left pt-0.5 font-semibold">
              Voting rights political <br /> group
            </p>
          </div>
        </div>
        <div className="flex space-x-10 pt-10">
          <div>
            <img src={Social} alt="" className="" />
          </div>
          <div>
            <p className="text-black font-sans text-left pt-4 font-semibold">
              Social justice group
            </p>
          </div>
        </div>
        <div className="flex space-x-10 pt-10">
          <div>
            <img src={Political} alt="" className="" />
          </div>
          <div>
            <p className="text-black font-sans text-left pt-3 font-semibold">
              Conservative political <br /> movements
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileTradeXopportunity;
