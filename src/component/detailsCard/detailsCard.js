import React from "react";
import {
  responsiveFontSizes,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";
import "./detailsCard.css";
let theme = createTheme();
theme = responsiveFontSizes(theme);

/* heading
info 
image 
bulleting[array]*/

const PDPointer = (props) => {
  try {
    return props.option.map((item) => {
      return (
        <div className="CPWrapper">
          <div className="challengeBullet"></div>
          <ThemeProvider theme={theme}>
            <Typography variant="body1">{item}</Typography>
          </ThemeProvider>
        </div>
      );
    });
  } catch (err) {}
};
const DetailsCard = (props) => {
  if (props.image) {
    return (
      <div className="detailsCardWrapper" style={{ width: props.width }}>
        <ThemeProvider theme={theme}>
          <Typography variant="h3">{props.heading}</Typography>
        </ThemeProvider>
        <div className="DCWrapper">
          <div className="PDCard">
            <ThemeProvider theme={theme}>
              <Typography variant="body1">{props.info}</Typography>
            </ThemeProvider>
            <div className="PDCPointerWrapper">
              <PDPointer option={props.bulleting} />
            </div>
          </div>
          <img src={props.image} alt="image" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="detailsCardWrapper" style={{ width: props.width }}>
        <ThemeProvider theme={theme}>
          <Typography variant="h3">{props.heading}</Typography>
        </ThemeProvider>
        <div className="PDCard2">
          <ThemeProvider theme={theme}>
            <Typography variant="body1">{props.info}</Typography>
          </ThemeProvider>
          <div className="PDCPointerWrapper">
            <PDPointer option={props.bulleting} />
          </div>
        </div>
      </div>
    );
  }
};

export default DetailsCard;
