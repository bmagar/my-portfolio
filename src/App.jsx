import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import HowitWorks from "./HowitWorks";
import Aboutus from "./Aboutus";
import Services from "./Services";
import Footer from "./Footer";
import "./index.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      {/* <HowitWorks />
      <Aboutus /> */}
      <Services />
      <Footer />
    </>
  );
};

export default App;
