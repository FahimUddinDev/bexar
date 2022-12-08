import React from "react";
import {
  responsiveFontSizes,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";
import "./pageIntro.css";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const PageIntro = (props) => {
  return (
    <div className="pageIntro">
      <img src={props.image} alt="Page Intro" className="PIBackground" />
      <div className="PIInfo">
        <ThemeProvider theme={theme}>
          <Typography variant="h3">{props.heading}</Typography>
          <Typography variant="body1">{props.body}</Typography>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default PageIntro;
