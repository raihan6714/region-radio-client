import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bot1-wrapper">
        <div className="container">
          <div className="bot1 clearfix">
            <div className="logo2_wrapper">
              <a href="index.html" className="logo2">
                <img src="images/logo2.png" alt="" className="img-fluid" />
              </a>
            </div>
            <div className="social-footer-wrapper">
              <ul className="social-footer clearfix">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-google-plus"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
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
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Chanels</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <div className="copyrights">
              Copyright @2021{" "}
              <a href="#" target="_blank">
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
