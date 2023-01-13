import React from "react";

const Header = () => {
  return (
    <header>
      <section className="container main-hero-container overflow-hidden">
        <div className="row">
          <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column aign-items-start">
            <h1 className="display-1">Hello, I am a Frontend Developer</h1>
            <p className="main-hero-para">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              libero perferendis et quibusdam impedit! Quas repellendus alias
              fugit doloribus. Mollitia commodi ducimus culpa odit animi non
              accusantium, dolor eum assumenda?
            </p>
            <button className="primary-btn">Let's Talk</button>
          </div>
          <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center">
            <div className="object-fit-wrapper">
              <picture>
                <img
                  src="./images/hero-img-1.png"
                  className="object-fit-bg"
                  alt=""
                />
              </picture>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
