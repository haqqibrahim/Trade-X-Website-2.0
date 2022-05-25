import React from "react";

// IMAGE IMPORT
import User from "../../../../images/user.svg";
import Comm from "../../../../images/comm.svg";
import Admin from "../../../../images/admin.svg";
import Notification from "../../../../images/notification.svg";
import Merch from "../../../../images/merch.svg";
import Analytics from "../../../../images/Analytic.svg";

const style = {
  heading: `text-white text-left font-sans font-semibold pl-20 pt-10 text-2xl`,
  p: `text-left text-white pl-20 pt-3 font-semibold font-sans`,
  featuredBoard: `ml-20 mt-10 rounded-lg border-[#FFFFFF4D]`,
  img: `pt-9 pl-7`,
  text: `text-white pt-4 text-left pl-7 font-semibold text-xl`,
  textB: `text-white pt-4 text-left pl-7 text-sm`,
};

const Features = (props) => {
  return (
    <div
      className={style.featuredBoard}
      style={{
        height: "215px",
        width: "353px",
        border: "1px solid #FFFFFF4D",
      }}
    >
      {props.pic}
      {props.text}
      {props.textB}
    </div>
  );
};
const MobileFeaturesServices = () => {
  return (
    <>
      <h1 className={style.heading}>Features</h1>
      <p className={style.p}>
        These are some of the tools that will let <br /> you engage with your
        Gen-Z audience
      </p>
      <Features
        pic={<img src={User} alt="User" className={style.img} />}
        text={<h1 className={style.text}>User</h1>}
        textB={
          <p className={style.textB}>
            This analytics tool lets you keep track of engaging <br /> Gen-Z
            users on our platform
          </p>
        }
      />
      <Features
        pic={<img src={Comm} alt="Communication" className={style.img} />}
        text={<h1 className={style.text}>Communication Tool</h1>}
        textB={
          <p className={style.textB}>
            This tool lets you engage with your Gen-Z <br /> audience. With all
            the tools that will let you send <br /> video promotions, polls and
            so much more.
          </p>
        }
      />
      <Features
        pic={<img src={Admin} alt="Admin" className={style.img} />}
        text={<h1 className={style.text}>Admin Tool</h1>}
        textB={
          <p className={style.textB}>
            For teams with a larger Gen-Z audience, this tool <br /> lets you
            assign your Gen-Z audience to other <br /> team members - to engage
            with
          </p>
        }
      />
      <Features
        pic={
          <img
            src={Analytics}
            alt="Analytics"
            className={style.img}
            style={{ color: "white" }}
          />
        }
        text={<h1 className={style.text}>Analytics Tool</h1>}
        textB={
          <p className={style.textB}>
            The analytics allows you to view all datapoints <br /> and insights
            that will let you offer better services <br /> and products to your
            Gen-Z audience.
          </p>
        }
      />
      <Features
        pic={
          <img
            src={Merch}
            alt="Analytics"
            className={style.img}
            style={{ color: "white" }}
          />
        }
        text={<h1 className={style.text}>Merch Store</h1>}
        textB={
          <p className={style.textB}>
            Do you offer merchandise? This tool lets you sell <br /> merchandise
            of all types via: a third pary site or <br /> through our
            pre-existing templates.
          </p>
        }
      />
      <Features
        pic={
          <img
            src={Notification}
            alt="Notification"
            className={style.img}
            style={{ color: "white" }}
          />
        }
        text={<h1 className={style.text}>Notification </h1>}
        textB={
          <p className={style.textB}>
            Get all notifications from the amount of <br /> connection from
            Gen-Z users to other forms of <br /> engagement.
          </p>
        }
      />
    </>
  );
};

export default MobileFeaturesServices;
