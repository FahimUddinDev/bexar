import React from "react";
import "./Home.css";
import Slider from "../../component/slider/Slider";
import Service from "../../component/services/service";
import WhyThey from "../../component/whyThey/whyThey";
import ExprienceCounter from "../../component/exprienceCounter/ExprienceCounter";
import PricingTable from "../../component/pricingTable/pricingTable";
import Testimonials from "../../component/clientMessage/clientMessage";
import NewsCard from "../../component/newsCard/newsCard";
import AboutUsComponent from "../../component/aboutUs/aboutUsComponent";
import { connect } from "react-redux";
const Home = (props) => {
  return (
    <div className="home">
      <Slider slides={props.slides} autoplay={true} delay={5} />
      <Service
        cards={[
          props.serviceCards[0],
          props.serviceCards[1],
          props.serviceCards[2],
          props.serviceCards[3],
        ]}
        serviceBtn={true}
      />
      <AboutUsComponent
        image={props.aboutUsImage}
        style={"-35%"}
        moreBtn={true}
      />
      <WhyThey />
      <ExprienceCounter />
      <PricingTable />
      <Testimonials />
      <NewsCard
        bullet={true}
        heading1={"LatestNews"}
        heading2={"LEARN FROM BEXAR"}
        newses={[props.newses[0], props.newses[1], props.newses[2]]}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    slides: state.slider,
    serviceCards: state.serviceWithoutImg,
    aboutUsImage: state.AboutCImage.home,
    newses: state.blogs,
  };
};

export default connect(mapStateToProps)(Home);
