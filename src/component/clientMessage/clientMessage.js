import React, { useState } from "react";
import "./clientMessage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Bullet from "../bullet/bullet";
import {
  ThemeProvider,
  Typography,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
let theme = createTheme();
theme = responsiveFontSizes(theme);

const client = [
  {
    name: "Dominic Allen",
    image: "images/client-1.jpg",
    post: "Designer",
    message:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you aregoing to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  },
  {
    name: "David Murkus",
    image: "images/client-2.jpg",
    post: "Designer",
    message:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you aregoing to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  },
  {
    name: "Leohadret Leo",
    image: "images/client-3.jpg",
    post: "Designer",
    message:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you aregoing to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  },
];

const Testimonials = (props) => {
  const [margin, setMargin] = useState(100);
  const [transition, setTransition] = useState(1);
  const [slidestatus, setSlideStatus] = useState(true);

  const moveLeft = () => {
    if (margin < (client.length + 1) * 100) {
      setMargin(margin + 100);
      setTransition(1);
      if (margin > (client.length - 1) * 100) {
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
        setMargin(client.length * 100);
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
          className="imgPaginationRadio"
          value={value}
          checked={value === margin}
          onChange={(element) => {
            onValueChange(element);
          }}
          style={{
            backgroundImage: `url(${element.image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
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
    autoMove(4, true);
  }
  // Description making
  const DescriptionMaker = (props) => {
    return (
      <div className={`clientDataWrapper`}>
        <div className="clientData">
          <ThemeProvider theme={theme}>
            <Typography paragraph="true">
              {props.description.message}
            </Typography>
            <Typography variant="h4">{props.description.name}</Typography>
            <Typography variant="h6">{props.description.post}</Typography>
          </ThemeProvider>
        </div>
      </div>
    );
  };

  const SlideMaker = (props) => {
    return (
      <div className="slide" key={Math.random()}>
        <DescriptionMaker description={props.description} key={Math.random()} />
      </div>
    );
  };
  return (
    <div className="clientMessage">
      <div className="testimonialWrapper">
        <Bullet color="rgb(134, 195, 58)" />
        <ThemeProvider theme={theme}>
          <Typography variant="h5">Testimonials</Typography>
          <Typography variant="h2">WHAT CLIENTS ARE SAY</Typography>
        </ThemeProvider>
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
            <DescriptionMaker description={client[client.length - 1]} />
          </div>
          {/* making main slide  */}
          {client.map((item, index) => {
            return <SlideMaker key={index} description={item} />;
          })}
          {/* make last child for smooth moving */}
          <div className="slide">
            <DescriptionMaker description={client[0]} />
          </div>
          <div className="slideSwitch slideSwitchRight" onClick={moveRight}>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
        <div className="imgPagination">
          <Pagination slideArray={client} />
        </div>
        <div className="imgPaginationBG "></div>
      </div>
    </div>
  );
};

export default Testimonials;
