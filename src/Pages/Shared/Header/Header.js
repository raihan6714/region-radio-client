import React from "react";
import logo from "../../../images/logo.png";
import cart01 from "../../../images/cart01.jpg";
import cart02 from "../../../images/cart02.jpg";
import cart03 from "../../../images/cart03.jpg";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <div className="header-v1">
        <div className="container">
          <div className="header-inner clearfix">
            <header>
              <div className="logo_wrapper">
                <a href="/" className="logo">
                  <img src={logo} alt="" className="img-fluid" />
                </a>
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
                  <NavLink to="/cart" className="my_cart_button2">
                    View Cart
                  </NavLink>
                  <a href="/checkout" className="my_cart_button2">
                    Check Out
                  </a>
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
                    <NavLink to="/home" className="active nav-link">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/about" className="nav-link">
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/channels" className="nav-link">
                      Chanels
                    </NavLink>
                  </li>
                  <li className="nav-item sub-menu">
                    <a href="/" className="nav-link">
                      Pages{" "}
                      <i className="fa fa-caret-down" aria-hidden="true"></i>
                    </a>
                    <div className="sf-mega">
                      <ul>
                        <li>
                          <a href="/collection">Music Collection</a>
                        </li>
                        <li>
                          <NavLink to="/blog">
                            Blog Right side
                            <i
                              className="fa fa-angle-right"
                              aria-hidden="true"
                            ></i>
                          </NavLink>
                          <div className="sf-mega">
                            <ul>
                              <li>
                                <NavLink to="/post">Post Right side</NavLink>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <NavLink to="/blog-left">
                            Blog Left Side
                            <i
                              className="fa fa-angle-right"
                              aria-hidden="true"
                            ></i>
                          </NavLink>
                          <div className="sf-mega">
                            <ul>
                              <li>
                                <NavLink to="/post-left">
                                  Post Left side
                                </NavLink>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <NavLink to="/details">Product Detail</NavLink>
                        </li>
                        <li>
                          <NavLink to="/cart">Shopping cart</NavLink>
                        </li>
                        <li>
                          <NavLink to="/checkout">Check out</NavLink>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/shop" className="nav-link">
                      Shop
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/contact" className="nav-link">
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
