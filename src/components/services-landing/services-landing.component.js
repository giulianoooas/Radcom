import "./services-landing.component.css";

const defaultService = {
  imgSrc: "https://dummyimage.com/600x400/ededed/#1c3f9.png",
  text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
  illo. Ipsam molestias laboriosam facere suscipit, nihil architect o
  earum illo fugit nisi eos omnis ipsa ratione impedit atque quibusdam
  libero fugiat. Lorem ipsum dolor sit amet consectetur adipisicing
  elit. Libero, illo. Ipsam molestias laboriosam facere suscipit,
  nihil architect o earum illo fugit nisi eos omnis ipsa ratione
  impedit atque quibusdam libero fugiat. Lorem ipsum dolor sit amet
  consectetur adipisicing elit. Libero, illo. Ipsam molestias
  laboriosam facere suscipit, nihil architect o earum illo fugit nisi
  eos omnis ipsa ratione impedit atque quibusdam libero fugiat.`,
  buttonText: "More about This Service",
};

const introductionText = defaultService.text;

export const ServicesLanding = () => {
  const services = Array.from({ length: 5 }, () => defaultService);

  return (
    <section className="services">
      <nav className="navbar"></nav>
      <div className="landing-section">
        <div className="introduction">
          <div className="title main-color">Our Radcom Services</div>
          <div className="text">{introductionText}</div>
        </div>
      </div>
      {services.map((service, idx) => (
        <div className={idx % 2 ? "secondary" : "main"} key={idx}>
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
          <div className="containerz reveal">
            <img src={service.imgSrc} />
            <div className="info">
              <div className="service-name main-color">Service Name</div>
              <div className="description">{service.text}</div>
              <div>
                <button className="btn">{service.buttonText}</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
