import { ServicesLanding } from "../services-landing/services-landing.component";
import style from "./service-page.component.css";

export const ServicePage = () => {
  return (
    <div className="service-page-container" style={style}>
      <ServicesLanding />
    </div>
  );
};
