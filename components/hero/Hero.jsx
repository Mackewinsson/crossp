import React from "react";
import Social from "../Social";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import shapeImage from "../../public/img/hero/1.jpg";
import heroImage from "../../public/img/hero/2.jpg";
import light from "../../public/img/logo/light.png";
const heroContent = {
  shapeImage: shapeImage,
  heroImage: heroImage,
  description: `At CROSSP, we build high-performance, scalable applications that work flawlessly across Android, iOS, and the Web. Our expertise in React Native, Expo, and Progressive Web Apps (PWAs) ensures businesses can reach their users on any device with a single, powerful solution.`,
};

const Hero = () => {
  return (
    //    HERO
    <div className="edina_tm_hero" id="home">
      <div className="content">
        <div className="img-shape" data-aos="fade-up" data-aos-duration="1200">
          <Image src={light} alt="brand" />
        </div>
        <div className="extra">
          <h5
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
            className="hello"
          >
            🚀 Seamless Digital Experiences, Everywhere
          </h5>
          <h1
            className="name"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <span className="typer-toper">
              <TypeAnimation
                sequence={[
                  "iOS",
                  2000,
                  "Android", 
                  2000,
                  "Web",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                style={{ display: 'inline-block' }}
                repeat={Infinity}
                cursor={true}
              />
            </span>
          </h1>
          <p
            className="text"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            {heroContent.description}
          </p>
          {/* 
          <div
            className="social"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="400"
          >
            <Social />
          </div> */}
        </div>
      </div>
    </div>
    // /HERO
  );
};

export default Hero;
