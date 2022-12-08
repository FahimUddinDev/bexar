import React, { Component } from "react";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocation,
  faPhone,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import {
  responsiveFontSizes,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";
import PageIntro from "../../component/pageIntro/pageIntro";
import ContactForm from "../../component/contactForm/contactForm";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const ContactCard = (props) => {
  return (
    <div className="contactCard">
      <ThemeProvider theme={theme}>
        <Typography variant="h3">
          <FontAwesomeIcon icon={props.contact.icon} />
        </Typography>
        <Typography variant="h5">{props.contact.name}</Typography>
        {props.contact.description.map((item) => {
          return <Typography variant="body1"> {item}</Typography>;
        })}
      </ThemeProvider>
    </div>
  );
};

const Contact = () => {
  const ourAddress = [
    {
      icon: faLocation,
      name: "OUR ADDRESS",
      description: ["92214-291, Avenida Emília Ferreira, 043 Vila Irene - MA"],
    },
    {
      icon: faPhone,
      name: "Phone number",
      description: ["(003) 104-6706-231", "(003)104-6706-232"],
    },
    {
      icon: faMessage,
      name: "Message Us",
      description: ["info@bexar.com ", "info@example.com"],
    },
  ];
  return (
    <div className="ContactWrapper">
      <PageIntro
        image="images/page-title.jpg"
        heading="OUR BLOG"
        body="Home/blog"
      />
      <div className="contactCardWrapper">
        {ourAddress.map((item) => {
          return <ContactCard contact={item} />;
        })}
      </div>
      <div className="ContactLocationWrapper">
        <div class="location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.472765614904!2d90.40518361425404!3d23.730514895454164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8f12ee18353%3A0x7df859160c50520d!2sAsiamed!5e0!3m2!1sen!2sbd!4v1640948859247!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="CFWrapper">
          <ContactForm heading="CONTACT FORM" size="h3" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
