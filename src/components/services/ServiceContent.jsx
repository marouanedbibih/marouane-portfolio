import React, { useState } from "react";
import "./services.css";

function ServiceContent(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="services__content">
      <div>
        <i className={`uil uil-${props.icon} services__icon `}></i>
        <h3 className="services__title">{props.name}</h3>
      </div>
      <span className="services__button" onClick={openModal}>
        View More
        <i className="uil uil-arrow-right services__button-icon"></i>
      </span>
      <div className={`services__modal ${isModalOpen ? "active-modal" : ""}`}>
        <div className="services__modal-content">
          <i className="uil uil-times services__modal-close" onClick={closeModal}></i>
          <h3 className="services__modal-title">{props.name}</h3>
          <p className="services__modal-description">{props.description}</p>
          <ul className="services__modal-services grid">
            {props.services.map((subservice, index) => (
              <li className="services__modal-service" key={index}>
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">{subservice}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ServiceContent;
