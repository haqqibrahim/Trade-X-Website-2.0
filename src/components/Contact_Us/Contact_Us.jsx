import React from "react";
import ContactImg from "../../../images/contacImg.svg";
import Stack from "@mui/material/Stack";
import Join_Waitlist from "../Our_services/Join_Waitlist_Services";

const styles = {
  img: {
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
  },
  label: `text-sm text-left text-white font-semibold text-lg`,
  form: `pt-24 pl-20`,
  input: `rounded-md p-4 bg-[#FFFFFF26]`,
  customerButton: `bg-[#FFFFFF26] rounded-md font-semibold font-sans mt-4`,
};

function Contact_Us() {
  return (
    <>
      <Stack direction="row" className="mb-10">
        <div className="pt-10">
          <img src={ContactImg} alt="service" />
        </div>
        <div className={styles.form}>
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
              style={{ width: "350px" }}
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
              style={{ width: "350px" }}
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
              style={{ width: "350px", height: "120px" }}
            ></textarea>
            <br />
            <button
              type="submit"
              className={styles.customerButton}
              style={{ width: 178, height: 50, float: "left", color: "white" }}
            >
              Send Message
            </button>{" "}
          </form>
        </div>
      </Stack>
      <Join_Waitlist />
    </>
  );
}

export default Contact_Us;
