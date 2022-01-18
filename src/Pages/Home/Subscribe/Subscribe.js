import React from "react";

const Subscribe = () => {
  return (
    <div>
      <div id="get-in-touch" className="page-section">
        <div className="container">
          <div className="title1">
            . <span>GeT IN TOUCH</span> .
          </div>

          <div className="row">
            <div className="col-md-4">
              <p className="contact1">
                +1 (917) 123-45-67
                <br />
                +1 (917) 123-45-67
                <br />
                <a href="#">info@yourdomain.com</a>
                <br />
                USA, New York, 51 Gridgum str.
              </p>
            </div>
            <div className="col-md-8">
              <div id="note"></div>
              <div id="fields">
                <form
                  id="ajax-contact-form"
                  className="form-horizontal clearfix"
                  action="javascript:;"
                >
                  <div className="row">
                    <div className="col-md-5">
                      <div className="form-group">
                        <label for="inputName2">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputName2"
                          name="name"
                          value=""
                          placeholder="Name"
                        />
                      </div>
                      <div className="form-group">
                        <label for="inputEmail">Email</label>
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
                    <div className="col-md-7">
                      <div className="form-group">
                        <label for="inputMessage2">Messages</label>
                        <textarea
                          className="form-control"
                          rows="5"
                          id="inputMessage2"
                          name="content"
                          placeholder="Messages"
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <button type="submit" className="btn2">
                      send message &nbsp;
                      <i
                        className="fa fa-long-arrow-right"
                        aria-hidden="true"
                      ></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
