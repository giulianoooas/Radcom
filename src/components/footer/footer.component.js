import { Link } from "react-router-dom";
import style from "./footer.component.css";
import { SvgSpecial } from "../shared/svg-special/svg-special.component";

const Footer = () => {
  return (
    <>
      <SvgSpecial
        colors={{
          color1: "#434850",
          color2: "#fff",
          width1: 25,
          width2: 25,
        }}
      />

      <footer style={style}>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <h2>
                <strong>Radcom</strong>
              </h2>
              <div>
                <p>About Us</p>
                <p>Services</p>
                <p>News</p>
                <p> Investors</p>
                <i className="copyright-text">
                  Copyright &copy; {new Date().getFullYear()} Radcom
                </i>
              </div>
            </div>

            <div className="col-md-1 col-sm-1"></div>

            <div className="col-md-4 col-sm-5">
              <h2>
                <strong>Contact us</strong>
              </h2>
              <p>
                120-240 aliquam augue libero, Convallis in vulputate 10220 San
                Francisco, CA, USA
              </p>
              <ul className="social-icon">
                <li>
                  <Link to={"/home"}>
                    <span className="fa fa-facebook"></span>
                  </Link>
                </li>
                <li>
                  <Link to={"/home"}>
                    <span className="fa fa-twitter"></span>
                  </Link>
                </li>
                <li>
                  <Link to={"/home"}>
                    <span className="fa fa-behance"></span>
                  </Link>
                </li>
                <li>
                  <Link to={"/home"}>
                    <span className="fa fa-dribbble"></span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
