import style from "./home-about.component.css";
import aboutImage from "./../../assets/about-img.png";

export const HomeAbout = () => {
  return (
    <section id="about" style={style}>
      <div className="container reveal about-section-container">
        <div>
          {/* <div className="col-md-6 col-sm-12 image-container">
            <img
              src={aboutImage}
              className="img-responsive wow fadeInUp"
              alt="About"
            ></img>
          </div> */}

          <div className="text-container">
            <div className="about-thumb">
              <div className="section-title">
                <h1 className="wow fadeIn" data-wow-delay="0.2s">
                  Who is <span className="main-color">Radcom</span>
                </h1>
              </div>
              <div className="wow fadeInUp" data-wow-delay="0.6s">
                <h2 className="wow fadeInUp" data-wow-delay="0.4s">
                  Top 3 biggest{" "}
                  <span className="main-color">
                    <b>technology companies</b>
                  </span>{" "}
                  in Romania
                </h2>
                <p>
                  <span className="main-color">Radcom</span> has developed and
                  deployed end to end solutions, both hardware and software, for
                  fleet management and passenger information for more than 15
                  years.
                </p>
                <h2 className="wow fadeInUp" data-wow-delay="0.4s">
                  <span className="main-color">
                    <b>Radcom</b>
                  </span>{" "}
                  takes care of everything
                </h2>
                <p>
                  To manage your <b>transport operations</b>. From{" "}
                  <b>e-ticketing and fleet management </b>to{" "}
                  <b>real-time passenger information and payment solutions</b>,
                  we provide a seamlessly integrated ecosystem that ensures
                  efficiency, security, and ease of use. With <b>RADCOM</b>, you
                  get a single, reliable partner for all your{" "}
                  <b>public transport technology needs</b>
                </p>
                <h2 className="wow fadeInUp" data-wow-delay="0.4s">
                  For example..
                </h2>
                <p>
                  RADCOM collaborated with{" "}
                  <b>STB (Societatea de Transport București</b>), the public
                  transportation operator in Bucharest, to implement a fully
                  integrated solution for their transport network. This included
                  the <b>OptiFare e-ticketing system</b>, which streamlined fare
                  collection and allowed passengers to easily purchase and
                  validate tickets through mobile apps, contactless cards, and
                  vending machines. Additionally, RADCOM deployed the{" "}
                  <b>Fleet fleet management system</b>i, enabling real-time
                  vehicle tracking, route optimization, and improved dispatching
                  processes. The result was a more efficient, user-friendly
                  public transport system that significantly enhanced the
                  commuter experience while optimizing operational efficiency
                  for STB.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 image-container">
          <img
            src={aboutImage}
            className="home-about-img-responsive wow fadeInUp"
            alt="About"
          ></img>
        </div>
      </div>
    </section>
  );
};
