import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../Shared/Breadcrumb/Breadcrumb";
import checkout01 from "../../../images/checkout01.png";
import checkout02 from "../../../images/checkout02.png";
const ShoppingCart = () => {
  return (
    <div>
      <Breadcrumb />
      <div className="breadcrumbs1_wrapper">
        <div className="container">
          <div className="breadcrumbs1">
            <Link to="/">
              <i className="fa fa-home" aria-hidden="true"></i>
            </Link>
            <span>/</span>Shopping cart
          </div>
        </div>
        <div id="content" className="page-section">
          <div className="container">
            <div className="title1">
              . <span>shopping cart</span> .
            </div>

            <div className="title2">
              Sed pharetra nunc ultrices, elementum velit fringilla, fringilla
              risus. Phase llus cursus est et nunc sagittis
              <br />
              consectetur ac quis ante
            </div>

            <div className="table-responsive table-responsive3">
              <table className="table table3">
                <tbody>
                  <tr>
                    <td className="col1">
                      <div className="cart-img">
                        <img src={checkout01} alt="" className="img-fluid" />
                      </div>
                    </td>
                    <td className="col2">
                      <div className="cart-caption">Men's Silas Backpack</div>
                    </td>
                    <td className="col3">
                      <div className="cart-price">
                        <span>$295.00</span>
                      </div>
                    </td>
                    <td className="col4">
                      <div className="cart-input">
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
                    </td>
                    <td className="col5">
                      <div className="cart-total">
                        <span>$295.00</span>
                      </div>
                    </td>
                    <td className="col6">
                      <div className="cart-close">
                        <button
                          type="button"
                          className="close"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="col1">
                      <div className="cart-img">
                        <img src={checkout02} alt="" className="img-fluid" />
                      </div>
                    </td>
                    <td className="col2">
                      <div className="cart-caption">Money Walet</div>
                    </td>
                    <td className="col3">
                      <div className="cart-price">
                        <span>$64.00</span>
                      </div>
                    </td>
                    <td className="col4">
                      <div className="cart-input">
                        <div className="quantity">
                          <button className="dec quantity-button">-</button>
                          <input
                            className="quantity-input"
                            type="text"
                            value="2"
                          />
                          <button className="inc quantity-button">+</button>
                        </div>
                      </div>
                    </td>
                    <td className="col5">
                      <div className="cart-total">
                        <span>$128.00</span>
                      </div>
                    </td>
                    <td className="col6">
                      <div className="cart-close">
                        <button
                          type="button"
                          className="close"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="col1">
                      <div className="cart-img">
                        <img
                          src="images/checkout03.png"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </td>
                    <td className="col2">
                      <div className="cart-caption">cloves</div>
                    </td>
                    <td className="col3">
                      <div className="cart-price">
                        <span>$80.00</span>
                      </div>
                    </td>
                    <td className="col4">
                      <div className="cart-input">
                        <div className="quantity">
                          <button className="dec quantity-button">-</button>
                          <input
                            className="quantity-input"
                            type="text"
                            value="2"
                          />
                          <button className="inc quantity-button">+</button>
                        </div>
                      </div>
                    </td>
                    <td className="col5">
                      <div className="cart-total">
                        <span>$160.00</span>
                      </div>
                    </td>
                    <td className="col6">
                      <div className="cart-close">
                        <button
                          type="button"
                          className="close"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="apply-coupon clearfix">
                  <form className="clearfix form-dark">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your coupon code"
                      value=""
                    />
                    <a href="#" className="">
                      submit
                    </a>
                  </form>
                </div>
                <div className="title4 mt-5">calculate shipping</div>
                <form action={{ javascript: "" }} className="form-dark form3">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="country"
                      value=""
                      placeholder="Choose country for shipping"
                    />
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="state"
                          value=""
                          placeholder="State / Country"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="zip"
                          value=""
                          placeholder="Postcode / Zip"
                        />
                      </div>
                    </div>
                  </div>
                  <a href="#" className="update-totals">
                    update totals
                  </a>
                </form>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6">
                    <a href="#" className="update-cart">
                      update cart
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a href="#" className="proceed-to-checkout">
                      proceed to checkout
                    </a>
                  </div>
                </div>
                <div className="title4 mt-5">cart totals</div>
                <div className="table-responsive table-responsive2 mb-0">
                  <table className="table table2">
                    <tbody>
                      <tr>
                        <td className="col1">cart subtotal:</td>
                        <td className="col2">$583.00</td>
                      </tr>
                      <tr>
                        <td className="col1">shipping & handling:</td>
                        <td className="col2">free shipping</td>
                      </tr>
                      <tr>
                        <td className="col1">order total:</td>
                        <td className="col2">$583.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
