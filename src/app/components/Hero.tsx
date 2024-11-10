import React from "react";
import Navbar from "./Navbar";



const Hero = () => {
  return (
    <div
      id="hero"
      className="min-h-screen bg-no-repeat bg-[url(/banner_bg2.jpg)] alt"
      style={{
        backgroundSize: "25%",
        backgroundPosition: "left 250px top 180px",}}>
          
      <Navbar />
      <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]">
        <div className="hidden lg:block"></div>
        <div className="text-[90px] sm:text-[120px] font-bold leading-tight flex justify-center items-center">
          <div>
            
            <p data-aos="zoom-in-up">I m</p>
            <p data-aos="zoom-in-up">Bilal</p>
            <p data-aos="zoom-in-up">Khan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
