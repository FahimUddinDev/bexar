import React, { Component } from "react";
import "./commentForm.css";
import {
  responsiveFontSizes,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { connect } from "react-redux";
let theme = createTheme();
theme = responsiveFontSizes(theme);
class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogId: this.props.blogId,
      name: "",
      email: "",
      comment: "",
      reply: this.props.reply,
    };
  }
  changeHandelar = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
      date: this.dateAndTime(),
    });
    event.preventDefault();
  };

  formatAMPM = (date) => {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  };
  dateAndTime = () => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const date = new Date();
    let dd = date.getDate();
    let mm = date.getMonth();
    let yyyy = date.getFullYear();
    dd = dd < 10 ? "0" + dd : dd;
    let time = this.formatAMPM(date);
    return `${dd} ${monthNames[mm]} ${yyyy} At ${time}`;
  };
  formReset = () => {
    this.setState({
      name: "",
      email: "",
      comment: "",
      reply: this.props.reply,
    });
  };
  submitHandler = () => {
    if (this.state.reply) {
      this.props.sendCommentReplay(this.state);
      this.props.closer();
    } else {
      this.props.sendComment(this.state);
    }
    this.formReset();
  };
  render() {
    return (
      <div className="commentFormWrapper">
        <ThemeProvider theme={theme}>
          <Typography variant="h3">{this.props.heading}</Typography>
        </ThemeProvider>
        <div className="commentForm">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              this.submitHandler();
            }}
          >
            <input
              type="text"
              placeholder="Name"
              className="commentName"
              value={this.state.name}
              name="name"
              onChange={(event) => {
                this.changeHandelar(event);
              }}
            />
            <input
              type="text"
              placeholder="Email"
              className="commentEmail"
              value={this.state.email}
              name="email"
              onChange={(event) => {
                this.changeHandelar(event);
              }}
            />
            <textarea
              placeholder="comment"
              className="commentMessage"
              value={this.state.comment}
              name="comment"
              onChange={(event) => {
                this.changeHandelar(event);
              }}
            />
            <button type="submit" className="button commentButton">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendComment: (data) => {
      dispatch({ type: "sendComment", payload: data });
    },
    sendCommentReplay: (data) => {
      dispatch({ type: "sendCommentReply", payload: data });
    },
  };
};

export default connect(null, mapDispatchToProps)(CommentForm);
