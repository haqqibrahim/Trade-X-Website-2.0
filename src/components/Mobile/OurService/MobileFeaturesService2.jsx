import React from "react";

// IMAGE IMPORTS
import UserTool from "../../../../images/usertool.svg";
import CommTool from "../../../../images/commtool.svg";
import AdminTool from "../../../../images/admintool.svg";
import AnalyticsTool from "../../../../images/analyticstool.svg";
import MerchTool from "../../../../images/merchtool.svg";
import NotificationTol from "../../../../images/nottool.svg";

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
      <img src={UserTool} alt="User Tool" className={style.img} />
      <Texts
        textA={<h1 className={style.textA}>User Tool</h1>}
        textB={<p className={style.textB}>Track your audience progress</p>}
        textC={
          <p className={style.textC}>
            This feature fully gives you all the ability needed to <br />{" "}
            understand how your Gen-Z audience interacts with you <br /> on our
            platform. From daily active user data to <br /> engagment data. You
            will never be blindsided with this <br /> feature. This feature lets
            you offer more and better <br /> product, services, content & more.
          </p>
        }
      />
      <img src={CommTool} alt="Communication Tool" className={style.img} />
      <Texts
        textA={<h1 className={style.textA}>Communication Tool</h1>}
        textB={<p className={style.textB}>Converse with your audience</p>}
        textC={
          <p className={style.textC}>
            We see communication as a multifaceted aresnal in <br /> engaging &
            interacting with Gen-Z on Trade-X Chat. This <br /> feature offers a
            range of tools needed to organize polls, <br /> video content, and
            so much more tools- all to keep you <br /> engaged with your Gen-Z
            audience, effectively.
          </p>
        }
      />
      <img src={AdminTool} alt="Admin Tool" className={style.img} />
      <Texts
        textA={<h1 className={style.textA}>Admin</h1>}
        textB={<p className={style.textB}>Have control over your team</p>}
        textC={
          <p className={style.textC}>
            We believe your products or services are deeply in want <br /> and
            need by Gen-Z. To accomodate such demand, we <br /> have made this
            feature to let teams with a very large <br /> Gen-Z audience, assign
            other team members to deliver <br /> the great experience needed by
            your Gen-Z audience.{" "}
          </p>
        }
      />
      <img src={AnalyticsTool} alt="Analytics Tool" className={style.img} />
      <Texts
        textA={<h1 className={style.textA}>Analytics Tool</h1>}
        textB={<p className={style.textB}>Keep track of your audience</p>}
        textC={
          <p className={style.textC}>
            Data is what gives growth. This feature lets you <br /> understand
            what services and products you may offer to <br /> your Gen-Z
            audience and other Gen-Z users on Trade-X <br /> Chat. Have access
            to great insights for growth- in this <br /> Gen-Z world.
          </p>
        }
      />
      <img src={MerchTool} alt="Merch Tool" className={style.img} />
      <Texts
        textA={<h1 className={style.textA}>Merch</h1>}
        textB={<p className={style.textB}>Manage merch activities</p>}
        textC={
          <p className={style.textC}>
            The demand for merchandise of all types by Gen-Z is <br /> very much
            an opportunity, not just to make more <br /> revenues but rather an
            opportunity to grow your brand. Don’t have a third party site? Use
            our pre-existing <br /> templates and reach Gen-Z fast. <br /> Get
            insights on their sales, all for free.
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
            Having knowledge on the effectivness of your reach to <br /> Gen-Z
            is paramount. <br /> Our notifications lets that happen. Get
            notified, instantly and fast.
          </p>
        }
      />
    </>
  );
};

export default MobileFeaturesService;
