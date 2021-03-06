import React from "react";
import Artist from "../Artist/Artist";
import Map from "../Map/Map";
import Events from "../Events/Events";
import Feature from "../Feature/Feature";
import Subscribe from "../Subscribe/Subscribe";
import Slider from "../../Slider/Slider";
import Header from "../../Shared/Header/Header";

const Home = () => {
  return (
    <div className="front">
      <div id="main">
        <Header />
        <Slider />
        <Feature />
        <Events />
        <Artist />
        <Subscribe />
        <Map />
      </div>
    </div>
  );
};

export default Home;
