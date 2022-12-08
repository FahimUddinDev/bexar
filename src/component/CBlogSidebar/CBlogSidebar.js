import React, { useState } from "react";
import {
  responsiveFontSizes,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";
import "./CBlogSidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const ArticleHeading = (props) => {
  return (
    <NavLink to={"/blogDetails"} style={{ textDecoration: "none" }}>
      <div
        className="articleHeading"
        onClick={() => {
          props.sendBlog(props.article.id);
        }}
      >
        <img src={`${props.article.image}`} alt="image" />
        <div className="AHcontent">
          <ThemeProvider theme={theme}>
            <Typography variant="body1" className="AHTitle">
              {props.article.title}
            </Typography>
            <Typography variant="body1" style={{ color: "rgb(129, 131, 133)" }}>
              {props.article.date}
            </Typography>
          </ThemeProvider>
        </div>
      </div>
    </NavLink>
  );
};

export const ArticleCategory = (props) => {
  return (
    <div className="CBSCategoryWrapper">
      <ThemeProvider theme={theme}>
        <Typography variant="h5">{props.name}</Typography>
      </ThemeProvider>
      {props.category.map((item, index) => {
        return (
          <NavLink
            to={props.path ? props.path : "/blogSidebar"}
            style={{ textDecoration: "none" }}
            params={`category:${item}`}
          >
            <div
              className="ACWrapper"
              onClick={() => {
                if (props.path) {
                  props.activeService(props.item[index]);
                } else {
                  props.sendCard([item, "category"]);
                  props.blogControl(item, "category");
                }
              }}
            >
              <input type="radio" name="articleCategory" />
              <ThemeProvider theme={theme}>
                <Typography
                  variant="body1"
                  style={{ color: "rgb(129,131,133)" }}
                >
                  {item}
                </Typography>
              </ThemeProvider>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

const sideContent = (blog, identity) => {
  const result = [];
  for (let i = 0; i < blog.length; i++) {
    if (blog[i][identity]) {
      let test = false;
      if (typeof blog[i][identity] === "object") {
        for (let k = 0; k < blog[i][identity].length; k++) {
          for (let j = 0; j <= result.length; j++) {
            if (result[j] === blog[i][identity][k]) {
              test = false;
              break;
            } else {
              test = blog[i][identity][k];
            }
          }
        }
      } else {
        for (let j = 0; j <= result.length; j++) {
          if (result[j] === blog[i][identity]) {
            test = false;
            break;
          } else {
            test = blog[i][identity];
          }
        }
      }
      if (test) {
        result.push(test);
      }
    }
  }
  return result;
};

const CBlogSidebar = (props) => {
  const articleHeading = props.blogs;
  const tag = sideContent(props.blogs, "tag");
  const category = sideContent(props.blogs, "category");
  const [button, setButton] = useState(true);
  const buttonToggle = () => {
    setButton(!button);
  };
  return (
    <div
      className={`${
        button ? "CBSidebarWrapper" : "CBSidebarWrapper sidebarActive"
      }`}
    >
      <div
        className={`${button ? "CBSSwitch" : "CBSSwitch switchActive"}`}
        onClick={buttonToggle}
      >
        {button ? (
          <FontAwesomeIcon icon={faAngleDoubleLeft} />
        ) : (
          <FontAwesomeIcon icon={faAngleDoubleRight} />
        )}
      </div>
      {props.search ? (
        <div className="CBSSearchWrapper">
          <ThemeProvider theme={theme}>
            <Typography variant="h5" className="searchName">
              SEARCH
            </Typography>
          </ThemeProvider>
          <div className="CBSSearch">
            <input type="text" placeHolder="Search here" />
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
      ) : (
        ""
      )}
      {articleHeading ? (
        <div className="CBSLatestWrapper">
          <ThemeProvider theme={theme}>
            <Typography variant="h5">LATEST ARTICLE</Typography>
            {articleHeading.map((item, index) => {
              if (index < 3) {
                return (
                  <ArticleHeading article={item} sendBlog={props.sendBlog} />
                );
              }
            })}
          </ThemeProvider>
        </div>
      ) : (
        ""
      )}
      {category ? (
        <ArticleCategory
          category={category}
          name="CATEGORY"
          blogControl={props.blogControl}
          sendCard={props.sendCard}
        />
      ) : (
        ""
      )}
      {tag ? (
        <div className="CBSTagWrapper">
          <ThemeProvider theme={theme}>
            <Typography variant="h5">TAGS</Typography>
          </ThemeProvider>
          <div className="ATagWrapper">
            {tag.map((item) => {
              return (
                <NavLink
                  to="/blogSidebar"
                  style={{ textDecoration: "none" }}
                  params={`tag:${item}`}
                >
                  <div
                    className="ATag"
                    onClick={() => {
                      props.sendCard([item, "tag"]);
                      props.blogControl(item, "tag");
                    }}
                  >
                    <ThemeProvider theme={theme}>
                      <Typography variant="body1">{item}</Typography>
                    </ThemeProvider>
                  </div>
                </NavLink>
              );
            })}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CBlogSidebar;
