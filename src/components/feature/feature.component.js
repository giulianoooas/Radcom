/* eslint-disable jsx-a11y/alt-text */
import "./feature.component.css";
import serviciu1 from "./../../assets/european-union (3).png";
import serviciu2 from "./../../assets/bus (1).png";
import serviciu3 from "./../../assets/world-grid.png";
import serviciu4 from "./../../assets/medical-checkup.png";
import serviciu5 from "./../../assets/smartphone (1).png";
import serviciu6 from "./../../assets/telecommunication.png";

export const Feature = () => {
  return (
    <section id="feature">
      <div className="container">
        <div className="row">
          <svg
            preserveAspectRatio="none"
            viewBox="0 0 100 102"
            height="100"
            width="100%"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className="svgcolor-light"
          >
            <path d="M0 0 L50 100 L100 0 Z"></path>
          </svg>
        </div>
        <div className="center">
        <h1 className="services-Title main-color reveal"><span className="dark">Our</span> Services</h1></div>
        <div className="container padz reveal">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="media wow fadeInUp" data-wow-delay="0.4s">
                <div className="display-flex">
                  <div className="media-object media-left">
                    <img src={serviciu4} className="service-logo"></img>
                  </div>
                  <div className="media-body">
                    <h2 className="media-heading">Medical</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque luctus lacus nulla, eget varius justo tristique
                      ut.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className="media wow fadeInUp" data-wow-delay="0.8s">
                <div className="display-flex">
                  <div className="media-object media-left">
                    <img src={serviciu2} className="service-logo"></img>
                  </div>
                  <div className="media-body">
                    <h2 className="media-heading">Transport</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque luctus lacus nulla, eget varius justo tristique
                      ut.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-8">
              <div className="media wow fadeInUp" data-wow-delay="1.2s">
                <div className="display-flex">
                  <div className="media-object media-left">
                    <img src={serviciu3} className="service-logo"></img>
                  </div>
                  <div className="media-body">
                    <h2 className="media-heading">Internet</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque luctus lacus nulla, eget varius justo tristique
                      ut.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container padz reveal">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="media wow fadeInUp" data-wow-delay="0.4s">
              <div className="display-flex">
                <div className="media-object media-left">
                  <img src={serviciu6} className="service-logo"></img>
                </div>
                <div className="media-body">
                  <h2 className="media-heading">Telecom</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque luctus lacus nulla, eget varius justo tristique ut.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="media wow fadeInUp" data-wow-delay="0.8s">
              <div className="display-flex">
                <div className="media-object media-left">
                  <img src={serviciu1} className="service-logo"></img>
                </div>
                <div className="media-body">
                  <h2 className="media-heading">European Programmes</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque luctus lacus nulla, eget varius justo tristique ut.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-8">
            <div className="media wow fadeInUp" data-wow-delay="1.2s">
              <div className="display-flex">
                <div className="media-object media-left">
                  <img src={serviciu5} className="service-logo"></img>
                </div>
                <div className="media-body">
                  <h2 className="media-heading">Mobile/Media</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque luctus lacus nulla, eget varius justo tristique ut.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="clearfix text-center col-md-12 col-sm-12">
            <a href="#contact" className="btn btn-default smoothScroll">
              More about Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
