import style from "./services-landing.component.css";
import Image from "../../shared/app-image/app-image-component";
import { Link } from "react-router-dom";
import { SvgSpecial } from "../../shared/svg-special/svg-special.component";

export const ServicesLanding = (props) => {
  const { introductionText, values, mainTitle, defaultUrl } = props.config;
  const possibleColors = [
    {
      color1: "#d1cd4d",
      color2: "#fff",
    },
    {
      color1: "#fff",
      color2: "#d1cd4d",
    },
  ];

  return (
    <section className="services" style={style}>
      <div className="landing-section">
        <div className="introduction">
          <div className="title main-color">{mainTitle}</div>
          <div className="text">{introductionText}</div>
        </div>
      </div>

      <SvgSpecial
        colors={{
          ...possibleColors[1],
          width1: 0,
          width2: 50,
        }}
      />

      {values.map((value, idx) => (
        <div
          className={
            (idx % 2 ? "secondary" : "main") +
            " service-landing-element-container"
          }
          key={idx}
        >
          <div className="container-services-landing reveal">
            <div className="col-lg-7 image-container">
              <Image
                fileName={value.imgSrc}
                alt="..."
                className="mg-fluid mb-4 mb-lg-0 service-landing-image"
              />
            </div>
            <div className="info col-lg-5 lead">
              <div className="service-name main-color">{value.name}</div>
              <div className="description">{value.text}</div>
              <div>
                <Link to={`/${defaultUrl}/${value.id}`} className="btn">
                  {value.buttonText}
                </Link>
              </div>
            </div>
          </div>

          {idx < values.length - 1 && (
            <SvgSpecial
              colors={{
                ...possibleColors[idx % 2],
                width1: 0,
                width2: 50,
              }}
            />
          )}

          {idx === values.length - 1 && values.length % 2 === 0 && (
            <div className="services-landing-extra-space"></div>
          )}
          {idx === values.length - 1 && values.length % 2 === 0 && (
            <SvgSpecial
              colors={{
                color1: "#fff",
                color2: "#d1cd4d",
                width1: 25,
                width2: 25,
              }}
            />
          )}
        </div>
      ))}
    </section>
  );
};
