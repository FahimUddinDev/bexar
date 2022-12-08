import React from "react";
import PageIntro from "../../component/pageIntro/pageIntro";
import ContactForm from "../../component/contactForm/contactForm";
import PdfDownload from "../../component/pdfDownlod/pdfDownload";
import Analyze from "../../component/analyze/analyze";
import DetailsCard from "../../component/detailsCard/detailsCard";
import { ArticleCategory } from "../../component/CBlogSidebar/CBlogSidebar";
import {
  responsiveFontSizes,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";
import "./serviceDetails.css";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
let theme = createTheme();
theme = responsiveFontSizes(theme);
const ServiceDetails = (props) => {
  const location = useLocation();
  /*
name
firstInfo
image
secondInfo
card
*/
  let service = props.service.map((item) => {
    return item.name;
  });
  return (
    <div className="serviceDetailsWrapper">
      <PageIntro
        image={props.pageIntro.image}
        heading={props.pageIntro.heading}
        body={props.pageIntro.body}
      />
      <div className="SDBodyWrapper">
        <div className="SDInfoWrapper">
          <ThemeProvider theme={theme}>
            <Typography variant="h3">{props.activeService.name}</Typography>
            <Typography variant="body1">
              {props.activeService.firstInfo}
            </Typography>
          </ThemeProvider>

          <img
            src={props.activeService.image}
            className="PDImage"
            alt="Image"
          />
          <ThemeProvider theme={theme}>
            <Typography variant="body1">
              {props.activeService.secondInfo}
            </Typography>
          </ThemeProvider>
          {props.activeService.card.map((item) => {
            return (
              <DetailsCard
                heading={item.heading}
                info={item.info}
                bulleting={item.bulleting}
                image={item.image}
              />
            );
          })}
          <Analyze
            heading={props.activeService.analyze.heading}
            details={props.activeService.analyze.details}
            point={props.activeService.analyze.point}
          />
        </div>
        <div className="SDContactWrapper">
          <ArticleCategory
            item={props.service}
            category={service}
            path="/serviceDetails"
            name="OUR SERVICES"
            activeService={props.activeServiceSet}
          />
          <ContactForm heading="QUICK CONTACT" size="h5" />
          <PdfDownload
            heading={"DOWNLOAD PDF"}
            pdf={[
              { name: "Market Growth.pdf", size: "1.53 mb" },
              { name: "Market Growth.pdf", size: "1.53 mb" },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    pageIntro: state.pageIntro.serviceDetails,
    activeService: state.activeService,
    service: state.serviceWithImg,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    activeServiceSet: (id) => {
      dispatch({ type: "activeService", payload: id });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ServiceDetails);
