import React from "react";
import PageIntro from "../../component/pageIntro/pageIntro";
import ContactForm from "../../component/contactForm/contactForm";

import {
  responsiveFontSizes,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";

import "./projectDetails.css";
import DetailsCard from "../../component/detailsCard/detailsCard";
import Analyze from "../../component/analyze/analyze";
import PdfDownload from "../../component/pdfDownlod/pdfDownload";
import { connect } from "react-redux";
let theme = createTheme();
theme = responsiveFontSizes(theme);

/* input 
name
firstInfo
client
category
date
status
image
secondInfo
*/

const ProjectDetails = (props) => {
  console.log(props.project);
  return (
    <div className="PDWrapper">
      <PageIntro
        image={props.pageIntro.image}
        heading={props.pageIntro.heading}
        body={props.pageIntro.body}
      />
      <div className="PDBodyWrapper">
        <div className="PDInfoWrapper">
          <ThemeProvider theme={theme}>
            <Typography variant="h3">{props.project.heading}</Typography>
            <Typography variant="body1">{props.project.firstInfo}</Typography>
          </ThemeProvider>
          <div className="PDCustomerWrapper">
            <div className="PDCustomer">
              <ThemeProvider theme={theme}>
                <Typography variant="h6">CLIENT</Typography>
                <Typography variant="body1">{props.project.client}</Typography>
              </ThemeProvider>
            </div>
            <div className="PDCustomer">
              <ThemeProvider theme={theme}>
                <Typography variant="h6">CATEGORY</Typography>
                <Typography variant="body1">
                  {props.project.catagories}
                </Typography>
              </ThemeProvider>
            </div>
            <div className="PDCustomer">
              <ThemeProvider theme={theme}>
                <Typography variant="h6">DATE</Typography>
                <Typography variant="body1">{props.project.date}</Typography>
              </ThemeProvider>
            </div>
            <div className="PDCustomer">
              <ThemeProvider theme={theme}>
                <Typography variant="h6">STATUS</Typography>
                <Typography variant="body1">{props.project.status}</Typography>
              </ThemeProvider>
            </div>
          </div>
          <img src={props.project.image} className="PDImage" alt="Image" />
          <ThemeProvider theme={theme}>
            <Typography variant="body1">{props.project.secondInfo}</Typography>
          </ThemeProvider>
          <div className="PDMainCardWrapper">
            {props.project.cards.map((item) => {
              return (
                <DetailsCard
                  width={"45%"}
                  heading={item.heading}
                  info={item.info}
                  bulleting={item.bulleting}
                  image={item.image}
                />
              );
            })}
          </div>
          <Analyze
            heading={props.project.report.heading}
            details={props.project.report.details}
            point={props.project.report.point}
          />
        </div>
        <div className="PDContactWrapper">
          <ContactForm heading="CONTACT FORM" size="h5" />
          <PdfDownload heading={"DOWNLOAD PDF"} pdf={props.project.pdf} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    pageIntro: state.pageIntro.projectDetails,
    project: state.activeProject,
  };
};

export default connect(mapStateToProps)(ProjectDetails);
