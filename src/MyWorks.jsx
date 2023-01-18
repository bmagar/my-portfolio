import React, { useState } from "react";
import myWorksApi from "./API/myWorksApi";

const MyWorks = () => {
  const [projectData, setProjectData] = useState(myWorksApi);
  return (
    <section className="container mt-5 mb-5">
      <div className="row">
        <h1 className="main-heading text-center p-5">My Recent Work</h1>

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
    </section>
  );
};

export default MyWorks;
