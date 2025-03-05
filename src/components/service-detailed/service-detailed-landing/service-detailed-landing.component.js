import { useLocation } from "react-router-dom";
import serviceConfig from "./../../../models/services.json";
import productConfig from "./../../../models/products.json";

export const ServiceDetailedLanding = () => {
  const services = serviceConfig.values;
  const products = productConfig.values;

  const location = useLocation();
};
