import React from "react";
import "./blog.css";
import NewsCard from "../../../component/newsCard/newsCard";
import PageIntro from "../../../component/pageIntro/pageIntro";
import { connect } from "react-redux";
const Blog = (props) => {
  return (
    <div className="blogWrapper">
      <PageIntro
        image={props.pageIntro.image}
        heading={props.pageIntro.heading}
        body={props.pageIntro.body}
      />
      <NewsCard newses={props.blogs} />
    </div>
  );
};

const mapstateToProps = (state) => {
  return {
    pageIntro: state.pageIntro.blog,
    blogs: state.blogs,
  };
};

export default connect(mapstateToProps)(Blog);
