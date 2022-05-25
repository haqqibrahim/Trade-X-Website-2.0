import React from "react";
import Join_Waitlist from "../../Mobile/InfluencerFreelancer/MobileJoinServices";

const styles = {
  img: {
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
  },
  label: `text-sm text-left text-white pl-10 font-semibold text-lg`,
  form: `pt-24 pl-10`,
  input: `rounded-md p-4 bg-[#FFFFFF26]`,
  customerButton: `bg-[#FFFFFF26] rounded-md font-semibold font-sans mt-4`,
};

const MobileContactUs = () => {
  return (
    <div>
      <form
        action="https://getform.io/f/3b762a4e-657e-4a4b-aef9-8625b71bdf71"
        method="post"
      >
        <p htmlFor="" className={styles.label}>
          Full Name
        </p>
        <input
          type="text"
          name="fullName"
          id=""
          placeholder="Enter your full name"
          className={styles.input}
          style={{ width: "350px", marginLeft: "-70px" }}
        />
        <br />
        <br />
        <p htmlFor="" className={styles.label}>
          Email Address
        </p>
        <input
          type="text"
          name="text"
          id=""
          placeholder="Enter your email address"
          className={styles.input}
          style={{ width: "350px", marginLeft: "-70px" }}
        />
        <br />
        <br />
        <p htmlFor="" className={styles.label}>
          Message
        </p>
        <textarea
          type="text"
          name="fullName"
          id=""
          placeholder="Write your message"
          className={styles.input}
          style={{ width: "350px", height: "120px", marginLeft: "-70px" }}
        ></textarea>
        <br />
        <button
          type="submit"
          className={styles.customerButton}
          style={{
            width: 178,
            height: 50,
            float: "left",
            marginLeft: "40px",
            color: "white",
          }}
        >
          Send Message
        </button>
      </form>
      <br />
      <Join_Waitlist />
    </div>
  );
};

export default MobileContactUs;
