import style from "./home-contact.component.css";
import image1 from "./../../../assets/lisanto-OcAoMz6TJF8-unsplash.jpg";
import image2 from "./../../../assets/headway-5QgIuuBxKwM-unsplash.jpg";
import image3 from "./../../../assets/young-kyung-kim-7zQumtlvvfM-unsplash (2).jpg";
import { Link } from "react-router-dom";

export const HomeContact = () => {
  const articles = [
    {
      imgSrc: image1,
      headerText: "This is some title",
      contentText: ` Curabitur convallis ac quam vitae laoreet. Nulla mauris
    ante, euismod sed lacus sit amet, congue bibendum eros.
    Etiam mattis lobortis porta. Vestibulum ultrices iaculis
    enim imperdiet egestas.`,
      buttonText: "Read more",
    },
    {
      imgSrc: image2,
      headerText: "This is some title",
      contentText: ` Curabitur convallis ac quam vitae laoreet. Nulla mauris
    ante, euismod sed lacus sit amet, congue bibendum eros.
    Etiam mattis lobortis porta. Vestibulum ultrices iaculis
    enim imperdiet egestas.`,
      buttonText: "Read more",
    },
    {
      imgSrc: image3,
      headerText: "This is some title",
      contentText: ` Curabitur convallis ac quam vitae laoreet. Nulla mauris
    ante, euismod sed lacus sit amet, congue bibendum eros.
    Etiam mattis lobortis porta. Vestibulum ultrices iaculis
    enim imperdiet egestas.`,
      buttonText: "Read more",
    },
  ];

  return (
    <section id="contact" style={style}>
      <div className="container reveal">
        <div className="row">
          <div className="section-title">
            <h1 className="wow fadeInUp" data-wow-delay="0.3s">
              Blog
            </h1>
            <p className="wow fadeInUp" data-wow-delay="0.6s">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam
              erat volutpat.
            </p>
          </div>

          <section className="articles">
            {articles.map((article, idx) => (
              <article key={idx}>
                <div className="article-wrapper">
                  <figure>
                    <img src={article.imgSrc} alt="" />
                  </figure>
                  <div className="article-body">
                    <h2>{article.headerText}</h2>
                    <p>{article.contentText}</p>
                    <Link to={"/home"} className="read-more">
                      {article.buttonText}
                      <span className="sr-only">about this is some title</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </div>
      </div>
    </section>
  );
};
