import style from "./home-products.component.css";
import services from "./home-products.products.json";
import { Link } from "react-router-dom";
import Image from "../app-image/app-image-component";

export const HomeProducts = () => {
  return (
    <section id="products" style={style}>
      <div className="container">
        <div className="row">
          <svg
            className="svgcolor-light"
            preserveAspectRatio="none"
            viewBox="0 0 100 102"
            height="100"
            width="100%"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0 L50 100 L100 0 Z"></path>
          </svg>
        </div>
        <div className="center">
          <h1 className="services-Title main-color reveal">
            <span className="dark">Our</span> products
          </h1>
        </div>

        {services.map((row, idxRow) => (
          <div className="container padz reveal" key={`row${idxRow}`}>
            <div className="row">
              {row.map((service, idxService) => (
                <div
                  className="col-md-4 col-sm-6"
                  key={`row${idxRow}-service${idxService}`}
                >
                  <div className="media wow fadeInUp" data-wow-delay="0.4s">
                    <div className="display-flex">
                      <div className="media-object media-left">
                        <Image
                          fileName={service.imageUrl}
                          className="service-logo"
                          alt={service.imageAlt}
                        />
                      </div>
                      <div className="media-body">
                        <h2 className="media-heading strong-main-color">{service.serviceName}</h2>
                        <p>{service.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="clearfix text-center col-md-12 col-sm-12">
          <Link to={"/services"} className="btn btn-default smoothScroll">
            More about Our Products
          </Link>
        </div>
      </div>
    </section>
  );
};
