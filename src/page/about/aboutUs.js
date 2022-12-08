import React from "react";
import "./aboutUs.css";
import Testimonials from "../../component/clientMessage/clientMessage";
import PricingTable from "../../component/pricingTable/pricingTable";
import AboutUsComponent from "../../component/aboutUs/aboutUsComponent";
import PageIntro from "../../component/pageIntro/pageIntro";
import Destination from "../../component/destination/destination";
import OurService from "../../component/ourService/ourService";
import OurTeam from "../../component/ourTeam/ourTeam";

import { connect } from "react-redux";

const AboutUs = (props) => {
  return (
    <div className="aboutUsPageWrapper">
      <PageIntro
        image={props.pageIntro.image}
        heading={props.pageIntro.heading}
        body={props.pageIntro.body}
      />
      <Destination />
      <AboutUsComponent image={props.aboutUsImg} moreBtn={false} />
      <OurService
        background={true}
        cards={[
          props.serviceCard[0],
          props.serviceCard[1],
          props.serviceCard[2],
        ]}
      />
      <OurTeam team={[props.team[0], props.team[1], props.team[2]]} />
      <Testimonials />
      <PricingTable />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    pageIntro: state.pageIntro.aboutUs,
    aboutUsImg: state.AboutCImage.aboutUs,
    serviceCard: state.serviceWithImg,
    team: state.team,
  };
};

export default connect(mapStateToProps)(AboutUs);
