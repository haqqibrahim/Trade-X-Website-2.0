import React from "react";

// IMAGE IMPORTS
import UserTool from "../../../../images/usertool.svg";
import CommTool from "../../../../images/commtool.svg";
import AdminTool from "../../../../images/admintool.svg";
import AnalyticsTool from "../../../../images/analyticsTool.svg";
import MerchTool from "../../../../images/merchtool.svg";
import NotificationTol from "../../../../images/nottool.svg";
import BroadcastTool from "../../../../images/broadcastImg.svg";
import Fav from "../../../../images/fav.svg";

const style = {
  img: `p-20 ml-3`,
  textA: `text-white text-left pl-24 text-2xl font-semibold`,
  textB: `text-white text-left pl-24 pt-4 text-lg`,
  textC: `text-white text-left pl-24 pt-7 text-sm`,
};

const Texts = (props) => {
  return (
    <>
      {props.textA}
      {props.textB}
      {props.textC}
      <div className="bg-[#ffff] text-bold lg:mt-8 mt-4 py-2 w-36 rounded-lg cursor-pointer ml-24 border-2 hover:bg-[#ffff]">
        Explore Soon
      </div>
    </>
  );
};

const MobileFeaturesService = () => {
  return (
    <>
      <img src={BroadcastTool} alt="User Tool" className={style.img} />
      <Texts
        textA={<h1 className={style.textA}>Broadcast Tool</h1>}
        textB={<p className={style.textB}>Send a variety of content once</p>}
        textC={
          <p className={style.textC}>
            Reaching and engaging with your Gen-Z fans/clients is <br />{" "}
            important and intimiate, but reaching all of them at <br /> once is
            also important. <br /> This feature handles it all. Send polls,
            messages, merch <br /> promos, video content and more to Gen-Z at
            once. Save <br /> time to do more.
          </p>
        }
      />
      <img src={CommTool} alt="Communication Tool" className={style.img} />
      <Texts
        textA={<h1 className={style.textA}>Communication Tool</h1>}
        textB={<p className={style.textB}>Converse with your audience</p>}
        textC={
          <p className={style.textC}>
            This feature enables you send texts, merch promos, <br /> video
            promos, polls, partnerships ( for influencers), <br /> invoices (
            for freelancers) and more. <br /> All of which are needed in
            interacting with your Gen-Z <br />
            fans/clients.
          </p>
        }
      />
      <img src={Fav} alt="Admin Tool" className={style.img} />
      <Texts
        textA={<h1 className={style.textA}>Favorites</h1>}
        textB={<p className={style.textB}>Now your loyal fans / clients</p>}
        textC={
          <p className={style.textC}>
            It’s important for you to know why & what fans/clients <br /> are
            engaging with you constantly. This lets you <br /> understand what
            they want and how they want it. <br /> Afterall you serve them and
            they need you. <br /> This feature handles this.
          </p>
        }
      />
      <img src={AnalyticsTool} alt="Analytics Tool" className={style.img} />
      <Texts
        textA={<h1 className={style.textA}>Analytics Tool</h1>}
        textB={<p className={style.textB}>Keep track of your audience</p>}
        textC={
          <p className={style.textC}>
            Get key innuendos on how your services are needed by <br /> clients
            - for freelancers. <br /> Understand what content is needed- for
            influencers. <br /> See results of merch sales, polls, and so much
            more. <br />
            Data is key to growth.
          </p>
        }
      />
      <img src={MerchTool} alt="Merch Tool" className={style.img} />
      <Texts
        textA={<h1 className={style.textA}>Merch</h1>}
        textB={<p className={style.textB}>Manage merch activities</p>}
        textC={
          <p className={style.textC}>
            You fans/clients want to be more involved with you and <br /> truly
            support you. This feature lets you <br /> sell all your merch to
            them at a <br /> glance via : a third-party site or through our
            pre-existing <br /> templates. <br /> Let them support you while you
            keep doing awesome <br /> stuff.
          </p>
        }
      />
      <img
        src={NotificationTol}
        alt="Notification Tool"
        className={style.img}
      />
      <Texts
        textA={<h1 className={style.textA}>Notification</h1>}
        textB={<p className={style.textB}>Receive instant notifications</p>}
        textC={
          <p className={style.textC}>
            Get notified on all merch sales, connections by Gen-Z, <br /> poll
            results, service requests(freelancers), fan/client <br /> activity
            and so much more. <br />
            All at your fingertips.
          </p>
        }
      />
    </>
  );
};

export default MobileFeaturesService;
