import React from "react";
import { NavLink } from "react-router-dom";
import logo2 from "../../../images/logo2.png";
const Footer = () => {
  return (
    <div>
      <div className="bot1-wrapper">
        <div className="container">
          <div className="bot1 clearfix">
            <div className="logo2_wrapper">
              <a href="index.html" className="logo2">
                <img src={logo2} alt="" className="img-fluid" />
              </a>
            </div>
            <div className="social-footer-wrapper">
              <ul className="social-footer clearfix">
                <li>
                  <a href="/">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa fa-google-plus"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa fa-pinterest"></i>
                  </a>
                </li>
              </ul>
            </div>
            <p>
              <i>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                officia deserunt
                <br />
                mollitid est laborum. Sed ut perspiciatis unde qui omnis.
              </i>
            </p>
            <div className="footborder"></div>
            <ul className="menu-bot">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/chanels">Chanels</NavLink>
              </li>
              <li>
                <NavLink to="/shop">Shop</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="contact">Contact</NavLink>
              </li>
            </ul>
            <div className="copyrights">
              Copyright @2021{" "}
              <a href="/" target="_blank">
                Mecovache
              </a>
              . All rights Revierves Inc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
