import React, { useState } from "react";
import serviceApi from "./API/serviceApi";

const Services = () => {
  const [serviceData, setServiceData] = useState(serviceApi);
  return (
    <>
      <section className="service-main-container">
        <div className="container service-container">
          <h1 className="main-heading text-center">My Skills Set</h1>
          <div className="row d-flex justify-content-center">
            {serviceData.map((curElem) => {
              const { id, title, info } = curElem;
              return (
                <div
                  className="col-12 col-lg-4 col-xxl-4 work-container-subdiv"
                  key={id}>
                  <h2 className="sub-heading">{title}</h2>
                  <p className="main-hero-para">{info}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
