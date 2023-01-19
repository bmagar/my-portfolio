import React, { useState } from "react";
import myWorksApi from "./API/myWorksApi";

const MyWorks = () => {
  const [projectData, setProjectData] = useState(myWorksApi);
  return (
    <section className="mywork-section yellow-broder">
      <div className="container position-relative mywork-gradient p-5 mt-5 mb-5">
        <h2 className="main-heading text-center">My Recent Work</h2>
        <p className="main-hero-para text-center w-50 m-auto">
          Here are a selection of the projects I have been involved in.
        </p>
        <div className="row mt-5">
          {projectData.map((curElem) => {
            const { id, Image, Links } = curElem;
            return (
              <>
                <div className="col-12 col-md-4 mt-4">
                  <div className="main-container">
                    <img className="image" src={Image} alt=""></img>
                    <div className="middle">
                      <div className="text">
                        <a href={Links} target="_blank">
                          Visit Website
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MyWorks;
