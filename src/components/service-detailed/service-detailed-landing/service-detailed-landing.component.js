import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import serviceConfig from "./../../../models/services.json";
import productConfig from "./../../../models/products.json";
import { HeroSection } from "../hero-section/hero-section.component";
import { InfoSection } from "../info-section/info-section.component";
import { FeaturesSection } from "../feature-section/feature-section.component";

export const ServiceDetailedLanding = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [currentElement, setCurrentElement] = useState({});

  useEffect(() => {
    const path = location.pathname;

    const config = path.includes("services") ? serviceConfig : productConfig;
    const id = Number(path.replace(`/${config.defaultUrl}/`, ""));

    const currentElement = config.values.filter((elem) => elem.id === id)?.[0];

    if (!currentElement) {
      navigate("/home");
    }

    setCurrentElement(currentElement);
  }, [location]);

  return (
    <>
      <HeroSection product={currentElement}></HeroSection>
      <InfoSection product={currentElement}></InfoSection>
      {/* <FeaturesSection product={currentElement}></FeaturesSection> */}
    </>
  );
};
