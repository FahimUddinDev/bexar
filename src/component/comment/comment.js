import React, { useState } from "react";
import "./comment.css";
import {
  responsiveFontSizes,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";
import CommentForm from "./commentForm/commentForm";
import { connect } from "react-redux";
let theme = createTheme();
theme = responsiveFontSizes(theme);

const CommentReply = (props) => {
  const [replyForm, setReplyForm] = useState(false);
  const replyToggler = () => {
    setReplyForm(!replyForm);
  };
  try {
    return (
      <div className="commentReplyWrapper">
        <div className="commentReply ">
          <img src={`${props.reply.image}`} alt="Reply" />
          <div className=" CommentInfo CRInfo">
            <ThemeProvider theme={theme}>
              <Typography variant="h6">{props.reply.name}</Typography>
              <Typography variant="body1" className="commentDate">
                {props.reply.date}
              </Typography>
              <Typography variant="body1">{props.reply.reply}</Typography>
              <Typography
                variant="button"
                className="button replyButton"
                onClick={replyToggler}
              >
                Reply
              </Typography>
            </ThemeProvider>
          </div>
        </div>
        {replyForm ? (
          <CommentForm
            reply={props.reply.id}
            heading={"LEAVE A REPLY"}
            closer={replyToggler}
            blogId={props.blogId}
            commentId={props.commentId}
          />
        ) : (
          ""
        )}
      </div>
    );
  } catch (error) {
    console.log(error);
  }
};

const CommentMaker = (props) => {
  const [replyForm, setReplyForm] = useState(false);
  const replyToggler = () => {
    setReplyForm(!replyForm);
  };
  try {
    return (
      <div className="commentMakerWrapper">
        <div className="mainComment">
          <img src={`${props.comment.image}`} alt="Reply" />
          <div className="CommentInfo">
            <ThemeProvider theme={theme}>
              <Typography variant="h6">{props.comment.name}</Typography>
              <Typography variant="body1" className="commentDate">
                {props.comment.date}
              </Typography>
              <Typography variant="body1">{props.comment.comment}</Typography>
              <Typography
                variant="button"
                className="button replyButton"
                onClick={replyToggler}
              >
                Reply
              </Typography>
            </ThemeProvider>
          </div>
        </div>
        {replyForm ? (
          <CommentForm
            reply={props.comment.id}
            heading={"LEAVE A REPLY"}
            closer={replyToggler}
            blogId={props.comment.blogId}
            commentId={props.comment.id}
          />
        ) : (
          ""
        )}
        <div className="commentReplyWrapper">
          {props.comment.reply.map((item) => {
            return (
              <CommentReply
                reply={item}
                blogId={props.comment.blogId}
                commentId={props.comment.id}
              />
            );
          })}
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);
  }
};

const Comment = (props) => {
  let comment = [];
  for (let item in props.comments) {
    if (props.comments[item].blogId === props.blogId) {
      comment.push(props.comments[item]);
    }
  }
  try {
    return (
      <div className="commentWrapper">
        <ThemeProvider theme={theme}>
          <Typography variant="h4">COMMENTS</Typography>
        </ThemeProvider>
        {comment.map((item) => {
          return <CommentMaker comment={item} />;
        })}
      </div>
    );
  } catch (error) {
    console.log(error);
  }
};

const mapStateToProps = (state) => {
  return {
    comments: state.blogComment,
  };
};

export default connect(mapStateToProps)(Comment);
