import { ServicesLanding } from "../services-landing/services-landing.component";
import { useLocation } from "react-router-dom";
import style from "./service-page.component.css";
import servicesConfig from "./../../../models/services.json";
import productsConfig from "./../../../models/products.json";
import { useEffect, useState } from "react";
import { useTitle } from "../../../utils/use-title.function";

const ServicePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const [config, setConfig] = useState(
    location.pathname.includes("services") ? servicesConfig : productsConfig
  );

  useEffect(() => {
    setIsLoading(true);
    setConfig(
      location.pathname.includes("services") ? servicesConfig : productsConfig
    );
    setIsLoading(false);
  }, [location.pathname]);

  useTitle(config.tabTitle);

  return isLoading ? (
    <div className="d-flex justify-content-center align-items-center service-page-container">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  ) : (
    <div className="service-page-container" style={style}>
      <ServicesLanding config={config} />
    </div>
  );
};

export default ServicePage;
