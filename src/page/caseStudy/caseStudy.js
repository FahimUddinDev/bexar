import React, { Component } from "react";
import PageIntro from "../../component/pageIntro/pageIntro";
import {
  responsiveFontSizes,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRemove } from "@fortawesome/free-solid-svg-icons";
import "./caseStudy.css";
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";
let theme = createTheme();
theme = responsiveFontSizes(theme);

class CaseStudy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      case: this.props.project,
      active: "all",
      modalImage: "",
      modal: "none",
      menu: this.props.projectMenu,
    };
    this.buttonChanger = this.buttonChanger.bind(this);
  }
  buttonChanger = (event) => {
    this.setState({
      ...this.state,
      active: event.target.name,
    });
  };
  modalImageSet = (event) => {
    this.setState({
      ...this.state,
      modalImage: event.target.id,
      modal: "flex",
    });
  };
  modalCloser = () => {
    this.setState({
      ...this.state,
      modal: "none",
    });
  };
  render() {
    return (
      <div className="caseStudyMainDiv">
        <div className="caseModal" style={{ display: this.state.modal }}>
          <button onClick={this.modalCloser}>
            <FontAwesomeIcon icon={faRemove} />
          </button>
          <div className="modalImage">
            <img src={this.state.modalImage} alt="image" />
          </div>
        </div>
        <PageIntro
          image={this.props.pageIntro.image}
          heading={this.props.pageIntro.heading}
          body={this.props.pageIntro.body}
        />
        <div className="caseStudyWrapper">
          <div className="caseMenuWrapper">
            {this.state.menu.map((item) => {
              let name = item.toUpperCase();
              let menuName = "";
              for (let i = 0; i < name.length; i++) {
                if (name[i] == "_") {
                  menuName += " ";
                } else {
                  menuName += name[i];
                }
              }
              return (
                <button
                  name={item}
                  className={
                    this.state.active === item
                      ? "caseMenuBtn btnActive"
                      : "caseMenuBtn"
                  }
                  onClick={this.buttonChanger}
                >
                  {menuName}
                </button>
              );
            })}
          </div>
          <div className="caseCardWrapper">
            {this.state.case.map((item) => {
              if (this.state.active === "all") {
                return (
                  <div className="caseCard">
                    <div className="CCImageWrapper">
                      <img src={`${item.image}`} alt="Image" />
                      <div
                        className="CCOverlay"
                        id={item.image}
                        onClick={(event) => this.modalImageSet(event)}
                      >
                        <h1 id={item.image}>+</h1>
                      </div>
                    </div>
                    <div
                      className="CCNameWrapper"
                      onClick={() => {
                        this.props.sendProject(item.id);
                      }}
                    >
                      <NavLink
                        to={"/projectDetails"}
                        style={{ textDecoration: "none" }}
                      >
                        <ThemeProvider theme={theme}>
                          <Typography variant="body1" className="CSNBody">
                            {item.name}
                          </Typography>
                          <Typography variant="h5" className="CSNHeading">
                            {item.heading}
                          </Typography>
                        </ThemeProvider>
                      </NavLink>
                    </div>
                  </div>
                );
              } else if (this.state.active === item.catagories) {
                return (
                  <div className="caseCard">
                    <div className="CCImageWrapper">
                      <img src={`${item.image}`} alt="Image" />
                      <div
                        className="CCOverlay"
                        id={item.image}
                        onClick={(event) => this.modalImageSet(event)}
                      >
                        <h1 id={item.image}>+</h1>
                      </div>
                    </div>
                    <div
                      className="CCNameWrapper"
                      onClick={() => {
                        this.props.sendProject(item.id);
                      }}
                    >
                      <NavLink
                        to={"/projectDetails"}
                        style={{ textDecoration: "none" }}
                      >
                        <ThemeProvider theme={theme}>
                          <Typography variant="body1" className="CSNBody">
                            {item.name}
                          </Typography>
                          <Typography variant="h5" className="CSNHeading">
                            {item.heading}
                          </Typography>
                        </ThemeProvider>
                      </NavLink>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    project: state.projects,
    pageIntro: state.pageIntro.caseStudy,
    projectMenu: state.projectMenu,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    sendProject: (project) => {
      dispatch({ type: "activeProject", payload: project });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CaseStudy);
