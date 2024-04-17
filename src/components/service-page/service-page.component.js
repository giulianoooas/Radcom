import { useParams } from "react-router-dom";

export const ServicePage = () => {
  const params = useParams();
  const serviceName = params.serviceName;

  return (
    <div className="container service-page-container">
      <h1>Service {serviceName}</h1>
    </div>
  );
};
