import React from "react";
import "./exprienceCounter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { faSmile, faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
  Typography,
} from "@mui/material";
let theme = createTheme();
theme = responsiveFontSizes(theme);
const ExprienceCounter = () => {
  return (
    <div className="xpCounter">
      <div className="Count">
        <div className="countIcon">
          <ThemeProvider theme={theme}>
            <Typography variant="h2">
              <FontAwesomeIcon icon={faBullseye} />
            </Typography>
          </ThemeProvider>
        </div>
        <div className="countInfo">
          <ThemeProvider theme={theme}>
            <Typography variant="h4">50+</Typography>
            <Typography variant="subtitle1">Projects Done</Typography>
          </ThemeProvider>
        </div>
      </div>
      <div className="Count">
        <div className="countIcon">
          <ThemeProvider theme={theme}>
            <Typography variant="h2">
              <FontAwesomeIcon icon={faCalendarDays} />
            </Typography>
          </ThemeProvider>
        </div>
        <div className="countInfo">
          <ThemeProvider theme={theme}>
            <Typography variant="h4">25+</Typography>
            <Typography variant="subtitle1">Projects Done</Typography>
          </ThemeProvider>
        </div>
      </div>
      <div className="Count">
        <div className="countIcon">
          <ThemeProvider theme={theme}>
            <Typography variant="h2">
              <FontAwesomeIcon icon={faTrophy} />
            </Typography>
          </ThemeProvider>
        </div>
        <div className="countInfo">
          <ThemeProvider theme={theme}>
            <Typography variant="h4">250+</Typography>
            <Typography variant="subtitle1">Projects Done</Typography>
          </ThemeProvider>
        </div>
      </div>
      <div className="Count">
        <div className="countIcon">
          <ThemeProvider theme={theme}>
            <Typography variant="h2">
              <FontAwesomeIcon icon={faSmile} />
            </Typography>
          </ThemeProvider>
        </div>
        <div className="countInfo">
          <ThemeProvider theme={theme}>
            <Typography variant="h4">500+</Typography>
            <Typography variant="subtitle1">Projects Done</Typography>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
};

export default ExprienceCounter;
