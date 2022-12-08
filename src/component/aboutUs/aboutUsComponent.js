import React from "react";
import "./aboutUsComponent.css";
import Bullet from "../bullet/bullet";
import {
  ThemeProvider,
  Typography,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import { NavLink } from "react-router-dom";

let theme = createTheme();
theme = responsiveFontSizes(theme);
const AUCImage = (props) => {
  if (props.image.length > 1) {
    return (
      <div className="aboutImage">
        <img src={props.image[0]} alt="About Us " />
        <img
          src={props.image[1]}
          alt="About Us "
          className="AUsCFirstImage"
          style={{ marginRight: props.style }}
        />
      </div>
    );
  } else {
    return (
      <div className="aboutImage">
        <img
          src={props.image[0]}
          alt="About Us "
          style={{ background: "rgba(240, 250,255,0.2)" }}
        />
      </div>
    );
  }
};
const AboutUsComponent = (props) => {
  return (
    <div className="aboutUsWrapper">
      <AUCImage image={props.image} style={props.style} />
      <div className="aboutUsDescription">
        <div className="bullet">
          <Bullet color="rgb(134,195,58)" />
        </div>
        <ThemeProvider theme={theme}>
          <Typography variant="h5">About Us</Typography>
          <Typography variant="h4">
            WE ARE DYNAMIC TEAM AND BUSINESS AGENCY
          </Typography>
          <Typography
            paragraph="true"
            align="justify"
            color="rgb(129, 131, 133)"
          >
            Excepteur sint occaecat cupidatat non proident sunt iculpa qui
            officia deserunt mollit anim est. laborum sed perspiciatis unde
            omnis natus error sit voluptatem accusantium.
          </Typography>
        </ThemeProvider>
        {window.location.pathname == "/aboutUs" ? (
          ""
        ) : (
          <NavLink to={"/aboutUs"} className="button moreAbsBtn">
            MORE ABOUT US
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default AboutUsComponent;
