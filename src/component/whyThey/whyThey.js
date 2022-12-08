import React from "react";
import "./whyThey.css";
import Bullet from "../bullet/bullet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSnowflake, faCode, faPlay } from "@fortawesome/free-solid-svg-icons";
import {
  ThemeProvider,
  Typography,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const WhyThey = () => {
  return (
    <div className="WhyTheyWrapper">
      <div className="description">
        <div className="bullet">
          <Bullet color="rgb(134,195,58)" />
        </div>
        <ThemeProvider theme={theme}>
          <Typography variant="h5">Why Choose Us</Typography>
          <Typography variant="h4">WHY THEY CHOOSE BEXAR</Typography>
          <Typography paragraph="true">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eius tempor incididunt ut labore.
          </Typography>
        </ThemeProvider>
        <div className="points">
          <div className="point">
            <div className="pointImg">
              <div className="pointBg">
                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    right: "0px",
                    bottom: "0px",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="pointBorder">
                    <ThemeProvider theme={theme}>
                      <Typography variant="h3">
                        <FontAwesomeIcon icon={faSnowflake} />
                      </Typography>
                    </ThemeProvider>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointDescription">
              <ThemeProvider theme={theme}>
                <Typography variant="h6">CREATIVE DESIGN</Typography>
                <Typography paragraph="true">
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                  qui officia.
                </Typography>
              </ThemeProvider>
            </div>
          </div>
          <div className="point">
            <div className="pointImg">
              <div className="pointBg">
                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    right: "0px",
                    bottom: "0px",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="pointBorder">
                    <ThemeProvider theme={theme}>
                      <Typography variant="h3">
                        <FontAwesomeIcon icon={faCode} />
                      </Typography>
                    </ThemeProvider>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointDescription">
              <ThemeProvider theme={theme}>
                <Typography variant="h6">PIXEL PERFECT CODING</Typography>
                <Typography paragraph="true">
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                  qui officia.
                </Typography>
              </ThemeProvider>
            </div>
          </div>
        </div>
      </div>
      <div className="videoIcon">
        <div className="video">
          <img src="/images/feature-2.jpg" alt="Video" />
          <div className="videoButton">
            <ThemeProvider theme={theme}>
              <Typography variant="button">
                <Typography variant="h5">
                  <div className="playButton">
                    <div></div>
                    <FontAwesomeIcon icon={faPlay} />
                  </div>
                  <span>
                    WATCH INTRO <br></br> VIDEO
                  </span>
                </Typography>
              </Typography>
            </ThemeProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyThey;
