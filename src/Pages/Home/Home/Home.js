import React from "react";
import Artist from "../Artist/Artist";
import Events from "../Events/Events";
import Feature from "../Feature/Feature";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div className="front">
      <div id="main">
        <Slider />
        <Feature />
        <Events />
        <Artist />
      </div>
    </div>
  );
};

export default Home;
