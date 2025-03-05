import { ServicesLanding } from "../services-landing/services-landing.component";
import { useLocation } from "react-router-dom";
import style from "./service-page.component.css";
import servicesConfig from "./services.json";
import productsConfig from "./products.json";

export const ServicePage = () => {
  const location = useLocation();
  const config = location.pathname.includes("services")
    ? servicesConfig
    : productsConfig;

  return (
    <div className="service-page-container" style={style}>
      <ServicesLanding config={config} />
    </div>
  );
};
