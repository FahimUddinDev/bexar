import React from "react";
import {
  responsiveFontSizes,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import "./pdfDownload.css";

let theme = createTheme();
theme = responsiveFontSizes(theme);

/* input
heading
pdf[{name, size}]

*/

const PdfDownload = (props) => {
  try {
    return (
      <div className="DownloadWrapper">
        <ThemeProvider theme={theme}>
          <Typography variant="h4">{props.heading}</Typography>
          {props.pdf.map((item) => {
            return (
              <div className="downloadPdf">
                <div className="DPRight">
                  <Typography variant="h3">
                    <FontAwesomeIcon icon={faFilePdf} />
                  </Typography>
                  <div className="DPRName">
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography variant="h6">{item.size}</Typography>
                  </div>
                </div>
                <div className="DPLeft">
                  <Typography variant="h4">
                    <FontAwesomeIcon icon={faDownload} />
                  </Typography>
                </div>
              </div>
            );
          })}
        </ThemeProvider>
      </div>
    );
  } catch (error) {}
};

export default PdfDownload;
