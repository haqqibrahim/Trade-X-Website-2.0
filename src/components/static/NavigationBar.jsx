import Logo from "../../../images/logo.svg";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const style = {
  position: "relative",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "4px",
  boxShadow: 24,
  p: 4,
};

const NavigationBar = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={Logo} alt="logo" />
        </NavLink>
        <Bars onClick={() => handleOpen()} />
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/our_products" activeStyle>
            Our Products
          </NavLink>
          <NavLink to="/our_services" activeStyle>
            Customer Engagement Service
          </NavLink>
          <NavLink to="/our_service_freelancer_influencer" activeStyle>
            Influencer & Freelancer Service
          </NavLink>
          <NavLink to="/about_us" activeStyle>
            About Us
          </NavLink>{" "}
          <NavLink to="/contact_us" activeStyle>
            Contact Us
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
      </Nav>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <center>
              <a href="/">
                <h1 className="text-black h-100% w-100% font-semibold font-sans text-lg p-2 hover:text-white hover:bg-black">
                  Home
                </h1>
              </a>
              <a href="/our_products">
                <h1 className="text-black font-semibold font-sans text-lg p-2 hover:text-white hover:bg-black">
                  Our Product
                </h1>
              </a>
              <a href="/our_services">
                <h1 className="text-black font-semibold font-sans text-lg p-2 hover:text-white hover:bg-black">
                  Customer Engagement Service
                </h1>
              </a>
              <a href="/our_service_freelancer_influencer">
                <h1 className="text-black font-semibold font-sans text-lg p-2 hover:text-white hover:bg-black">
                  Influencer & Freelancer Service
                </h1>
              </a>
              <a href="/about_us">
                <h1 className="text-black font-semibold font-sans text-lg p-2 hover:text-white hover:bg-black">
                  About Us
                </h1>
              </a>
              <a href="/contact_us">
                <h1 className="text-black font-semibold font-sans text-lg p-2 hover:text-white hover:bg-black">
                  Contact Us
                </h1>
              </a>
            </center>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default NavigationBar;
