import React, { Component } from "react";
import Bullet from "../bullet/bullet";
import "./pricingTable.css";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
  Typography,
} from "@mui/material";
let theme = createTheme();
theme = responsiveFontSizes(theme);
class PricingTable extends Component {
  state = {
    category: true,
    rotate: "180deg",
    rotate2: "0deg",
    monthPrice: [12, 32, 46],
    yearPrice: [120, 320, 460],
  };
  toggler = () => {
    this.setState({
      ...this.state,
      category: !this.state.category,
    });
  };
  render() {
    return (
      <div className="pricingTable">
        <div className="priceHeading">
          <Bullet color="rgb(134, 195, 58)" />
          <ThemeProvider theme={theme}>
            <Typography variant="h5" className="PriceHeading1">
              Pricing Table
            </Typography>
            <Typography variant="h3" className="PriceHeading2">
              BEST PRICE EVER
            </Typography>
          </ThemeProvider>
          <div className="pSwitchWrapper">
            <ThemeProvider theme={theme}>
              <Typography
                variant="h6"
                style={
                  this.state.category
                    ? { color: "rgb(23,34,49)" }
                    : { color: "rgb(142,144,145)" }
                }
              >
                MONTHLY
              </Typography>{" "}
            </ThemeProvider>
            <div className="pSwitch">
              <div className="pSwitchDiv" onClick={this.toggler}></div>
              <div
                className="switchCircle"
                style={this.state.category ? { left: "5px" } : { right: "5px" }}
              ></div>
            </div>
            <ThemeProvider theme={theme}>
              <Typography
                variant="h6"
                style={
                  this.state.category
                    ? { color: "rgb(142,144,145)" }
                    : { color: "rgb(23,34,49)" }
                }
              >
                YEARLY
              </Typography>{" "}
            </ThemeProvider>
          </div>
        </div>
        <div className="priceCards">
          <div
            className="priceCard"
            style={
              this.state.category
                ? { transform: `rotateY(${this.state.rotate2})` }
                : { transform: `rotateY(-${this.state.rotate})` }
            }
          >
            <div className="cc1"></div>
            <div className="cc2"></div>
            <ThemeProvider theme={theme}>
              <Typography
                variant="h5"
                style={
                  this.state.category
                    ? {
                        transform: `rotateY(${this.state.rotate2})`,
                        color: "rgb(142,144,145",
                        fontWeight: "600",
                      }
                    : {
                        transform: `rotateY(-${this.state.rotate})`,
                        color: "rgb(142,144,145",
                        fontWeight: "600",
                      }
                }
              >
                Basic
              </Typography>
              <Typography
                variant="h3"
                style={
                  this.state.category
                    ? {
                        transform: `rotateY(${this.state.rotate2})`,
                        fontWeight: "800",
                        color: "rgb(23,34,49)",
                      }
                    : {
                        transform: `rotateY(-${this.state.rotate})`,
                        fontWeight: "800",
                        color: "rgb(23,34,49)",
                      }
                }
              >
                $
                {this.state.category
                  ? this.state.monthPrice[0]
                  : this.state.yearPrice[0]}
              </Typography>
              <Typography
                variant="h6"
                style={
                  this.state.category
                    ? {
                        transform: `rotateY(${this.state.rotate2})`,
                        fontWeight: "400",
                        color: "rgb(23,34,49)",
                      }
                    : {
                        transform: `rotateY(-${this.state.rotate})`,
                        fontWeight: "400",
                        color: "rgb(23,34,49)",
                      }
                }
              >
                BEST FOR SMALL INDIVIDUALS
              </Typography>
              <hr style={{ border: "1px solid rgb(232, 234, 235)" }} />
              <div
                className="priceInfo"
                style={
                  this.state.category
                    ? { transform: `rotateY(${this.state.rotate2})` }
                    : { transform: `rotateY(-${this.state.rotate})` }
                }
              >
                <Typography variant="body-1" className="priceBottom">
                  Express Service
                </Typography>
                <Typography variant="body-1" className="priceBottom">
                  Customs Clearance
                </Typography>
                <Typography variant="body-1" className="priceBottom">
                  Time-Critical Services
                </Typography>
                <Typography
                  variant="button"
                  classes
                  className={"button pCardButton"}
                >
                  Select Plan
                </Typography>
              </div>
            </ThemeProvider>
          </div>
          <div
            className="priceCard priceCardCenter"
            style={
              this.state.category
                ? { transform: `rotateY(${this.state.rotate2})` }
                : { transform: `rotateY(-${this.state.rotate})` }
            }
          >
            <div className="cc1"></div>
            <div className="cc2"></div>
            <ThemeProvider theme={theme}>
              <Typography
                variant="h5"
                style={
                  this.state.category
                    ? {
                        transform: `rotateY(${this.state.rotate2})`,
                        fontWeight: "600",
                      }
                    : {
                        transform: `rotateY(-${this.state.rotate})`,
                        fontWeight: "600",
                      }
                }
              >
                Basic
              </Typography>
              <Typography
                variant="h3"
                style={
                  this.state.category
                    ? {
                        transform: `rotateY(${this.state.rotate2})`,
                        fontWeight: "800",
                      }
                    : {
                        transform: `rotateY(-${this.state.rotate})`,
                        fontWeight: "800",
                      }
                }
              >
                $
                {this.state.category
                  ? this.state.monthPrice[1]
                  : this.state.yearPrice[1]}
              </Typography>
              <Typography
                variant="h6"
                style={
                  this.state.category
                    ? {
                        transform: `rotateY(${this.state.rotate2})`,
                        fontWeight: "400",
                      }
                    : {
                        transform: `rotateY(-${this.state.rotate})`,
                        fontWeight: "400",
                      }
                }
              >
                BEST FOR SMALL INDIVIDUALS
              </Typography>
              <hr style={{ border: "1px solid rgb(232, 234, 235)" }} />
              <div
                className="priceInfo"
                style={
                  this.state.category
                    ? { transform: `rotateY(${this.state.rotate2})` }
                    : { transform: `rotateY(-${this.state.rotate})` }
                }
              >
                <Typography variant="body-1" className="priceBottom">
                  Express Service
                </Typography>
                <Typography variant="body-1" className="priceBottom">
                  Customs Clearance
                </Typography>
                <Typography variant="body-1" className="priceBottom">
                  Time-Critical Services
                </Typography>
                <Typography
                  variant="button"
                  classes
                  className={"button pCardButton"}
                >
                  Select Plan
                </Typography>
              </div>
            </ThemeProvider>
          </div>
          <div
            className="priceCard"
            style={
              this.state.category
                ? { transform: `rotateY(${this.state.rotate2})` }
                : { transform: `rotateY(-${this.state.rotate})` }
            }
          >
            <div className="cc1"></div>
            <div className="cc2"></div>
            <ThemeProvider theme={theme}>
              <Typography
                variant="h5"
                style={
                  this.state.category
                    ? {
                        transform: `rotateY(${this.state.rotate2})`,
                        color: "rgb(142,144,145",
                        fontWeight: "600",
                      }
                    : {
                        transform: `rotateY(-${this.state.rotate})`,
                        color: "rgb(142,144,145",
                        fontWeight: "600",
                      }
                }
              >
                Basic
              </Typography>
              <Typography
                variant="h3"
                style={
                  this.state.category
                    ? {
                        transform: `rotateY(${this.state.rotate2})`,
                        fontWeight: "800",
                        color: "rgb(23,34,49)",
                      }
                    : {
                        transform: `rotateY(-${this.state.rotate})`,
                        fontWeight: "800",
                        color: "rgb(23,34,49)",
                      }
                }
              >
                $
                {this.state.category
                  ? this.state.monthPrice[2]
                  : this.state.yearPrice[2]}
              </Typography>
              <Typography
                variant="h6"
                style={
                  this.state.category
                    ? {
                        transform: `rotateY(${this.state.rotate2})`,
                        fontWeight: "400",
                        color: "rgb(23,34,49)",
                      }
                    : {
                        transform: `rotateY(-${this.state.rotate})`,
                        fontWeight: "400",
                        color: "rgb(23,34,49)",
                      }
                }
              >
                BEST FOR SMALL INDIVIDUALS
              </Typography>
              <hr style={{ border: "1px solid rgb(232, 234, 235)" }} />
              <div
                className="priceInfo"
                style={
                  this.state.category
                    ? { transform: `rotateY(${this.state.rotate2})` }
                    : { transform: `rotateY(-${this.state.rotate})` }
                }
              >
                <Typography variant="body-1" className="priceBottom">
                  Express Service
                </Typography>
                <Typography variant="body-1" className="priceBottom">
                  Customs Clearance
                </Typography>
                <Typography variant="body-1" className="priceBottom">
                  Time-Critical Services
                </Typography>
                <Typography
                  variant="button"
                  classes
                  className={"button pCardButton"}
                >
                  Select Plan
                </Typography>
              </div>
            </ThemeProvider>
          </div>
        </div>
      </div>
    );
  }
}

export default PricingTable;
