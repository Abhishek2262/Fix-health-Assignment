import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Doctorcnt from "./Doctorcnt";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import "../Style/Carousel.css";

function Carousel() {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={3}
    >
      <Slider className="slider-cnt">
        <Slide index={0}>
          <div className="slide-1">
            <Doctorcnt />
            <Doctorcnt />
            <Doctorcnt />
          </div>
        </Slide>
        <Slide index={1}>
          <div className="slide-1">
            <Doctorcnt />
            <Doctorcnt />
            <Doctorcnt />
          </div>
        </Slide>
        <Slide index={2}>
          <div className="slide-1">
            <Doctorcnt />
            <Doctorcnt />
            <Doctorcnt />
          </div>
        </Slide>
      </Slider>
      <div className="slid-btn-cnt">
        <ButtonBack className="back-btn">
          <IoIosArrowBack />
        </ButtonBack>
        <ButtonNext className="nxt-btn">
          <IoIosArrowForward />
        </ButtonNext>
      </div>
    </CarouselProvider>
  );
}

export default Carousel;
