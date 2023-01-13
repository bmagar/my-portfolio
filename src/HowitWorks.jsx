import React, { useState } from "react";
import workapi from "./API/workApi";

const HowitWorks = () => {
  const [workData, setWorkData] = useState(workapi);
  //   Getting the api using useState
  return (
    <>
      <section>
        <div className="container work-container">
          <h1 className="main-heading text-center">How does it work</h1>
          <div className="row mt-5">
            {/* Multi card using map function */}
            {workData.map((curElem) => {
              const { id, logo, title, info } = curElem;
              return (
                <>
                  <div className="col-12 col-lg-4 text-center">
                    <i className="fa-solid fa-download"></i>
                    <h2 className="sub-heading">{title}</h2>
                    <p className="main-hero-para w-100">{info}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HowitWorks;
