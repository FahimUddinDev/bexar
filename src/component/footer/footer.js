import React from "react";
import "./footer.css";
import {
  ThemeProvider,
  Typography,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { faChevronRight, faCopyright } from "@fortawesome/free-solid-svg-icons";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const Footer = () => {
  return (
    <div className="footerWrapper">
      <div className="footerInfoWrapper">
        <div className="footerDes">
          <div className="footerLogo">
            <img src="./images/logo-alt.png" alt="footer Logo" />
          </div>
          <ThemeProvider theme={theme}>
            <Typography variant="body1">
              Lorem ipsum dolor amet consectetur adipisicing elit sed eiusm
              tempor incididunt ut labore dolore magna aliqua enim ad minim
              veniam quis nostrud exercitation ullamaboris nisi ut aliquip.exea
              commodo consequat. Duis aute irure dolor in reprehenderit.
              <dr />
              Deserunt mollit anim id est laborum. Sed ut perspiciatis unde
              omnis iste natus error sit voluptatem.
            </Typography>
          </ThemeProvider>
          <div className="footerSocialLink">
            <div className="footerSocialLinkHeading">
              <ThemeProvider theme={theme}>
                <Typography variant="h4">FOLLOW US ON</Typography>
              </ThemeProvider>
            </div>
            <div className="footerSocialIconWrapper">
              <div className="footerSocialIcon">
                <ThemeProvider theme={theme}>
                  <Typography variant="h6">
                    <FontAwesomeIcon icon={faFacebook} />
                  </Typography>
                </ThemeProvider>
              </div>
              <div className="footerSocialIcon">
                <ThemeProvider theme={theme}>
                  <Typography variant="h6">
                    <FontAwesomeIcon icon={faTwitter} />
                  </Typography>
                </ThemeProvider>
              </div>
              <div className="footerSocialIcon">
                <ThemeProvider theme={theme}>
                  <Typography variant="h6">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </Typography>
                </ThemeProvider>
              </div>
              <div className="footerSocialIcon">
                <ThemeProvider theme={theme}>
                  <Typography variant="h6">
                    <FontAwesomeIcon icon={faPinterest} />
                  </Typography>
                </ThemeProvider>
              </div>
            </div>
          </div>
        </div>
        <div className="footerServiceLink">
          <ThemeProvider theme={theme}>
            <Typography variant="h4">SERVICES</Typography>
            <Typography variant="body1">
              <FontAwesomeIcon icon={faChevronRight} /> Company History
            </Typography>
            <Typography variant="body1">
              <FontAwesomeIcon icon={faChevronRight} /> About Us
            </Typography>
            <Typography variant="body1">
              <FontAwesomeIcon icon={faChevronRight} /> Contact Us
            </Typography>
            <Typography variant="body1">
              <FontAwesomeIcon icon={faChevronRight} /> Services
            </Typography>
            <Typography variant="body1">
              <FontAwesomeIcon icon={faChevronRight} /> Privacy Policy
            </Typography>
          </ThemeProvider>
        </div>
        <div className="footerContact">
          <ThemeProvider theme={theme}>
            <Typography variant="h4">CONTACT INFO</Typography>
            <Typography variant="body1">
              9567 Turner Trace Apt.466 North Willie, BC C3G8A4
            </Typography>
            <Typography variant="body1">+21 123 456 5523</Typography>
            <Typography variant="body1">info@bexar.com</Typography>
          </ThemeProvider>
        </div>
        <div className="footerSubscribe">
          <ThemeProvider theme={theme}>
            <Typography variant="h4">SUBSCRIBE NEWSLETTER</Typography>
          </ThemeProvider>
          <div className="footerSubscribeBox">
            <input type="text" placeholder="Enter your email" />
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <div className="copyright">
        <ThemeProvider theme={theme}>
          <div>
            <Typography variant="body1">
              <span>Bexar</span> <FontAwesomeIcon icon={faCopyright} /> All
              Right Reserved
            </Typography>
          </div>
          <div>
            <Typography variant="body1">
              Terms of Service | Privacy Policy
            </Typography>
          </div>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Footer;
