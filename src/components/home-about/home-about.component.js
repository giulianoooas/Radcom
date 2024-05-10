import style from "./home-about.component.css";
import aboutImage from "./../../assets/about-img.png";

export const HomeAbout = () => {
  return (
    <section id="about" style={style}>
      <div className="container reveal about-section-container">
        <div className="row">
          <div className="col-md-6 col-sm-12 image-container">
            <img
              src={aboutImage}
              className="img-responsive wow fadeInUp"
              alt="About"
            ></img>
          </div>

          <div className="col-md-6 col-sm-12 text-container">
            <div className="about-thumb">
              <div className="section-title">
                <h1 className="wow fadeIn" data-wow-delay="0.2s">
                  Who is <span className="main-color">Radcom</span>
                </h1>
              </div>
              <div className="wow fadeInUp" data-wow-delay="0.6s">
                <h2 className="wow fadeInUp" data-wow-delay="0.4s">
                  Top 3 biggest  <strong>technology companies</strong> in Romania
                </h2>
                <p>
               <span className="main-color">Radcom</span>  has developed and deployed end
to end solutions, both hardware and
software, for fleet management and
passenger information for more than 15
years.
                </p>
                <h2 className="wow fadeInUp" data-wow-delay="0.4s">
                <span className="main-color"><b>Radcom</b></span> takes care of
everything
                </h2>
                <p>
                The solution package for our clients is full
stack - software and hardware - so you
don't have to get 2 providers to manage
your ............
                </p>
                <h2 className="wow fadeInUp" data-wow-delay="0.4s">
                  For example..
                </h2>
                <p>
                Aici as vrea sa dam un exemplu de client
important cu care Radcom a lucrat si sa
explicam succint cum l-a ajutat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
