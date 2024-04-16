import { useState, useEffect } from "react";
import "./landing.component.css";
import slide1 from "./../../assets/slide-1.jpg";
import slide2 from "./../../assets/slide-2.jpg";

export const Landing = () => {
  const slideImages = [slide1, slide2];
  const [currentSlideIdx, setCurrentSlideIdx] = useState(0);
  let lastIdx = 0;

  useEffect(() => {
    const timer = setInterval(() => {
      lastIdx = (lastIdx + 1) % slideImages.length;
      setCurrentSlideIdx(lastIdx);
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <section id="home">
      <img
        src={slideImages[currentSlideIdx]}
        alt="slide image"
        className="slide-image"
      />
      <div className="container home-container">
        <div className="row">
          <div className="col-md-offset-2 col-md-8 col-sm-12">
            <div className="home-thumb">
              <h1 className="wow fadeInUp background" data-wow-delay="0.4s">
                Hello, we are <span className="main-color">Radcom</span>
              </h1>
              <h3 className="wow fadeInUp background" data-wow-delay="0.6s">
                Lorem ipsum <strong>dolor lorem</strong> ipsum{" "}
                <strong>dolor lorem</strong> ipsum
              </h3>
              <a
                href="/"
                data-toggle="modal"
                data-target="#modal1"
                className="btn btn-lg btn-success smoothScroll wow fadeInUp"
                data-wow-delay="1.0s"
              >
                About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
