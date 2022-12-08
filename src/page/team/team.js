import React from "react";

import PageIntro from "../../component/pageIntro/pageIntro";
import OurTeam from "../../component/ourTeam/ourTeam";
import { connect } from "react-redux";
const Team = (props) => {
  console.log(props);
  return (
    <div>
      <PageIntro
        image={props.pageIntro.image}
        heading={props.pageIntro.heading}
        body={props.pageIntro.body}
      />
      <OurTeam team={props.team} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    team: state.team,
    pageIntro: state.pageIntro.team,
  };
};

export default connect(mapStateToProps)(Team);
