import React, { Component } from "react";
import "./blogsidebar.css";
import PageIntro from "../../../component/pageIntro/pageIntro";
import NewsCard from "../../../component/newsCard/newsCard";

import CBlogSidebar from "../../../component/CBlogSidebar/CBlogSidebar";
import { connect } from "react-redux";
class BlogSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: this.props.blogs,
    };
  }
  blogIdentity = (find, identity) => {
    const newBlog = [];
    this.props.blogs.map((item) => {
      if (typeof item[identity] === "object") {
        for (let i = 0; i < item[identity].length; i++) {
          if (item[identity][i] === find) {
            newBlog.push(item);
          }
        }
      } else {
        if (item[identity] === find) {
          newBlog.push(item);
        }
      }
    });
    this.setState({
      ...this.state,
      blogs: newBlog,
    });
  };
  componentDidMount() {
    setTimeout(() => {
      if (this.props.activeCard) {
        this.blogIdentity(this.props.activeCard[0], this.props.activeCard[1]);
      }
    }, 1);
  }
  render() {
    return (
      <div className="blogSidebarWrapper">
        <PageIntro
          image={this.props.pageIntro.image}
          heading={this.props.pageIntro.heading}
          body={this.props.pageIntro.body}
        />
        <div className="blogSidebarBodyWrapper">
          <div className="blogSidebarCardWrapper">
            <NewsCard newses={this.state.blogs} />
          </div>
          <div className="CBlogSidebarMain">
            <CBlogSidebar
              search={true}
              blogControl={this.blogIdentity}
              blogs={this.props.blogs}
              sendCard={this.props.sendCard}
              sendBlog={this.props.sendBlog}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pageIntro: state.pageIntro.blog,
    blogs: state.blogs,
    activeCard: state.activeBlogCard,
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
export default connect(mapStateToProps, mapDispatchToProps)(BlogSidebar);
