import React from "react";
import { Link } from "react-router-dom";
import poster1 from "../../../images/poster1.jpg";
import event01 from "../../../images/event01.jpg";
import event02 from "../../../images/event02.jpg";
import event03 from "../../../images/event03.jpg";
import event04 from "../../../images/event04.jpg";
import "./Events.css";
const Events = () => {
  return (
    <div>
      <div id="upcoming-events" className="page-section">
        <div className="container">
          <div className="title1">
            . <span>upcoming events</span> .
          </div>
          <div className="event1 clearfix">
            <div className="event1-left">
              <div className="event1-text">
                <div className="txt1">april 25, 10:00, golden palace</div>
                <div className="txt2">lorem ipsum ! disco music event</div>
                <div className="txt3">
                  Vivamus eu mattis turpis. Donec eget neque vel sapien congue
                  porta. Integer vitae ipsum et nibh sollicitudin egestas.
                  Integer vestibulum, massa sed molestie venenatis, ante sem
                  iaculis magna, quis pharetra felis dolor in ante. Sed enim
                  ante, vehicula et tincidunt sed, lacinia nec justo.{" "}
                </div>
                <div className="txt4">
                  <div className="product-offer-table clearfix deal-countdown-timer">
                    <span className="deal-time-diff">2929994</span>
                    <div className="product-offer-col">
                      <div className="product-offer-txt">
                        <span className="deal-countdown-days">&nbsp;</span>Days
                      </div>
                    </div>
                    <div className="product-offer-divider">:</div>
                    <div className="product-offer-col">
                      <div className="product-offer-txt">
                        <span className="deal-countdown-hours">&nbsp;</span>
                        Hours
                      </div>
                    </div>
                    <div className="product-offer-divider">:</div>
                    <div className="product-offer-col">
                      <div className="product-offer-txt">
                        <span className="deal-countdown-minutes">&nbsp;</span>
                        Minutes
                      </div>
                    </div>
                    <div className="product-offer-divider">:</div>
                    <div className="product-offer-col">
                      <div className="product-offer-txt">
                        <span className="deal-countdown-seconds">&nbsp;</span>
                        Seconds
                      </div>
                    </div>
                  </div>
                </div>
                <div className="txt5">
                  <Link to="/" className="btn1">
                    dont miss! register now
                  </Link>
                </div>
              </div>
            </div>
            <div className="event1-right">
              <img src={poster1} alt="" className="img-fluid" />
            </div>
          </div>

          <div className="owl-carousel owl-carousel-poster">
            <div className="item">
              <div className="poster-wrapper">
                <div className="poster-inner">
                  <div className="poster">
                    <figure className="img">
                      <img src={event01} alt="" className="img-fluid" />
                    </figure>
                    <div className="caption">
                      <div className="txt1">electro summer</div>
                      <div className="txt2">june 24, 2018</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="poster-wrapper">
                <div className="poster-inner">
                  <div className="poster">
                    <figure className="img">
                      <img src={event02} alt="" className="img-fluid" />
                    </figure>
                    <div className="caption">
                      <div className="txt1">festival electro pop</div>
                      <div className="txt2">june 24, 2018</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="poster-wrapper">
                <div className="poster-inner">
                  <div className="poster">
                    <figure className="img">
                      <img src={event03} alt="" className="img-fluid" />
                    </figure>
                    <div className="caption">
                      <div className="txt1">electronic sound</div>
                      <div className="txt2">june 24, 2018</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="poster-wrapper">
                <div className="poster-inner">
                  <div className="poster">
                    <figure className="img">
                      <img src={event04} alt="" className="img-fluid" />
                    </figure>
                    <div className="caption">
                      <div className="txt1">electronic music festival</div>
                      <div className="txt2">june 24, 2018</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="poster-wrapper">
                <div className="poster-inner">
                  <div className="poster">
                    <figure className="img">
                      <img src={event01} alt="" className="img-fluid" />
                    </figure>
                    <div className="caption">
                      <div className="txt1">electro summer</div>
                      <div className="txt2">june 24, 2018</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="poster-wrapper">
                <div className="poster-inner">
                  <div className="poster">
                    <figure className="img">
                      <img src={event02} alt="" className="img-fluid" />
                    </figure>
                    <div className="caption">
                      <div className="txt1">festival electro pop</div>
                      <div className="txt2">june 24, 2018</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="poster-wrapper">
                <div className="poster-inner">
                  <div className="poster">
                    <figure className="img">
                      <img src={event03} alt="" className="img-fluid" />
                    </figure>
                    <div className="caption">
                      <div className="txt1">electronic sound</div>
                      <div className="txt2">june 24, 2018</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="poster-wrapper">
                <div className="poster-inner">
                  <div className="poster">
                    <figure className="img">
                      <img src={event04} alt="" className="img-fluid" />
                    </figure>
                    <div className="caption">
                      <div className="txt1">electronic music festival</div>
                      <div className="txt2">june 24, 2018</div>
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

export default Events;
