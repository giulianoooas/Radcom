import style from "./services-landing.component.css";

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
    <section className="services" style={style}>
      <div className="landing-section">
        <div className="introduction">
          <div className="title main-color">Our Radcom Services</div>
          <div className="text">{introductionText}</div>
        </div>
      </div>
      <div className="landing-section-border">
        <div className="border1"></div>
        <div className="border2"></div>
      </div>
      {services.map((service, idx) => (
        <div
          className={
            (idx % 2 ? "secondary" : "main") +
            " service-landing-element-container"
          }
          key={idx}
        >
          <div className="container-services-landing reveal">
            <div className="col-lg-7 image-container">
              <img
                src={service.imgSrc}
                alt="..."
                className="mg-fluid mb-4 mb-lg-0"
              />
            </div>
            <div className="info col-lg-5 lead">
              <div className="service-name main-color">Service Name</div>
              <div className="description">{service.text}</div>
              <div>
                <button className="btn">{service.buttonText}</button>
              </div>
            </div>
          </div>
          {idx < services.length - 1 && (
            <div className="svg-container">
              <div className="border1"></div>
              <div className="border2"></div>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};
