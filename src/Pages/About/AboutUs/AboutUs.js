import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../Shared/Breadcrumb/Breadcrumb";
import Videio from "../Videio/Videio";

const AboutUs = () => {
  return (
    <div>
      <Breadcrumb />
      <div className="breadcrumbs1_wrapper">
        <div className="container">
          <div className="breadcrumbs1">
            <Link to="/home">
              <i className="fa fa-home" aria-hidden="true"></i>
            </Link>
            <span>/</span>about us
          </div>
        </div>
      </div>
      <Videio />
    </div>
  );
};

export default AboutUs;
