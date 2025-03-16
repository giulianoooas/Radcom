import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import serviceConfig from "./../../../models/services.json";
import productConfig from "./../../../models/products.json";
import { HeroSection } from "../hero-section/hero-section.component";
import { InfoSection } from "../info-section/info-section.component";

import "./service-detailed-landing.component.css";
import { useTitle } from "../../../utils/use-title.function";

const ServiceDetailedLanding = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [currentElement, setCurrentElement] = useState({
    id: -1,
    name: "..",
    description: "...",
    imgSrc: "Microphone.webp",
    text: "...",
    buttonText: "More about This Product",
    moreImages: [],
  });

  useEffect(() => {
    const path = location.pathname;

    const config = path.includes("services") ? serviceConfig : productConfig;
    const id = Number(path.replace(`/${config.defaultUrl}/`, ""));

    const currentElement = config.values.filter((elem) => elem.id === id)?.[0];

    if (!currentElement) {
      navigate("/home");
    }

    setCurrentElement(currentElement);
  }, [location.pathname]);

  useTitle(currentElement.name);

  return (
    <section className="service-detailed-landing-section">
      <HeroSection product={currentElement}></HeroSection>
      <InfoSection product={currentElement}></InfoSection>
    </section>
  );
};

export default ServiceDetailedLanding;
