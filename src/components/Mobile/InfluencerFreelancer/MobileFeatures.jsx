import React from "react";

// IMAGE IMPORT
import User from "../../../../images/user.svg";
import Comm from "../../../../images/comm.svg";
import Admin from "../../../../images/admin.svg";
import Notification from "../../../../images/notification.svg";
import Merch from "../../../../images/merch.svg";
import Analytics from "../../../../images/Analytic.svg";
import BroadcastTool from "../../../../images/broadcasttool.svg";
import InteractionTool from "../../../../images/interactiontool.svg";
import Favorite from "../../../../images/favorite.svg";

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
        pic={<img src={BroadcastTool} alt="User" className={style.img} />}
        text={<h1 className={style.text}>Broadcast Tool</h1>}
        textB={
          <p className={style.textB}>
            This tool gives you the ability to broadcast <br /> merhandise
            promos, polls and other forms of <br /> content to your Gen-Z
            audience at once
          </p>
        }
      />
      <Features
        pic={
          <img
            src={InteractionTool}
            alt="Communication"
            className={style.img}
          />
        }
        text={<h1 className={style.text}>Interaction Panel</h1>}
        textB={
          <p className={style.textB}>
            This features allows you to interact with your <br /> Gen-Z
            audience. From merchandise promos to video content promos to
            polls & so much more.
          </p>
        }
      />
      <Features
        pic={<img src={Favorite} alt="Admin" className={style.img} />}
        text={<h1 className={style.text}>Favorites</h1>}
        textB={
          <p className={style.textB}>
           This feature lets you view the most active fans/ <br /> clients.
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
