import React from "react";

const styles = {
  text: `text-left text-white text-base font-semibold font-sans pl-20 pt-5`,
};

const Texts = (props) => {
  return (
    <>
      <div
        style={{
          width: "90px",
          height: "5px",
          backgroundColor: "#FFFFFF",
          marginTop: "40px",
          marginLeft: "80px",
        }}
      ></div>
      {props.texts}
    </>
  );
};

const MobileBodyB = () => {
  return (
    <div>
      <Texts
        texts={
          <h1 className={styles.text}>
            As consumers with businesses of <br /> all types offering products
            and <br />
            services we need and want.
          </h1>
        }
      />
      <Texts
        texts={
          <h1 className={styles.text}>
            As activists, involved in causes from <br /> Social Justice to
            Climate change to <br /> Economic empowerment.
          </h1>
        }
      />
      <Texts
        texts={
          <h1 className={styles.text}>
            As clients to freelancers, who <br /> offer services we need and
            want.
          </h1>
        }
      />
      <Texts
        texts={
          <h1 className={styles.text}>
            As citizens, with the desire of governments <br /> and their
            institutions trying to reach us to <br /> hear our needs and
            concerns.
          </h1>
        }
      />
      <Texts
        texts={
          <h1 className={styles.text}>
            As fans to content creators and <br /> influencers who create
            content that <br /> entertains and educates us.
          </h1>
        }
      />
    </div>
  );
};

export default MobileBodyB;
