import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import HowitWorks from "./HowitWorks";
import Aboutus from "./Aboutus";
import Services from "./Services";
import MyWorks from "./MyWorks";
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
      <MyWorks />
      <Footer />
    </>
  );
};

export default App;
