import React from "react";
import "./newsCard.css";
import {
  responsiveFontSizes,
  Typography,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Bullet from "../bullet/bullet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const NewsCardMaker = (props) => {
  let body = "";
  for (let i = 0; i < props.news.body.length; i++) {
    if (props.news.body[i] !== ".") {
      body += props.news.body[i];
    } else if (body.length < 100) {
      body += props.news.body[i];
    } else {
      break;
    }
  }
  return (
    <div className="NewsCard">
      <div className="newsCardImage">
        <img src={`${props.news.image}`} alt="news card" />
        <button className="newsButton">Article</button>
      </div>
      <div className="newsCardInfo">
        <div className="newsCardHeadline">
          <div className="newsCardHeadlineBorder"></div>
          <div className="newsCardHeading">
            <ThemeProvider theme={theme}>
              <Typography
                variant="body1"
                style={{
                  marginBottom: "5px",
                  color: "rgb(129, 131, 133)",
                }}
              >
                BY{" "}
                <b
                  style={{
                    color: "rgb(23,34,49)",
                  }}
                >
                  {props.news.postBy}
                </b>
                / ON
                <b
                  style={{
                    color: "rgb(23,34,49)",
                    letterSpacing: "2px",
                  }}
                >
                  {props.news.date}
                </b>
              </Typography>
              <Typography
                variant="h5"
                style={{ fontWeight: "600", color: "rgb(23,34,49)" }}
              >
                {props.news.title}
              </Typography>
            </ThemeProvider>
          </div>
        </div>
        <div className="newsCardBody">
          <ThemeProvider theme={theme}>
            <Typography variant="body-2">{body}</Typography>
          </ThemeProvider>
        </div>
        <div className="newsCardFooter">
          <ThemeProvider theme={theme}>
            <NavLink
              to={"/blogDetails"}
              state={{ image: props.news.image, name: props.news.title }}
              style={{ textDecoration: "none" }}
            >
              <Typography
                variant="button"
                className="newsCardButton2"
                onClick={() => {
                  props.sendBlog(props.news.id);
                }}
              >
                READ MORE
                <span>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="buttonArrow"
                  />
                </span>
              </Typography>
            </NavLink>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
};

const NewsCard = (props) => {
  return (
    <div className="newsWrapper">
      {props.bullet ? <Bullet color="rgb(134, 195, 58)" /> : ""}
      {props.heading1 ? (
        <ThemeProvider theme={theme}>
          <Typography variant="h5" className="newsFirstHeading">
            {props.heading1}
          </Typography>
          <Typography
            variant="h2"
            style={{
              color: "rgb(23,34,49)",
              marginBottom: "20px",
              letterSpacing: "2px",
            }}
          >
            <b>{props.heading2}</b>
          </Typography>
        </ThemeProvider>
      ) : (
        ""
      )}
      <div className="newsCardWrapper">
        {props.newses.map((item) => {
          return <NewsCardMaker news={item} sendBlog={props.sendBlog} />;
        })}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendBlog: (info) => {
      dispatch({ type: "activeBlog", payload: info });
    },
  };
};

export default connect(null, mapDispatchToProps)(NewsCard);
