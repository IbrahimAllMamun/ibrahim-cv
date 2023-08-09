import React from "react";
import CTA from "./cta";
import Social from "./social";
import ImageCarousel from "./image-carousel";
import image1 from "../images/image-url-1.jpg";
import image2 from "../images/image-url-2.jpg";
import image3 from "../images/image-url-3.jpg";
import image4 from "../images/image-url-4.jpg";
import image5 from "../images/image-url-5.jpg";

const images = [image1, image2, image3, image4, image5];
const Hero = () => {
  return (
    <React.Fragment>
      <div className="hero">
        <div className="cover">
          <ImageCarousel images={images} interval={3000} />
        </div>
        <div className="info">
          <div className="info-box">
            <img src={require("../images/profile.jpg")} alt="profile" />
            <h1>Ibrahim All-Mamun</h1>
            <p className="role">Front-end Developer</p>
            <Social />
          </div>
        </div>
        <CTA className="cta-comp" />
      </div>
    </React.Fragment>
  );
};

export default Hero;
