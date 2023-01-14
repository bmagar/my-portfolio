import React from "react";

const Header = () => {
  return (
    <header>
      <section className="container main-hero-container overflow-hidden">
        <div className="row">
          <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column aign-items-start">
            <h1 className="display-1">Hello, I am a Frontend Developer</h1>
            <p className="main-hero-para">
              I am a frontend developer skilled in React JS, creating
              interactive user interfaces and implementing complex logic. I have
              a passion for designing seamless user experiences and staying
              current with industry trends. Committed to writing clean,
              maintainable code and delivering high-quality results.
            </p>
            <button className="primary-btn">Let's Talk</button>
          </div>
          <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center">
            <div className="object-fit-wrapper">
              <picture>
                <img
                  src="./images/final-hero-img.png"
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
