import { useState, useEffect } from "react";
import style from "./home-landing.component.css";
import slide1 from "./../../../assets/slide-1.jpg";
import slide2 from "./../../../assets/slide-2.jpg";
import { Link } from "react-router-dom";

export const HomeLanding = () => {
  const defaultClass = "slide-image";
  const slideImages = [slide1, slide2];
  const [imagesClasses, setImageClasses] = useState([
    defaultClass,
    `${defaultClass} hidden`,
  ]);
  let lastIdx = 0;

  useEffect(() => {
    const timer = setInterval(() => {
      const newImagesClasses = [];
      slideImages.forEach(() => newImagesClasses.push(defaultClass));
      newImagesClasses[lastIdx] = `${defaultClass} hidden`;
      lastIdx = (lastIdx + 1) % slideImages.length;
      newImagesClasses[lastIdx] = `${defaultClass} shown`;
      setImageClasses(newImagesClasses);
    }, 6000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <section id="home" style={style}>
      <div className="landing-home-blank"></div>
      <img src={slideImages[0]} alt="slide 1" className={imagesClasses[0]} />
      <img src={slideImages[1]} alt="slide 2" className={imagesClasses[1]} />

      <div className="container landing-container">
        <div className="home-thumb landing-interior-container">
          <h1 className="wow fadeInUp background" data-wow-delay="0.4s">
            <span className="main-color">Radcom</span>
          </h1>
          <h3 className="wow fadeInUp background" data-wow-delay="0.6s">
            <strong>Hardware</strong> and <strong>software</strong> solutions{" "}
            for <strong>public transport</strong> needs
          </h3>
          <Link
            to={"/home"}
            data-toggle="modal"
            data-target="#modal1"
            className="btn btn-lg btn-success smoothScroll wow fadeInUp"
            data-wow-delay="1.0s"
          >
            About Us
          </Link>
        </div>
      </div>
    </section>
  );
};
