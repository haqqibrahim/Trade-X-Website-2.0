import React from "react";

function Header_Freelancer_influencer() {
  return (
    <>
      <div className="lg:pl-48 pl-5 lg:pt-20 pt-9">
        <h1 className=" tracking-normal text-white lg:text-6xl text-lg font-bold font-sans">
          Influencer & Freelancer
          <br /> Services
        </h1>
        <p className="leading-tight lg:pt-5 pt-2 tracking-tight text-zinc-700 lg:text-xl font-mormal font-sans text-base">
          We’ve created product services for influncers and freelancers to reach{" "}
          <br />
          Gen-Z on our platform
        </p>
        <h1 className="text-zinc-700 lg:text-xl font-mormal md:text-base font-sans sm:text-xs">
          Trade-X Chat coming soon
        </h1>
        <center>
          <div className="bg-[#ffff] text-bold lg:mt-8 mt-4 py-2 w-36 rounded-lg cursor-pointer border-2 hover:bg-[#ffff]">
            <a href="https://trade-x-waitlist.herokuapp.com/">Join Trade-X</a>
          </div>
        </center>
      </div>
    </>
  );
}

export default Header_Freelancer_influencer;
