import { Link } from "react-router-dom";
import style from "./footer.component.css";
import { SvgSpecial } from "../shared/svg-special/svg-special.component";
import Image from "./../shared/app-image/app-image-component";

const Footer = () => {
  const mail = "office@radcom.ro";
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
                <div className="footer-link">
                  <Link to={"/services"}>Services</Link>
                </div>
                <div className="footer-link">
                  <Link to={"/products"}>Products</Link>
                </div>
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
              <div className="footer-contact-detailed">
                Radcom S.A. <br />
                Strada George Constantinescu, nr. 2C, Etaj 5 & 6, <br />
                Cod: 20339, Sector 2, Bucuresti, Romania <br />
                fon: <br />
                Et.6: +40-21-232.10.39 sau +40-31-824.40.00 <br />
                Et.5:+40-21-233.03.88 <br />
                Fax: <br />
                Et.6:+40-21-232.10.68 <br />
                Et.5:+40-21-233.03.87 <br />
                E-mail:
                <a href={`mailto:${mail}`}>{mail}</a> <br />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
