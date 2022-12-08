import React, { useState } from "react";
import "./Slider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useResponsiveFontSize } from "react-responsive-font-size";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
  Typography,
} from "@mui/material";
import Bullet from "../bullet/bullet";
let theme = createTheme();
theme = responsiveFontSizes(theme);
const Slider = (props) => {
  const [margin, setMargin] = useState(100);
  const [transition, setTransition] = useState(1);
  const [slidestatus, setSlideStatus] = useState(true);

  // responsive font
  const fontSliderButton = useResponsiveFontSize(0.5, {
    setFontSize: true,
    globalVariableName: "--my-variable",
    lockFontSize: false,
  });
  const moveLeft = () => {
    if (margin < (props.slides.length + 1) * 100) {
      setMargin(margin + 100);
      setTransition(1);
      if (margin > (props.slides.length - 1) * 100) {
        setTimeout(() => {
          setTransition(0);
          setMargin(100);
        }, 1000);
      }
    }
  };

  // arrow mover
  const moveRight = () => {
    if (margin <= 100) {
      setMargin(0);
      setTimeout(() => {
        setMargin(props.slides.length * 100);
        setTransition(0);
      }, 1000);
    } else {
      setMargin(margin - 100);
      setTransition(1);
    }
  };
  // Pagination mover
  function onValueChange(event) {
    setMargin(event.target.value);
  }

  //pagination Making
  const Pagination = (slideArray) => {
    const pagination = slideArray.slideArray.map((element, index) => {
      const value = (index + 1) * 100;
      return (
        <input
          key={index}
          type="radio"
          name="slidePagination"
          className="paginationRadio"
          value={value}
          checked={value === margin}
          onChange={(element) => {
            onValueChange(element);
          }}
        />
      );
    });
    return pagination;
  };
  // Auto move timer
  const autoMoveTimer = () => {
    const date = new Date();
    let second = date.getSeconds();
    return second;
  };

  const autoMove = (delay, status) => {
    if (status) {
      if (autoMoveTimer() % delay === 0) {
        setTimeout(() => {
          moveLeft();
        }, delay * 1000);
      } else {
        setTimeout(() => {
          autoMove(delay, status);
        }, 1000);
      }
    }
  };
  if (slidestatus) {
    autoMove(props.delay, props.autoplay);
  }
  // Description making
  const DescriptionMaker = (props) => {
    console.log(props);
    if (props.description) {
      return (
        <div className="slideDescription">
          <ThemeProvider theme={theme}>
            <Typography variant="h5">
              <Bullet color="white" /> {props.description.firstHeading}
            </Typography>
            <Typography variant="h3">
              {props.description.secondHeading}
            </Typography>
            <Typography variant="body2">{props.description.body}</Typography>
            <Typography variant="h6">
              <button ref={fontSliderButton} className="sliderButton button">
                See More
              </button>
            </Typography>
          </ThemeProvider>
        </div>
      );
    }
  };

  const SlideMaker = (props) => {
    return (
      <div className="slide" key={Math.random()}>
        <DescriptionMaker description={props.description} key={Math.random()} />
        <img src={props.image} alt={"no"} />
      </div>
    );
  };

  return (
    <div
      className="slider"
      onMouseOver={() => {
        setSlideStatus(false);
      }}
      onMouseOut={() => {
        setSlideStatus(true);
      }}
    >
      <div className="slideSwitch slideSwitchLeft" onClick={moveLeft}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
      {/* make first child for smooth moving  */}
      <div
        className="slide"
        style={{ marginLeft: `-${margin}%`, transition: `${transition}s` }}
      >
        <DescriptionMaker
          description={props.slides[props.slides.length - 1].description}
        />
        <img
          src={props.slides[props.slides.length - 1].image}
          alt="first Banner"
        />
      </div>
      {/* making main slide  */}
      {props.slides.map((item, index) => {
        return (
          <SlideMaker
            image={item.image}
            key={index}
            description={item.description}
          />
        );
      })}
      {/* make last child for smooth moving */}
      <div className="slide">
        <DescriptionMaker description={props.slides[0].description} />
        <img src={props.slides[0].image} alt="first Banner" />
      </div>
      <div className="slideSwitch slideSwitchRight" onClick={moveRight}>
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
      <div className="pagination">
        <Pagination slideArray={props.slides} />
      </div>
    </div>
  );
};

export default Slider;
