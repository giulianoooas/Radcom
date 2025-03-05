import Image from "./../../app-image/app-image-component";
import style from "./info-section.component.css";

export const InfoSection = (props) => {
  const { name, text, imgSrc } = props.product;

  return (
    <section className="info-section reverse" style={style}>
      <div className="info-text">
        <h1>{name}</h1>
        <p>{text}</p>
      </div>
      <div className="info-image">
        <Image fileName={imgSrc} alt="Info" />
      </div>
    </section>
  );
};
