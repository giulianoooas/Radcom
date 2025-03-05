import style from "./home-feature.component.css";
import serviceConfig from "./../../../models/services.json";
import { Link } from "react-router-dom";
import Image from "../../shared/app-image/app-image-component";
import { SvgSpecial } from "../../shared/svg-special/svg-special.component";

export const HomeFeature = () => {
  const services = [serviceConfig.values.slice(0, 3)];

  return (
    <>
      <SvgSpecial
        colors={{
          color1: "#d1cd4d",
          color2: "#fff",
          width1: 5,
          width2: 45,
        }}
      />

      <section id="feature" style={style}>
        <div className="features-container">
          <div className="center">
            <h1 className="services-Title main-color reveal">
              <span className="dark">Our</span> Services
            </h1>
          </div>

          {services.map((row, idxRow) => (
            <div
              className="padz reveal home-feature-components-container"
              key={`row${idxRow}`}
            >
              <div className="home-service-container-row">
                {row.map((service, idxService) => (
                  <div
                    className="on-hover home-service-container-row-element"
                    key={`row${idxRow}-service${idxService}`}
                  >
                    <div className="media wow fadeInUp" data-wow-delay="0.4s">
                      <div className="display-flex">
                        <div className="media-object media-left">
                          <Image
                            fileName={service.imgSrc}
                            className="service-logo"
                          />
                        </div>
                        <div className="media-body">
                          <h2 className="media-heading">
                            <b>{service.name}</b>
                          </h2>
                          <p>{service.description}</p>
                        </div>
                      </div>
                      <div className="clearfix text-center col-md-12 col-sm-12 button">
                        <Link
                          to={`/services/${service.id}`}
                          className="btn smoothScroll"
                        >
                          Read more...
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="clearfix text-center col-md-12 col-sm-12">
            <Link to={"/services"} className="btn btn-default smoothScroll">
              More about Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
