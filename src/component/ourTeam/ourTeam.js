import React from "react";
import "./ourTeam.css";
import {
  responsiveFontSizes,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import Bullet from "../bullet/bullet";
let theme = createTheme();
theme = responsiveFontSizes(theme);

const TeamCard = (props) => {
  return (
    <div className="TCWrapper">
      <div className="teamCard">
        <div className="teamCardImage">
          <img src="images/team-member-bg.png" alt="bg" className="TBG1" />
          <img src="images/team-member-bg.png" alt="bg" className="TBG2" />
        </div>
        <img src={props.team.image} alt="background" className="teamImage" />
        <div className="teamCardSLink">
          <div className="TCSL">
            <ThemeProvider theme={theme}>
              <Typography variant="h6">
                <a href={`${props.team.facebook}`}>
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </Typography>
            </ThemeProvider>
          </div>
          <div className="TCSL">
            <ThemeProvider theme={theme}>
              <Typography variant="h6">
                <a href={`${props.team.twitter}`}>
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </Typography>
            </ThemeProvider>
          </div>
          <div className="TCSL">
            <ThemeProvider theme={theme}>
              <Typography variant="h6">
                <a href={`${props.team.linkedin}`}>
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </Typography>
            </ThemeProvider>
          </div>
          <div className="TCSL">
            <ThemeProvider theme={theme}>
              <Typography variant="h6">
                <a href={`${props.team.pinterest}`}>
                  <FontAwesomeIcon icon={faPinterest} />
                </a>
              </Typography>
            </ThemeProvider>
          </div>
        </div>
      </div>
      <div className="TCName">
        <ThemeProvider theme={theme}>
          <Typography variant="h5">{props.team.name}</Typography>
          <Typography variant="body1">{props.team.post}</Typography>
        </ThemeProvider>
      </div>
    </div>
  );
};

const OurTeam = (props) => {
  return (
    <div className="ourTeamWrapper">
      <div className="OTHeading">
        <Bullet color={"rgb(133, 195, 57)"} />
        <ThemeProvider theme={theme}>
          <Typography variant="h5">Our Team</Typography>
          <Typography variant="h4">
            WE ARE DYNAMIC TEAM AND BUSINESS AGENCY
          </Typography>
        </ThemeProvider>
      </div>
      <div className="ourTeamCards">
        {props.team.map((item) => {
          return <TeamCard team={item} />;
        })}
      </div>
    </div>
  );
};

export default OurTeam;
