import Image from "./../../shared/app-image/app-image-component";
import style from "./hero-section.component.css";
import { SvgSpecial } from "../../shared/svg-special/svg-special.component";

export const HeroSection = (props) => {
  const { name, description, imgSrc } = props.product;

  return (
    <div className="product-det-hero-container">
      <section className="hero-section" style={style}>
        <div className="hero-text">
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
        <div className="hero-image">
          <Image fileName={imgSrc} alt="Produs" height="50" />
        </div>
      </section>

      <SvgSpecial
        colors={{
          color1: "#fff",
          color2: "#1c3f95",
          width1: 25,
          width2: 25,
        }}
      />
    </div>
  );
};
