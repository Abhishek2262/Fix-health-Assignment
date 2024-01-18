import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Img_5S from "../Photo/5s.png";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Cardreview from "./Cardreview";
import Img_4s from "../Photo/4s.png";
import Img_3s from "../Photo/3s.png";

function Carouselreview() {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={3}
    >
      <Slider className="slider-cnt">
        <Slide index={0}>
          <div className="slide-1">
            <Cardreview revi_img={Img_5S}/>
            <Cardreview  revi_img={Img_4s}/>
            <Cardreview revi_img={Img_3s}/>
          </div>
        </Slide>
        <Slide index={1}>
          <div className="slide-1">
            <Cardreview />
            <Cardreview />
            <Cardreview />
          </div>
        </Slide>
        <Slide index={2}>
          <div className="slide-1">
            <Cardreview />
            <Cardreview />
            <Cardreview />
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

export default Carouselreview;
