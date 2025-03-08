import style from "./home-products.component.css";
import productConfig from "./../../../models/products.json";
import { Link } from "react-router-dom";
import Image from "../../shared/app-image/app-image-component";
import { SvgSpecial } from "../../shared/svg-special/svg-special.component";

export const HomeProducts = () => {
  const products = [
    productConfig.values.slice(0, 3),
    productConfig.values.slice(3, 6),
  ];

  return (
    <>
      <SvgSpecial
        colors={{
          color1: "#fff",
          color2: "#d1cd4d",
          width1: 5,
          width2: 45,
        }}
      />
      <section id="products" style={style}>
        <div className="products-container">
          <div className="center">
            <h1 className="services-Title main-color reveal">
              <span className="dark">Our</span> products
            </h1>
          </div>

          {products.map((row, idxRow) => (
            <div
              className="padz reveal home-feature-components-container"
              key={`row${idxRow}`}
            >
              <div className="home-product-container-row">
                {row.map((product, idxService) => (
                  <div
                    className="on-hover home-product-container-row-element"
                    key={`row${idxRow}-service${idxService}`}
                  >
                    <div className="media">
                      <div className="display-flex">
                        <div className="media-object media-left">
                          <Image
                            fileName={product.imgSrc}
                            className="service-logo home-product-logo"
                            alt={product.name}
                          />
                        </div>
                        <div className="media-body">
                          <h2 className="media-heading">
                            <b>{product.name}</b>
                          </h2>
                          <p>{product.description}</p>
                        </div>
                      </div>
                      <div className="clearfix text-center col-md-12 col-sm-12 button">
                        <Link
                          to={`/products/${product.id}`}
                          className="btn smoothScroll"
                        >
                          Read more...
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="clearfix text-center col-md-12 col-sm-12">
            <Link to={"/products"} className="btn btn-default smoothScroll">
              More about Our Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
