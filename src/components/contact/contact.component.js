import "./contact.component.css";
import image1 from "./../../assets/lisanto-OcAoMz6TJF8-unsplash.jpg";
import image2 from "./../../assets/headway-5QgIuuBxKwM-unsplash.jpg";
import image3 from "./../../assets/young-kyung-kim-7zQumtlvvfM-unsplash (2).jpg";

export const Contact = () => {
  return (
    <section id="contact">
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
            <article>
              <div className="article-wrapper">
                <figure>
                  <img src={image1} alt="" />
                </figure>
                <div className="article-body">
                  <h2>This is some title</h2>
                  <p>
                    Curabitur convallis ac quam vitae laoreet. Nulla mauris
                    ante, euismod sed lacus sit amet, congue bibendum eros.
                    Etiam mattis lobortis porta. Vestibulum ultrices iaculis
                    enim imperdiet egestas.
                  </p>
                  <a href="/" className="read-more">
                    Read more{" "}
                    <span className="sr-only">about this is some title</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        chipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
            <article>
              <div className="article-wrapper">
                <figure>
                  <img src={image2} alt="" />
                </figure>
                <div className="article-body">
                  <h2>This is some title</h2>
                  <p>
                    Curabitur convallis ac quam vitae laoreet. Nulla mauris
                    ante, euismod sed lacus sit amet, congue bibendum eros.
                    Etiam mattis lobortis porta. Vestibulum ultrices iaculis
                    enim imperdiet egestas.
                  </p>
                  <a href="/" className="read-more">
                    Read more{" "}
                    <span className="sr-only">about this is some title</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        chipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
            <article>
              <div className="article-wrapper">
                <figure>
                  <img src={image3} alt="" />
                </figure>
                <div className="article-body">
                  <h2>This is some title</h2>
                  <p>
                    Curabitur convallis ac quam vitae laoreet. Nulla mauris
                    ante, euismod sed lacus sit amet, congue bibendum eros.
                    Etiam mattis lobortis porta. Vestibulum ultrices iaculis
                    enim imperdiet egestas.
                  </p>
                  <a href="/" className="read-more">
                    Read more{" "}
                    <span className="sr-only">about this is some title</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        chipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          </section>
        </div>
      </div>
    </section>
  );
};
