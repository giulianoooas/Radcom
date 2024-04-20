import "./home-page.component.css";
import { HomeAbout } from "../home-about/home-about.component";
import { HomeLanding } from "../home-landing/home-landing.component";
import { HomeFeature } from "../home-feature/home-feature.component";
import { HomeContact } from "../home-contact/home-contact.component";

export const HomePage = () => {
  return (
    <div className="home-page-container">
      <HomeLanding />
      <HomeAbout />
      <HomeFeature />
      <HomeContact />
    </div>
  );
};
