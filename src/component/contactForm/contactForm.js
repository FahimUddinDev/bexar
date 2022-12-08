import React, { Component } from "react";
import "./contactForm.css";
import {
  responsiveFontSizes,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";

let theme = createTheme();
theme = responsiveFontSizes(theme);
class contactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    };
  }
  changeHandelar = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
    event.preventDefault();
  };
  formReset = () => {
    this.setState({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };
  submitHandaler = (event) => {
    this.setState({
      ...this.state,
    });
    this.formReset();
    event.preventDefault();
  };
  render() {
    return (
      <div className="contactFormWrapper">
        <ThemeProvider theme={theme}>
          <Typography
            variant={this.props.size}
            style={{ fontWeight: "700", color: "rgb(23, 34, 49)" }}
          >
            {this.props.heading}
          </Typography>
        </ThemeProvider>
        <div className="contactForm">
          <form
            onSubmit={(event) => {
              this.submitHandaler(event);
            }}
          >
            <input
              type="text"
              placeholder="Name"
              className="contactName"
              value={this.state.name}
              name="name"
              onChange={(event) => {
                this.changeHandelar(event);
              }}
            />
            <input
              type="text"
              placeholder="Email"
              className="contactEmail"
              value={this.state.email}
              name="email"
              onChange={(event) => {
                this.changeHandelar(event);
              }}
            />
            <input
              type="tel"
              placeholder="Phone"
              className="contactEmail"
              value={this.state.phone}
              name="phone"
              onChange={(event) => {
                this.changeHandelar(event);
              }}
            />
            <input
              type="text"
              placeholder="Subject"
              className="contactEmail"
              value={this.state.subject}
              name="subject"
              onChange={(event) => {
                this.changeHandelar(event);
              }}
            />
            <textarea
              placeholder="Message"
              className="contactMessage"
              value={this.state.message}
              name="message"
              onChange={(event) => {
                this.changeHandelar(event);
              }}
            />
            <div className="contactButtonWrapper">
              <button type="submit" className="button contactButton">
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default contactForm;
