import { Link } from "react-router-dom";
import style from "./footer.component.css";

export const Footer = () => {
  return (
    <footer style={style}>
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

          <div className="col-md-4 col-sm-6">
            <h2>
              <strong>Radcom</strong>
            </h2>
            <div className="wow fadeInUp" data-wow-delay="0.3s">
              <p>About Us</p>
              <p>Services</p>
              <p>News</p>
              <p> Investors</p>
              <i className="copyright-text">
                Copyright &copy; 2024 Your Company{" "}
              </i>
            </div>
          </div>

          <div className="col-md-1 col-sm-1"></div>

          <div className="col-md-4 col-sm-5">
            <h2>
              <strong>Contact us</strong>
            </h2>
            <p className="wow fadeInUp" data-wow-delay="0.6s">
              120-240 aliquam augue libero, Convallis in vulputate 10220 San
              Francisco, CA, USA
            </p>
            <ul className="social-icon">
              <li>
                <Link to={"/home"}>
                  <span
                    className="fa fa-facebook wow bounceIn"
                    data-wow-delay="0.9s"
                  ></span>
                </Link>
              </li>
              <li>
                <Link to={"/home"}>
                  <span
                    className="fa fa-twitter wow bounceIn"
                    data-wow-delay="1.2s"
                  ></span>
                </Link>
              </li>
              <li>
                <Link to={"/home"}>
                  <span
                    className="fa fa-behance wow bounceIn"
                    data-wow-delay="1.4s"
                  ></span>
                </Link>
              </li>
              <li>
                <Link to={"/home"}>
                  <span
                    className="fa fa-dribbble wow bounceIn"
                    data-wow-delay="1.6s"
                  ></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
