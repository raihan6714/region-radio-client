import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../Shared/Breadcrumb/Breadcrumb";
import gallerybig01 from "../../../images/gallery-big01.jpg";
import gallerybig02 from "../../../images/gallery-big02.jpg";
import gallerybig03 from "../../../images/gallery-big03.jpg";
import gallerybig04 from "../../../images/gallery-big04.jpg";
import thumbbig01 from "../../../images/thumb-big01.jpg";
import thumbbig02 from "../../../images/thumb-big02.jpg";
import thumbbig03 from "../../../images/thumb-big03.jpg";
import thumbbig04 from "../../../images/thumb-big04.jpg";
import share1 from "../../../images/share1.png";
import share2 from "../../../images/share2.png";
import share3 from "../../../images/share3.png";
import share4 from "../../../images/share4.png";
import author1 from "../../../images/author1.jpg";
import author2 from "../../../images/author2.jpg";
import author3 from "../../../images/author3.jpg";
import product11 from "../../../images/product11.jpg";
import product12 from "../../../images/product12.jpg";
import product13 from "../../../images/product13.jpg";
import product14 from "../../../images/product14.jpg";
const Details = () => {
  return (
    <div>
      <Breadcrumb />
      <div className="breadcrumbs1_wrapper">
        <div className="container">
          <div className="breadcrumbs1">
            <Link to="/">
              <i className="fa fa-home" aria-hidden="true"></i>
            </Link>
            <span>/</span>Details
          </div>
        </div>
      </div>
      <div id="content" className="page-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="gslider-wrapper">
                <div id="gslider2" className="flexslider flexslider-gslider">
                  <ul className="slides">
                    <li>
                      <img src={gallerybig01} alt="" className="img-fluid" />
                    </li>
                    <li>
                      <img src={gallerybig02} alt="" className="img-fluid" />
                    </li>
                    <li>
                      <img src={gallerybig03} alt="" className="img-fluid" />
                    </li>
                    <li>
                      <img src={gallerybig04} alt="" className="img-fluid" />
                    </li>
                    <li>
                      <img src={gallerybig01} alt="" className="img-fluid" />
                    </li>
                    <li>
                      <img src={gallerybig02} alt="" className="img-fluid" />
                    </li>
                    <li>
                      <img src={gallerybig03} alt="" className="img-fluid" />
                    </li>
                    <li>
                      <img src={gallerybig04} alt="" className="img-fluid" />
                    </li>
                    <li>
                      <img src={gallerybig01} alt="" className="img-fluid" />
                    </li>
                    <li>
                      <img src={gallerybig02} alt="" className="img-fluid" />
                    </li>
                    <li>
                      <img src={gallerybig03} alt="" className="img-fluid" />
                    </li>
                    <li>
                      <img src={gallerybig04} alt="" className="img-fluid" />
                    </li>
                  </ul>
                </div>
                <div id="carousel2" className="flexslider flexslider-carousel">
                  <ul className="slides">
                    <li>
                      <img src={thumbbig01} alt="" className="img-fluid" />
                    </li>
                    <li>
                      <img src={thumbbig02} alt="" className="img-fluid" />
                    </li>
                    <li>
                      <img src={thumbbig03} alt="" className="img-fluid" />
                    </li>
                    <li>
                      <img src={thumbbig04} alt="" className="img-fluid" />
                    </li>
                    <li>
                      <img src={thumbbig01} alt="" className="img-fluid" />
                    </li>
                    <li>
                      <img src={thumbbig02} alt="" className="img-fluid" />
                    </li>
                    <li>
                      <img src={thumbbig03} alt="" className="img-fluid" />
                    </li>
                    <li>
                      <img src={thumbbig04} alt="" className="img-fluid" />
                    </li>
                    <li>
                      <img src={thumbbig01} alt="" className="img-fluid" />
                    </li>
                    <li>
                      <img src={thumbbig02} alt="" className="img-fluid" />
                    </li>
                    <li>
                      <img src={thumbbig03} alt="" className="img-fluid" />
                    </li>
                    <li>
                      <img src={thumbbig04} alt="" className="img-fluid" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="product-details-info">
                <div className="title">Sacrificial Chair Design</div>
                <div className="product-short-description">
                  Duis autem vel eum iriure dolor in helit esse molestie
                  consequat, vel illum dolore eu feugiat nulla facilisis at vero
                  eros et accumsan et iusto odio dignissim qui blandit praesent
                  luptatum zzril delenit augue duis dolore te feugait nulla
                  facilisi.
                </div>
                <div className="product-wide-review clearfix">
                  <div className="product-wide-stars">
                    <i className="fa fa-star-o active"></i>
                    <i className="fa fa-star-o active"></i>
                    <i className="fa fa-star-o active"></i>
                    <i className="fa fa-star-o active"></i>
                    <i className="fa fa-star-o"></i>
                  </div>
                  <div className="product-wide-review-txt">10 review(s)</div>
                  <div className="product-wide-review-add">
                    <Link to="#">Add your review</Link>
                  </div>
                </div>
                <div className="product-details-price">$170.00</div>
                <form
                  id="popup-form3"
                  className="form-horizontal"
                  action={{ javascript: void 0 }}
                >
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>
                          Size <span>*</span>
                        </label>
                        <div className="select1_wrapper">
                          <div className="select1_inner">
                            <select
                              className="select2 select"
                              style={{ width: "100%" }}
                            >
                              <option value="1">- Please select -</option>
                              <option value="2">Size 1</option>
                              <option value="3">Size 2</option>
                              <option value="4">Size 3</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>
                          Color <span>*</span>
                        </label>
                        <div className="select1_wrapper">
                          <div className="select1_inner">
                            <select
                              className="select2 select"
                              style={{ width: "100%" }}
                            >
                              <option value="1">- Please select -</option>
                              <option value="2">Color 1</option>
                              <option value="3">Color 2</option>
                              <option value="4">Color 3</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="required-fiields">Required Fiields *</div>
                  <div className="quanty clearfix">
                    <div className="form-group">
                      <label>Quanty:</label>
                      <div className="quantity">
                        <button className="dec quantity-button">-</button>
                        <input
                          className="quantity-input"
                          type="text"
                          value="1"
                        />
                        <button className="inc quantity-button">+</button>
                      </div>
                    </div>
                  </div>
                  <div className="product-wide-add-to-cart">
                    <Link to="#">
                      <i className="fa fa-calendar-o" aria-hidden="true"></i>{" "}
                      Add to Cart
                    </Link>
                  </div>
                  <div className="product-wide-links">
                    <a href="/">
                      <i className="fa fa-heart-o"></i>
                    </a>
                  </div>
                </form>

                <div className="product-share-list">
                  <a href="#">
                    <img src={share1} alt="" className="img-fluid" />
                  </a>
                  <a href="#">
                    <img src={share2} alt="" className="img-fluid" />
                  </a>
                  <a href="#">
                    <img src={share3} alt="" className="img-fluid" />
                  </a>
                  <a href="#">
                    <img src={share4} alt="" className="img-fluid" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="tabs3-wrapper">
            <ul className="tabs clearfix" data-tabgroup="third-tab-group">
              <li>
                <a href="#tabs3-1">Description</a>
              </li>
              <li className="active">
                <a href="#tabs3-2">Customer Review</a>
              </li>
            </ul>
          </div>

          <div id="third-tab-group" className="tabgroup">
            <div id="tabs3-1">
              <p>
                <i>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages.
                </i>
              </p>
            </div>
            <div id="tabs3-2">
              <div className="comment-block clearfix">
                <figure>
                  <img src={author1} alt="" className="img-responsive" />
                </figure>
                <div className="caption">
                  <div className="caption-top clearfix">
                    <div className="txt1">anna smith</div>
                    <div className="txt2">
                      <a href="#" className="btn4">
                        Reply <i className="fa fa-reply" aria-hidden="true"></i>
                      </a>
                    </div>
                    <div className="txt4">June 12, 2018 at 14:02</div>
                  </div>
                  <div className="txt3">
                    Ut at scelerisque arcu. Morbi ultricies eleifend nisi ut
                    pulvinar. Morbi posuere sollicitudin mi, at suscipit nunc
                    finibus eget. Sed vel augue massa. Cras quis lobortis ex,
                    sit amet tempus enim. Ut at scelerisque arcu. Morbi
                    ultricies eleifend nisi ut pulvinar. Morbi posuere
                    sollicitudin mi, at suscipit nunc finibus eget..
                  </div>
                </div>
              </div>

              <div className="comment-block clearfix">
                <figure>
                  <img src={author2} alt="" className="img-responsive" />
                </figure>
                <div className="caption">
                  <div className="caption-top clearfix">
                    <div className="txt1">bell spring</div>
                    <div className="txt2">
                      <a href="#" className="btn4">
                        Reply <i className="fa fa-reply" aria-hidden="true"></i>
                      </a>
                    </div>
                    <div className="txt4">MAY 19, 2018 at 17:16</div>
                  </div>
                  <div className="txt3">
                    Donec interdum venenatis tellus, vel posuere est faucibus
                    non. Donec ac ante placerat libero, at suscipit nunc finibus
                    eget. Sed vel augue massa. Cras quis lobortis ex, sit amet
                    tempus enim. Ut at scelerisque arcu. Morbi ultricies
                    eleifend nisi ut pulvinar.
                  </div>
                </div>
              </div>

              <div className="comment-block clearfix left">
                <figure>
                  <img src={author3} alt="" className="img-responsive" />
                </figure>
                <div className="caption">
                  <div className="caption-top clearfix">
                    <div className="txt1">anna smith</div>
                    <div className="txt2">
                      <a href="#" className="btn4">
                        Reply <i className="fa fa-reply" aria-hidden="true"></i>
                      </a>
                    </div>
                    <div className="txt4">APRIL 07, 2018 at 15:34</div>
                  </div>
                  <div className="txt3">
                    Sed sit amet egestas enim. Fusce non lobortis justo
                  </div>
                </div>
              </div>

              <div className="title4">LEAVE A REPLY</div>

              <div id="note3"></div>
              <div id="fields3">
                <form
                  id="ajax-contact-form3"
                  className="form-horizontal"
                  action={{ javascript: "" }}
                >
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label for="inputName">
                              Name<span>*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputName"
                              name="name"
                              value=""
                              placeholder="Name"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label for="inputEmail">
                              Email<span>*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="inputEmail"
                              name="email"
                              value=""
                              placeholder="Email"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label for="inputMessage">
                          Comments<span>*</span>
                        </label>
                        <textarea
                          className="form-control"
                          rows="9"
                          id="inputMessage"
                          name="content"
                          placeholder="Your Comment"
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <button type="submit" className="btn2">
                      SUBMIT MESSAGE
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="title5">upsell products</div>

          <div className="row">
            <div className="col-md-3">
              <div className="product2">
                <div className="product2-inner">
                  <figure className="product2-media">
                    <a href="#" className="product2-view">
                      <img src={product11} alt="" className="img-fluid" />
                      <div className="product2-card">
                        <div className="new">new</div>
                      </div>
                    </a>
                  </figure>
                  <div className="product2-caption">
                    <div className="product2-name">
                      <a href="#">Sacrificial Chair Design</a>
                    </div>
                    <div className="product2-price">$170.00</div>
                    <div className="product2-icon">
                      <a href="#" dataToggle="tooltip" title="Add to Cart">
                        <i className="fa fa-calendar-o" ariaHidden="true"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="product2">
                <div className="product2-inner">
                  <figure className="product2-media">
                    <a href="#" className="product2-view">
                      <img src={product12} alt="" className="img-fluid" />
                    </a>
                  </figure>
                  <div className="product2-caption">
                    <div className="product2-name">
                      <a href="#">Sacrificial Chair Design</a>
                    </div>
                    <div className="product2-price">$170.00</div>
                    <div className="product2-icon">
                      <a href="#" data-toggle="tooltip" title="Add to Cart">
                        <i className="fa fa-calendar-o" aria-hidden="true"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="product2">
                <div className="product2-inner">
                  <figure className="product2-media">
                    <a href="#" className="product2-view">
                      <img src={product13} alt="" className="img-fluid" />
                      <div className="product2-card">
                        <div className="new">new</div>
                        <div className="discount">-25%</div>
                      </div>
                    </a>
                  </figure>
                  <div className="product2-caption">
                    <div className="product2-name">
                      <a href="#">Sacrificial Chair Design</a>
                    </div>
                    <div className="product2-price">$170.00</div>
                    <div className="product2-icon">
                      <a href="#" data-toggle="tooltip" title="Add to Cart">
                        <i className="fa fa-calendar-o" aria-hidden="true"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="product2">
                <div className="product2-inner">
                  <figure className="product2-media">
                    <a href="#" className="product2-view">
                      <img src={product14} alt="" className="img-fluid" />
                    </a>
                  </figure>
                  <div className="product2-caption">
                    <div className="product2-name">
                      <a href="#">Sacrificial Chair Design</a>
                    </div>
                    <div className="product2-price">$170.00</div>
                    <div className="product2-icon">
                      <a href="#" dataToggle="tooltip" title="Add to Cart">
                        <i className="fa fa-calendar-o" ariaHidden="true"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
