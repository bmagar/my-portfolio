import React, { useState } from "react";
import howToUse from "./API/howToUse.jsx";

const Aboutus = () => {
  const [aboutData, setAboutData] = useState(howToUse);
  return (
    <section className="common-section our-services">
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 col-lg-5 text-center our-service-leftside-img">
            <img src="./images/img-1.jpg" alt="aboutusimg" className="" />
          </div>
          <div className="col-12 col-lg-7 our-services-list">
            <h3 className="mini-title">
              -- AVAILABLE @Google and ios app store only
            </h3>
            <h1 className="main-heading">HOw to use the App?</h1>
            {aboutData.map((curElem) => {
              const { id, title, info } = curElem;
              return (
                <>
                  <div className="row our-services-info" key={id}>
                    <div className="col-1 our-service-number">{id}</div>
                    <div className="col-10 our-service-data">
                      <h2>{title}</h2>
                      <p className="main-hero-para">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Eligendi odit amet qui, temporibus quos recusandae
                        rerum deserunt in delectus provident nesciunt
                        consequatur ex ad enim dolor animi maiores magni ipsum.
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </section>

    // 
  );
};

export default Aboutus;
