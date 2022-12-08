import React from "react";
import "./blogDetails.css";
import PageIntro from "../../../component/pageIntro/pageIntro";
import CBlogSidebar from "../../../component/CBlogSidebar/CBlogSidebar";
import Comment from "../../../component/comment/comment";
import CommentForm from "../../../component/comment/commentForm/commentForm";
import {
  responsiveFontSizes,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";
import { connect } from "react-redux";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const BlogDetails = (props) => {
  return (
    <div className="blogDetailsWrapper">
      <PageIntro
        image="images/page-title.jpg"
        heading="LATEST NEWS"
        body="Home/Latest Newse"
      />
      <div className="BDBody">
        <div className="blogDetails">
          <div className="BDImage">
            <img src={props.blog.image} alt="Blog details" />
            <button className="newsButton">Article</button>
          </div>
          <div className="BDInfo">
            <div className="BDHeading">
              <ThemeProvider theme={theme}>
                <Typography
                  variant="body1"
                  style={{
                    marginBottom: "5px",
                    color: "rgb(129, 131, 133)",
                  }}
                >
                  BY
                  <b
                    style={{
                      color: "rgb(23,34,49)",
                    }}
                  >
                    {props.blog.postBy}
                  </b>
                  / ON
                  <b
                    style={{
                      color: "rgb(23,34,49)",
                      letterSpacing: "2px",
                    }}
                  >
                    {props.blog.date}
                  </b>
                </Typography>
                <Typography
                  variant="h3"
                  style={{ fontWeight: "600", color: "rgb(23,34,49)" }}
                >
                  {props.blog.title}
                </Typography>
              </ThemeProvider>
            </div>
            <div className="BDDescription">
              <ThemeProvider theme={theme}>
                <Typography variant="body-2">{props.blog.body}</Typography>
                <Typography variant="h6">
                  TAGS:
                  <span>
                    {props.blog.tag.map((item) => {
                      return ` ${item}, `;
                    })}
                  </span>
                </Typography>
                <Typography variant="h6">
                  SHARE:{"  "}
                  <span>
                    <a href={"#"}>
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href={"#"}>
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href={"#"}>
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                    <a href={"#"}>
                      <FontAwesomeIcon icon={faGooglePlusG} />
                    </a>
                  </span>
                </Typography>
              </ThemeProvider>
            </div>
          </div>
          <div className="commentSection" style={{ width: "100%" }}>
            <Comment blogId={props.blog.id} />
            <CommentForm
              reply={false}
              heading={"LEAVE A COMMENT"}
              blogId={props.blog.id}
            />
          </div>
        </div>
        <CBlogSidebar
          search={true}
          blogs={props.blogs}
          sendCard={props.sendCard}
          sendBlog={props.sendBlog}
        />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    blog: state.activeBlog,
    blogs: state.blogs,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    sendCard: (id) => {
      dispatch({ type: "activeCard", payload: id });
    },
    sendBlog: (id) => {
      dispatch({ type: "activeBlog", payload: id });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BlogDetails);
