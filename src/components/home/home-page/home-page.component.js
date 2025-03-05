import style from "./home-page.component.css";
import { HomeAbout } from "../home-about/home-about.component";
import { HomeLanding } from "../../../fonts/home-landing/home-landing.component";
import { HomeFeature } from "../home-feature/home-feature.component";
import { HomeContact } from "../home-contact/home-contact.component";
import { HomeProducts } from "../home-products/home-prouducts.component";

export const HomePage = () => {
  return (
    <div className="home-page-container" style={style}>
      <HomeLanding />
      <HomeAbout />
      <HomeFeature />
      <HomeProducts />
      <HomeContact />
    </div>
  );
};
