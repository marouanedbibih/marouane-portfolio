import React from "react";
import "./services.css";
import ServiceContent from "./ServiceContent";
import servicesData from "../../constants/services.json";

function Services() {
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container grid">
        {servicesData.map((service, index) => (
          <ServiceContent
            key={index} // Use a unique key for each service
            name={service.name}
            description={service.description}
            icon={service.icon}
            services={service.subservices}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;
