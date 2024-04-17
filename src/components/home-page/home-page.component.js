import { Landing } from "../landing/landing.component";
import { About } from "../about/about.component";
import { Feature } from "../feature/feature.component";
import { Contact } from "../contact/contact.component";
import "./home-page.component.css";

export const HomePage = () => {
  return (
    <div className="home-page-container">
      <Landing />
      <About />
      <Feature />
      <Contact />
    </div>
  );
};
