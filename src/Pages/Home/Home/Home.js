import React from "react";
import Feature from "../Feature/Feature";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div className="front">
      <div id="main">
        <Slider />
        <Feature />
      </div>
    </div>
  );
};

export default Home;
