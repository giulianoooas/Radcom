import style from "./home-page.component.css";
import { HomeAbout } from "../home-about/home-about.component";
import { HomeLanding } from "../home-landing/home-landing.component";
import { HomeFeature } from "../home-feature/home-feature.component";
import { HomeProducts } from "../home-products/home-prouducts.component";

const HomePage = () => {
  return (
    <div className="home-page-container" style={style}>
      <HomeLanding />
      <HomeAbout />
      <HomeFeature />
      <HomeProducts />
    </div>
  );
};

export default HomePage;
