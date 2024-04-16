/* eslint-disable jsx-a11y/anchor-has-content */
import "./footer.component.css";

export const Footer = () => {
  return (
    <footer>
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
              <p className="copyright-text">
                Copyright &copy; 2024 Your Company{" "}
              </p>
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
                <a
                  href="/"
                  className="fa fa-facebook wow bounceIn"
                  data-wow-delay="0.9s"
                ></a>
              </li>
              <li>
                <a
                  href="/"
                  className="fa fa-twitter wow bounceIn"
                  data-wow-delay="1.2s"
                ></a>
              </li>
              <li>
                <a
                  href="/"
                  className="fa fa-behance wow bounceIn"
                  data-wow-delay="1.4s"
                ></a>
              </li>
              <li>
                <a
                  href="/"
                  className="fa fa-dribbble wow bounceIn"
                  data-wow-delay="1.6s"
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
