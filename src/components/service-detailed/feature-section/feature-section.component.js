import Image from "./../../app-image/app-image-component";
import style from "./feature-section.component.css";

export const FeaturesSection = (props) => {
  const { name, moreImages } = props.product;

  return (
    <section className="features-section" style={style}>
      <div className="feature-wrapper">
        <div className="features-header">
          <h2>{name}</h2>
        </div>
        {moreImages && (
          <div className="features-grid">
            {moreImages.map((image, index) => (
              <div key={index} className="feature-box">
                <Image fileName={image.imgSrc} alt={image.title} />
                <h3>{image.title}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
