import Image from "./../../app-image/app-image-component";
import style from "./hero-section.component.css";

export const HeroSection = (props) => {
  const { name, description, imgSrc } = props.product;

  return (
    <section className="hero-section" style={style}>
      <div className="hero-text">
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
      <div className="hero-image">
        <Image fileName={imgSrc} alt="Produs" height="50" />
      </div>
    </section>
  );
};
