import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../images/logo.png";
import cart01 from "../../../images/cart01.jpg";
import cart02 from "../../../images/cart02.jpg";
import cart03 from "../../../images/cart03.jpg";
const Breadcrumb = () => {
  return (
    <div>
      <div className="header-v2">
        <div className="container">
          <div className="header-top clearfix">
            <div className="ic1 phone1">
              <i className="fa fa-phone" aria-hidden="true"></i> +0 (123)
              456-7890
            </div>
            <div className="ic1 email1">
              <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
              <Link to="#">info.contact@yourdomain.com</Link>
            </div>
            <ul className="social-top clearfix">
              <li>
                <Link to="#">
                  <i className="fa fa-facebook"></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fa fa-twitter"></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fa fa-google-plus"></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fa fa-pinterest"></i>
                </Link>
              </li>
            </ul>
          </div>
          <div className="header-inner clearfix">
            <header>
              <div className="logo_wrapper">
                <NavLink to="/" className="logo">
                  <img src={logo} alt="" className="img-fluid" />
                </NavLink>
              </div>
            </header>
            <div className="my_cart_wrapper">
              <div className="my_cart_button">
                <a href="/">
                  <i className="" aria-hidden="true"></i>
                  <span>2</span>
                </a>
              </div>
              <div className="my_cart_popup">
                <div className="my_cart_item clearfix">
                  <a href="/" className="my_cart_item_close">
                    <i className="fa fa-times"></i>
                  </a>
                  <figure>
                    <img src={cart01} alt="" className="img-fluid" />
                  </figure>
                  <div className="caption">
                    <div className="txt1">£460.00 x 1</div>
                    <div className="txt2">
                      <a href="/">Kabino Bedside Table</a>
                    </div>
                  </div>
                </div>
                <div className="my_cart_item clearfix">
                  <a href="/" className="my_cart_item_close">
                    <i className="fa fa-times"></i>
                  </a>
                  <figure>
                    <img src={cart02} alt="" className="img-fluid" />
                  </figure>
                  <div className="caption">
                    <div className="txt1">£460.00 x 1</div>
                    <div className="txt2">
                      <a href="/">Kabino Bedside Table</a>
                    </div>
                  </div>
                </div>
                <div className="my_cart_item clearfix">
                  <a href="/" className="my_cart_item_close">
                    <i className="fa fa-times"></i>
                  </a>
                  <figure>
                    <img src={cart03} alt="" className="img-fluid" />
                  </figure>
                  <div className="caption">
                    <div className="txt1">£460.00 x 1</div>
                    <div className="txt2">
                      <a href="/">Kabino Bedside Table</a>
                    </div>
                  </div>
                </div>
                <div className="my_cart_total clearfix">
                  <div className="left">Total :</div>
                  <div className="right">£460.00</div>
                </div>
                <div className="my_cart_buttons">
                  <Link to="/cart" className="my_cart_button2">
                    View Cart
                  </Link>
                  <Link to="/checkout" className="my_cart_button2">
                    Check Out
                  </Link>
                </div>
              </div>
            </div>
            <nav className="navbar_ navbar navbar-expand-md clearfix">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="nav navbar-nav sf-menu clearfix">
                  <li className="nav-item">
                    <a href="index" className="nav-link">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="about" className="active nav-link">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="channels" className="nav-link">
                      Chanels
                    </a>
                  </li>
                  <li className="nav-item sub-menu">
                    <a href="/" className="nav-link">
                      Pages{" "}
                      <i className="fa fa-caret-down" aria-hidden="true"></i>
                    </a>
                    <div className="sf-mega">
                      <ul>
                        <li>
                          <Link to="/collection">Music Collection</Link>
                        </li>
                        <li>
                          <Link to="/blog">
                            Blog Right side
                            <i
                              className="fa fa-angle-right"
                              aria-hidden="true"
                            ></i>
                          </Link>
                          <div className="sf-mega">
                            <ul>
                              <li>
                                <Link to="/post">Post Right side</Link>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <Link to="/blogleft">
                            Blog Left Side{" "}
                            <i
                              className="fa fa-angle-right"
                              aria-hidden="true"
                            ></i>
                          </Link>
                          <div className="sf-mega">
                            <ul>
                              <li>
                                <Link to="postleft">Post Left side</Link>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <Link to="/details">Product Detail</Link>
                        </li>
                        <li>
                          <Link to="/cart">Shopping cart</Link>
                        </li>
                        <li>
                          <Link to="/checkout">Check out</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link to="/shop" className="nav-link">
                      Shop
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact" className="nav-link">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
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
    </div>
  );
};

export default Breadcrumb;
