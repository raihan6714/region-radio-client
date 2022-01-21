import React from "react";
import Breadcrumb from "../../Shared/Breadcrumb/Breadcrumb";
import checkout01 from "../../../images/checkout01.png";
import checkout02 from "../../../images/checkout02.png";
import checkout03 from "../../../images/checkout03.png";
import { Link } from "react-router-dom";
const Checkout = () => {
  return (
    <div>
      <Breadcrumb />
      <div className="breadcrumbs1_wrapper">
        <div className="container">
          <div className="breadcrumbs1">
            <a href="index.html">
              <i className="fa fa-home" aria-hidden="true"></i>
            </a>
            <span>/</span>Check info
          </div>
        </div>
      </div>
      <div id="content" className="page-section">
        <div className="container">
          <div className="title1">
            . <span>check your info</span> .
          </div>

          <div className="title2">
            Sed pharetra nunc ultrices, elementum velit fringilla, fringilla
            risus. Phase llus cursus est et nunc sagittis
            <br />
            consectetur ac quis ante
          </div>

          <div className="row">
            <div className="col-md-6">
              <form action={{ javascript: "" }} className="form-dark form1">
                <div className="form-group">
                  <div className="select1_wrapper">
                    <div className="select1_inner">
                      <select
                        className="select2 select"
                        style={{ width: "100%" }}
                      >
                        <option defaultValue="1">Choose country</option>
                        <option defaultValue="2">Country 1</option>
                        <option defaultValue="3">Country 2</option>
                        <option defaultValue="4">Country 3</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="firstname"
                        defaultValue=""
                        placeholder="First name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="lastname"
                        defaultValue=""
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        defaultValue=""
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="phone"
                        defaultValue=""
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="company"
                    defaultValue=""
                    placeholder="Company name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    defaultValue=""
                    placeholder="Street address"
                  />
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="appartment"
                        defaultValue=""
                        placeholder="Appartment"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="town"
                        defaultValue=""
                        placeholder="Town / City"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="state"
                        defaultValue=""
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
                        defaultValue=""
                        placeholder="Postcode / Zip"
                      />
                    </div>
                  </div>
                </div>
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
                    privacy policy agreement
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
                    ship to different address
                  </label>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    rows="5"
                    id="inputMessage2"
                    name="content"
                    placeholder="Your message"
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <div className="table-responsive table-responsive1">
                <table className="table table1">
                  <tbody>
                    <tr>
                      <td className="col1">
                        <div className="checkout-img">
                          <img src={checkout01} alt="" className="img-fluid" />
                        </div>
                      </td>
                      <td className="col2">
                        <div className="checkout-caption">
                          <div className="txt1">Men's Silas Backpack</div>
                          <div className="txt2">Quantity: 1</div>
                        </div>
                      </td>
                      <td className="col3">
                        <div className="checkout-color">
                          <span className="color1"></span>
                        </div>
                      </td>
                      <td className="col4">
                        <div className="checkout-price">$295.00</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="col1">
                        <div className="checkout-img">
                          <img src={checkout02} alt="" className="img-fluid" />
                        </div>
                      </td>
                      <td className="col2">
                        <div className="checkout-caption">
                          <div className="txt1">Money Walet</div>
                          <div className="txt2">Quantity: 2</div>
                        </div>
                      </td>
                      <td className="col3">
                        <div className="checkout-color">
                          <span className="color2"></span>
                        </div>
                      </td>
                      <td className="col4">
                        <div className="checkout-price">$128.00</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="col1">
                        <div className="checkout-img">
                          <img src={checkout03} alt="" className="img-fluid" />
                        </div>
                      </td>
                      <td className="col2">
                        <div className="checkout-caption">
                          <div className="txt1">cloves</div>
                          <div className="txt2">Quantity: 3</div>
                        </div>
                      </td>
                      <td className="col3">
                        <div className="checkout-color">
                          <span className="color3"></span>
                        </div>
                      </td>
                      <td className="col4">
                        <div className="checkout-price">$160.00</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="title4">order totals</div>
              <div className="table-responsive table-responsive2">
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
              <div className="select1_wrapper">
                <div className="select1_inner">
                  <select className="select2 select" style={{ width: "100%" }}>
                    <option defaultValue="1">PayPal</option>
                    <option defaultValue="2">Credit Card</option>
                  </select>
                </div>
              </div>
              <div className="footnote my-4">
                <span>* </span>Sed pharetra nunc ultrices, elementum velit
                fringilla, fringilla risus. Phase llus cursus est et nunc
                sagittis consectetur ac quis ante
              </div>
              <Link to="#" className="btn5">
                place order
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
