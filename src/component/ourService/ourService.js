import React from "react";
import "./ourService.css";
import {
  responsiveFontSizes,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";

import Bullet from "../bullet/bullet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
let theme = createTheme();
theme = responsiveFontSizes(theme);
/* input
image 
icon
name
body */

const OurServiceCard = (props) => {
  let body = "";
  for (let i = 0; i < props.card.firstInfo.length; i++) {
    if (props.card.firstInfo[i] == "." && body.length > 200) {
      body += props.card.firstInfo[i];
      break;
    } else {
      body += props.card.firstInfo[i];
    }
  }
  return (
    <div className="ourServiceCard">
      <img src={props.card.image} alt="images" />
      <div className="ourServiceCardSymbol">
        <ThemeProvider theme={theme}>
          <Typography variant="h4">
            <FontAwesomeIcon icon={props.card.icon} />
          </Typography>
        </ThemeProvider>
      </div>
      <div className="ourServiceCardInfo">
        <ThemeProvider theme={theme}>
          <Typography variant="h6">{props.card.name}</Typography>
          <Typography variant="body2">{body}</Typography>
          <NavLink
            to={"/serviceDetails"}
            style={{ textDecoration: "none" }}
            state={{ name: props.card.name, image: props.card.image }}
          >
            <Typography variant="button" className="newsCardButton2">
              READ MORE
              <span>
                <FontAwesomeIcon icon={faArrowRight} className="buttonArrow" />
              </span>
            </Typography>
          </NavLink>
        </ThemeProvider>
      </div>
    </div>
  );
};

const OurService = (props) => {
  return (
    <div className="ourServiceWrapper">
      {props.background ? <div className="ourServiceBG1"></div> : ""}
      <div className="ourServiceBG2"></div>
      <div className="ourService">
        <Bullet color="rgb(134,195,58)" />
        <ThemeProvider theme={theme}>
          <Typography variant="h6">Best Service</Typography>
          <Typography
            variant="h3"
            style={{ color: props.background ? "white" : "rgb(35,43,57)" }}
          >
            SERVICE WE PROVIDE
          </Typography>
        </ThemeProvider>
        <div className="ourServiceCardWrapper">
          {props.cards.map((item) => {
            return <OurServiceCard card={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default OurService;
