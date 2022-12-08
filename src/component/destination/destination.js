import React from "react";
import "./destination.css";
import {
  responsiveFontSizes,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";
let theme = createTheme();
theme = responsiveFontSizes(theme);

const Destination = () => {
  return (
    <div className="destinationWrapper">
      <img src="images/about-us-3-bg.png" alt="" className="D-BG1" />
      <div className="destinationCard">
        <ThemeProvider theme={theme}>
          <Typography variant="h4">
            <span className="DCSL">01.</span> OUR MISSION
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adip isicing elit sed do
            eiusmod tempor incididunt ut labore.
          </Typography>
          <ul>
            <li>
              <Typography variant="body1">Quality Services</Typography>
            </li>
            <li>
              <Typography variant="body1">Clients Satisfaction</Typography>
            </li>
          </ul>
        </ThemeProvider>
      </div>
      <div className="destinationCard">
        <ThemeProvider theme={theme}>
          <Typography variant="h4">
            <span className="DCSL">02.</span> OUR APPROACH
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adip isicing elit sed do
            eiusmod tempor incididunt ut labore.
          </Typography>
          <ul>
            <li>
              <Typography variant="body1">Quality Services</Typography>
            </li>
            <li>
              <Typography variant="body1">Clients Satisfaction</Typography>
            </li>
          </ul>
        </ThemeProvider>
      </div>
      <div className="destinationCard">
        <ThemeProvider theme={theme}>
          <Typography variant="h4">
            <span className="DCSL">03.</span> OUR PHILOSOPHY
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adip isicing elit sed do
            eiusmod tempor incididunt ut labore.
          </Typography>
          <ul>
            <li>
              <Typography variant="body1">Quality Services</Typography>
            </li>
            <li>
              <Typography variant="body1">Clients Satisfaction</Typography>
            </li>
          </ul>
        </ThemeProvider>
      </div>
      <img src="images/about-page-bg.png" alt="" className="D-BG2" />
    </div>
  );
};

export default Destination;
