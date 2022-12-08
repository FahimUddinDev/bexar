import React from "react";
import Bullet from "../bullet/bullet";
import "./service.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";

import {
  ThemeProvider,
  Typography,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import { NavLink } from "react-router-dom";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const ServiceCardMaker = (props) => {
  return (
    <div className="serviceCardWrapper">
      <div className="serviceCard">
        <div className="serviceCardImageWrapper">
          <div className="serviceCardBackground">
            <div className="serviceCardBordar"></div>
          </div>
          <FontAwesomeIcon className="cardIcon" icon={props.card.icon} />
        </div>
        <div className="cardInfo">
          <ThemeProvider theme={theme}>
            <Typography variant="body1" className={"cardHeading"}>
              {props.card.heading}
            </Typography>
            <Typography variant="body2" className={"cardHeading2"}>
              {props.card.body}
            </Typography>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
};

const Service = (props) => {
  const location = useLocation();
  return (
    <div className="service">
      <div className="firstHeading">
        <Bullet color="rgb(134,195,58)" />
        <ThemeProvider theme={theme}>
          <Typography variant="h5" gutterBottom="true">
            best service
          </Typography>
        </ThemeProvider>
      </div>
      <div className="secondHeading">
        <ThemeProvider theme={theme}>
          <Typography variant="h3" gutterBottom="true">
            SERVICE WE PROVIDE
          </Typography>
        </ThemeProvider>
        {location.pathname == "/service1" ||
        location.pathname == "/service2" ? (
          ""
        ) : (
          <NavLink
            to={"/service1"}
            className="button topBtnService"
            style={{ textDecoration: "none" }}
          >
            MORE SERVICE
          </NavLink>
        )}
      </div>
      <div className="serviceCardsWrapper">
        {props.cards.map((item) => {
          return <ServiceCardMaker card={item} />;
        })}
      </div>
      {location.pathname == "/service1" || location.pathname == "/service2" ? (
        ""
      ) : (
        <NavLink to={"/service2"} className="button servicebtn ">
          MORE SERVICE
        </NavLink>
      )}
    </div>
  );
};

export default Service;
