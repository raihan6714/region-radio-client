import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../Shared/Breadcrumb/Breadcrumb";
import checkout01 from "../../../images/checkout01.png";
import checkout02 from "../../../images/checkout02.png";
const ShoppingCart = () => {
  return (
    <div>
      <Breadcrumb />
      <div class="breadcrumbs1_wrapper">
        <div class="container">
          <div class="breadcrumbs1">
            <Link to="/">
              <i class="fa fa-home" aria-hidden="true"></i>
            </Link>
            <span>/</span>Shopping cart
          </div>
        </div>
        <div id="content" class="page-section">
          <div class="container">
            <div class="title1">
              . <span>shopping cart</span> .
            </div>

            <div class="title2">
              Sed pharetra nunc ultrices, elementum velit fringilla, fringilla
              risus. Phase llus cursus est et nunc sagittis
              <br />
              consectetur ac quis ante
            </div>

            <div class="table-responsive table-responsive3">
              <table class="table table3">
                <tbody>
                  <tr>
                    <td class="col1">
                      <div class="cart-img">
                        <img src={checkout01} alt="" class="img-fluid" />
                      </div>
                    </td>
                    <td class="col2">
                      <div class="cart-caption">Men's Silas Backpack</div>
                    </td>
                    <td class="col3">
                      <div class="cart-price">
                        <span>$295.00</span>
                      </div>
                    </td>
                    <td class="col4">
                      <div class="cart-input">
                        <div class="quantity">
                          <button class="dec quantity-button">-</button>
                          <input class="quantity-input" type="text" value="1" />
                          <button class="inc quantity-button">+</button>
                        </div>
                      </div>
                    </td>
                    <td class="col5">
                      <div class="cart-total">
                        <span>$295.00</span>
                      </div>
                    </td>
                    <td class="col6">
                      <div class="cart-close">
                        <button type="button" class="close" aria-label="Close">
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="col1">
                      <div class="cart-img">
                        <img src={checkout02} alt="" class="img-fluid" />
                      </div>
                    </td>
                    <td class="col2">
                      <div class="cart-caption">Money Walet</div>
                    </td>
                    <td class="col3">
                      <div class="cart-price">
                        <span>$64.00</span>
                      </div>
                    </td>
                    <td class="col4">
                      <div class="cart-input">
                        <div class="quantity">
                          <button class="dec quantity-button">-</button>
                          <input class="quantity-input" type="text" value="2" />
                          <button class="inc quantity-button">+</button>
                        </div>
                      </div>
                    </td>
                    <td class="col5">
                      <div class="cart-total">
                        <span>$128.00</span>
                      </div>
                    </td>
                    <td class="col6">
                      <div class="cart-close">
                        <button type="button" class="close" aria-label="Close">
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="col1">
                      <div class="cart-img">
                        <img
                          src="images/checkout03.png"
                          alt=""
                          class="img-fluid"
                        />
                      </div>
                    </td>
                    <td class="col2">
                      <div class="cart-caption">cloves</div>
                    </td>
                    <td class="col3">
                      <div class="cart-price">
                        <span>$80.00</span>
                      </div>
                    </td>
                    <td class="col4">
                      <div class="cart-input">
                        <div class="quantity">
                          <button class="dec quantity-button">-</button>
                          <input class="quantity-input" type="text" value="2" />
                          <button class="inc quantity-button">+</button>
                        </div>
                      </div>
                    </td>
                    <td class="col5">
                      <div class="cart-total">
                        <span>$160.00</span>
                      </div>
                    </td>
                    <td class="col6">
                      <div class="cart-close">
                        <button type="button" class="close" aria-label="Close">
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="apply-coupon clearfix">
                  <form class="clearfix form-dark">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter your coupon code"
                      value=""
                    />
                    <a href="#" class="">
                      submit
                    </a>
                  </form>
                </div>
                <div class="title4 mt-5">calculate shipping</div>
                <form action={{ javascript: "" }} class="form-dark form3">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      name="country"
                      value=""
                      placeholder="Choose country for shipping"
                    />
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          name="state"
                          value=""
                          placeholder="State / Country"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          name="zip"
                          value=""
                          placeholder="Postcode / Zip"
                        />
                      </div>
                    </div>
                  </div>
                  <a href="#" class="update-totals">
                    update totals
                  </a>
                </form>
              </div>
              <div class="col-md-6">
                <div class="row">
                  <div class="col-md-6">
                    <a href="#" class="update-cart">
                      update cart
                    </a>
                  </div>
                  <div class="col-md-6">
                    <a href="#" class="proceed-to-checkout">
                      proceed to checkout
                    </a>
                  </div>
                </div>
                <div class="title4 mt-5">cart totals</div>
                <div class="table-responsive table-responsive2 mb-0">
                  <table class="table table2">
                    <tbody>
                      <tr>
                        <td class="col1">cart subtotal:</td>
                        <td class="col2">$583.00</td>
                      </tr>
                      <tr>
                        <td class="col1">shipping & handling:</td>
                        <td class="col2">free shipping</td>
                      </tr>
                      <tr>
                        <td class="col1">order total:</td>
                        <td class="col2">$583.00</td>
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
