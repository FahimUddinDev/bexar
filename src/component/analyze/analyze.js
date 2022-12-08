import React, { Component } from "react";
import {
  responsiveFontSizes,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";

import "./analyze.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

let theme = createTheme();
theme = responsiveFontSizes(theme);

/* input 
heading
details 
point[]
*/
class PointMaker extends Component {
  state = {
    name: this.props.point.heading,
    body: this.props.point.body,
    show: false,
  };
  bodyShow = () => {
    this.setState({
      ...this.state,
      show: !this.state.show,
    });
  };
  render() {
    return (
      <div className="analyzePoint">
        <div className="APHeading">
          <ThemeProvider theme={theme}>
            <button onClick={this.bodyShow} className="APHButton">
              <FontAwesomeIcon icon={this.state.show ? faMinus : faPlus} />
            </button>
            <Typography variant="h6">{this.state.name}</Typography>
          </ThemeProvider>
        </div>
        <div className="APBody">
          <ThemeProvider theme={theme}>
            <Typography variant="body1">
              {this.state.show ? this.state.body : ""}
            </Typography>
          </ThemeProvider>
        </div>
      </div>
    );
  }
}
const AnalyzePoint = (props) => {
  try {
    return props.point.map((item) => {
      return <PointMaker point={item} />;
    });
  } catch (error) {}
};

const Analyze = (props) => {
  return (
    <div className="analyzeWrapper">
      <ThemeProvider theme={theme}>
        <Typography variant="h3">{props.heading}</Typography>
        <Typography variant="body1">{props.details}</Typography>
      </ThemeProvider>
      <div className="analyzePointWrapper">
        <AnalyzePoint point={props.point} />
      </div>
    </div>
  );
};

export default Analyze;
