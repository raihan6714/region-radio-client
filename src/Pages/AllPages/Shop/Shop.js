import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../Shared/Breadcrumb/Breadcrumb";
import product01 from "../../../images/product01.jpg";
import product02 from "../../../images/product02.jpg";
import product03 from "../../../images/product03.jpg";
import product04 from "../../../images/product04.jpg";
import product05 from "../../../images/product05.jpg";
import product06 from "../../../images/product06.jpg";
import product07 from "../../../images/product07.jpg";
import product08 from "../../../images/product08.jpg";
import product09 from "../../../images/product09.jpg";
const Shop = () => {
  return (
    <div>
      <Breadcrumb />
      <div className="breadcrumbs1_wrapper">
        <div className="container">
          <div className="breadcrumbs1">
            <Link to="/">
              <i className="fa fa-home" aria-hidden="true"></i>
            </Link>
            <span>/</span>Online shop
          </div>
        </div>
      </div>
      <div id="content" className="page-section">
        <div className="container">
          <div className="title1">
            . <span>online shop</span> .
          </div>

          <div className="title2">
            Sed pharetra nunc ultrices, elementum velit fringilla, fringilla
            risus. Phase llus cursus est et nunc sagittis
            <br />
            consectetur ac quis ante
          </div>

          <div className="row">
            <div className="col-md-3">
              <div className="sidebar-block">
                <div className="my_search">
                  <form className="clearfix">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                    <a href="#" className="">
                      <i className="fa fa-search"></i>
                    </a>
                  </form>
                </div>
              </div>

              <div className="sidebar-block">
                <div className="sidebar-title">category</div>
                <ul className="ul1">
                  <li>
                    <a href="#">
                      party dresses <span>(52)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      T-SHIRTS <span>(21)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      jackets & coats <span>(13)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      jumpers & cardigans <span>(46)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      blouses & shirts <span>(58)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      jeans <span>(9)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      tops <span>(16)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      shoes <span>(79)</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="sidebar-block">
                <div className="sidebar-title">price range</div>
                <div id="slider-range"></div>
                <div className="slider-range-text clearfix">
                  from
                  <input type="text" id="amount" readOnly />
                  To
                  <input type="text" id="amount2" readOnly />
                </div>
              </div>

              <div className="sidebar-block">
                <div className="sidebar-title">tags</div>
                <ul className="tags small">
                  <li>
                    <a href="#">T-SHIRT</a>
                  </li>
                  <li>
                    <a href="#">music</a>
                  </li>
                  <li>
                    <a href="#">business</a>
                  </li>
                  <li>
                    <a href="#">DIGITAL</a>
                  </li>
                  <li>
                    <a href="#">fashion</a>
                  </li>
                  <li>
                    <a href="#">BRAND</a>
                  </li>
                  <li>
                    <a href="#">EVENTS</a>
                  </li>
                  <li>
                    <a href="#">DOWNLOAD</a>
                  </li>
                  <li>
                    <a href="#">CUP</a>
                  </li>
                  <li>
                    <a href="#">marketing</a>
                  </li>
                  <li>
                    <a href="#">design</a>
                  </li>
                </ul>
              </div>

              <div className="sidebar-block">
                <div className="sidebar-title">choose type</div>
                <div className="checkbox2-custom-item">
                  <input
                    id="checkbox2-1"
                    className="checkbox2-custom"
                    name="checkbox2-1"
                    type="checkbox"
                    defaultChecked
                  />
                  <label
                    htmlFor="checkbox2-1"
                    className="checkbox2-custom-label"
                  >
                    for men
                  </label>
                </div>
                <div className="checkbox2-custom-item">
                  <input
                    id="checkbox2-2"
                    className="checkbox2-custom"
                    name="checkbox2-2"
                    type="checkbox"
                  />
                  <label
                    htmlFor="checkbox2-2"
                    className="checkbox2-custom-label"
                  >
                    for women
                  </label>
                </div>
                <div className="checkbox2-custom-item">
                  <input
                    id="checkbox2-3"
                    className="checkbox2-custom"
                    name="checkbox2-3"
                    type="checkbox"
                  />
                  <label
                    htmlFor="checkbox2-3"
                    className="checkbox2-custom-label"
                  >
                    for children
                  </label>
                </div>
              </div>
            </div>
            <div className="col-md-9 pt-2">
              <div className="panel2 clearfix">
                <div className="showing-results">search results</div>
                <div className="sorting-wrapper clearfix">
                  <div className="sorting dropdown">
                    <a
                      className="dropdown-toggle"
                      href="#"
                      role="button"
                      id="dropdownSorting"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Defaul Sorting
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownSorting"
                    >
                      <a className="dropdown-item" href="#">
                        Price
                      </a>
                      <a className="dropdown-item" href="#">
                        Popular
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <div className="product-wrapper">
                    <Link to="/details">
                      <div className="product-inner clearfix">
                        <div className="product clearfix">
                          <div className="product-stars">
                            <div className="small-stars">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star-o"></i>
                            </div>
                          </div>
                          <figure className="product-img">
                            <img src={product01} alt="" className="img-fluid" />
                          </figure>
                          <div className="product-caption">
                            <div className="txt1">T-shirt</div>
                            <div className="txt2">Black</div>
                            <div className="txt3">$79.00</div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="product-wrapper">
                    <a href="/">
                      <div className="product-inner clearfix">
                        <div className="product clearfix">
                          <div className="product-stars">
                            <div className="small-stars">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star-o"></i>
                            </div>
                          </div>
                          <figure className="product-img">
                            <img src={product02} alt="" className="img-fluid" />
                          </figure>
                          <div className="product-caption">
                            <div className="txt1">T-shirt</div>
                            <div className="txt2">White</div>
                            <div className="txt3">$64.00</div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="product-wrapper">
                    <a href="/">
                      <div className="product-inner clearfix">
                        <div className="product clearfix">
                          <div className="product-stars">
                            <div className="small-stars">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star-o"></i>
                            </div>
                          </div>
                          <figure className="product-img">
                            <img src={product03} alt="" className="img-fluid" />
                          </figure>
                          <div className="product-caption">
                            <div className="txt1">T-shirt</div>
                            <div className="txt2">Blue</div>
                            <div className="txt3">$60.00</div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <div className="product-wrapper">
                    <a href="/">
                      <div className="product-inner clearfix">
                        <div className="product clearfix">
                          <div className="product-stars">
                            <div className="small-stars">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star-o"></i>
                            </div>
                          </div>
                          <figure className="product-img">
                            <img src={product04} alt="" className="img-fluid" />
                          </figure>
                          <div className="product-caption">
                            <div className="txt1">T-shirt</div>
                            <div className="txt2">Grey</div>
                            <div className="txt3">$48.00</div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="product-wrapper">
                    <a href="/">
                      <div className="product-inner clearfix">
                        <div className="product clearfix">
                          <div className="product-stars">
                            <div className="small-stars">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star-o"></i>
                            </div>
                          </div>
                          <figure className="product-img">
                            <img src={product05} alt="" className="img-fluid" />
                          </figure>
                          <div className="product-caption">
                            <div className="txt1">T-shirt</div>
                            <div className="txt2">Grey</div>
                            <div className="txt3">$33.00</div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="product-wrapper">
                    <a href="/">
                      <div className="product-inner clearfix">
                        <div className="product clearfix">
                          <div className="product-stars">
                            <div className="small-stars">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star-o"></i>
                            </div>
                          </div>
                          <figure className="product-img">
                            <img src={product06} alt="" className="img-fluid" />
                          </figure>
                          <div className="product-caption">
                            <div className="txt1">T-shirt</div>
                            <div className="txt2">White</div>
                            <div className="txt3">$120.00</div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <div className="product-wrapper">
                    <a href="/">
                      <div className="product-inner clearfix">
                        <div className="product clearfix">
                          <div className="product-stars">
                            <div className="small-stars">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star-o"></i>
                            </div>
                          </div>
                          <figure className="product-img">
                            <img src={product07} alt="" className="img-fluid" />
                          </figure>
                          <div className="product-caption">
                            <div className="txt1">T-shirt</div>
                            <div className="txt2">Black</div>
                            <div className="txt3">$30.00</div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="product-wrapper">
                    <a href="/">
                      <div className="product-inner clearfix">
                        <div className="product clearfix">
                          <div className="product-stars">
                            <div className="small-stars">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star-o"></i>
                            </div>
                          </div>
                          <figure className="product-img">
                            <img src={product08} alt="" className="img-fluid" />
                          </figure>
                          <div className="product-caption">
                            <div className="txt1">T-shirt</div>
                            <div className="txt2">Black</div>
                            <div className="txt3">$84.00</div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="product-wrapper">
                    <a href="/">
                      <div className="product-inner clearfix">
                        <div className="product clearfix">
                          <div className="product-stars">
                            <div className="small-stars">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star-o"></i>
                            </div>
                          </div>
                          <figure className="product-img">
                            <img src={product09} alt="" className="img-fluid" />
                          </figure>
                          <div className="product-caption">
                            <div className="txt1">T-shirt</div>
                            <div className="txt2">White</div>
                            <div className="txt3">$79.00</div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <ul className="pagination yellow">
                <li className="page-item">
                  <a className="page-link" href="#">
                    previous
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    ...
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
