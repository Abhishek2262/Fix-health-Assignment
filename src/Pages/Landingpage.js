import React from "react";
import Navbar from "../Component/Navbar";
import Background from "../Photo/national-cancer-institute-NFvdKIhxYlU-unsplash.jpg";
import "../Style/Landingpage.css";
import Form from "../Component/Form";
import Footer from "../Component/Footer";
import Carousel from "../Component/Carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Show from "../Component/Show";
import Carouselreview from "../Component/Carouselreview";
const Landingpage = () => {
  return (
    <>
      <Navbar />
      <div className="cnt-root">
        <div className="cnt">
          <div
            className="left-cnt"
            style={{ backgroundImage: `url(${Background})` }}
          >
            <h1>Qualified Doctors and Modern Facilities</h1>
            <p>Primary Care and Specialists Where You Need Them</p>
          </div>
          <div className="right-cnt">
            <Form />
          </div>
        </div>
        <div className="landing-body">
          <div className="slider-cnt-body">
            <Carousel />
          </div>
        </div>
        <Show />
        <div className="review-cnt">
          <Carouselreview/>
        </div>
        
        <div className="footer-cnt">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Landingpage;
