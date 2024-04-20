import { Navbar } from "../navbar/navbar.component";
import { ServicesLanding } from "../services-landing/services-landing.component";

export const ServicePage = () => {
  return (
    <div className="service-page-container">
      <Navbar />
      <ServicesLanding />
    </div>
  );
};
