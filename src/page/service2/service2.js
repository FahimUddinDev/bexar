import React from "react";
import PageIntro from "../../component/pageIntro/pageIntro";
import Service from "../../component/services/service";
import Testimonials from "../../component/clientMessage/clientMessage";
import {
  faChartColumn,
  faGem,
  faGaugeHigh,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
const Service2 = (props) => {
  return (
    <div>
      <PageIntro
        image={props.pageIntro.service2.image}
        heading={props.pageIntro.service2.heading}
        body={props.pageIntro.service2.body}
      />
      <Service cards={props.service} />
      <Testimonials />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    pageIntro: state.pageIntro,
    service: state.serviceWithoutImg,
  };
};
export default connect(mapStateToProps)(Service2);
