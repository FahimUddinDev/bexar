import React from "react";
import PageIntro from "../../component/pageIntro/pageIntro";
import OurService from "../../component/ourService/ourService";
import Testimonials from "../../component/clientMessage/clientMessage";
import PricingTable from "../../component/pricingTable/pricingTable";

import { connect } from "react-redux";
const Service1 = (props) => {
  console.log(props);
  return (
    <div>
      <PageIntro
        image={props.pageIntro.image}
        heading={props.pageIntro.heading}
        body={props.pageIntro.body}
      />
      <OurService background={false} cards={props.service} />
      <Testimonials />
      <PricingTable />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    pageIntro: state.pageIntro.service1,
    service: state.serviceWithImg,
  };
};

export default connect(mapStateToProps)(Service1);
