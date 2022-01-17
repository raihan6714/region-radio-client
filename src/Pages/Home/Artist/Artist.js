import React from "react";
import "./Artist.css";
import { Link } from "react-router-dom";
import popular01 from "../../../images/popular01.jpg";
import popular02 from "../../../images/popular02.jpg";
import popular03 from "../../../images/popular03.jpg";

const Artist = () => {
  return (
    <div>
      <div id="popular-artists" className="page-section">
        <div className="container">
          <div className="title1">
            . <span>popular artists</span> .
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="artist1">
                <figure>
                  <img src={popular01} alt="" className="img-fluid" />
                </figure>
                <div className="caption">
                  <div className="txt1">
                    lorem ipum dolor
                    <br />
                    sit amet, concateur
                    <br />
                    elementus area
                  </div>
                  <div className="txt2">June 18, 2018</div>
                  <div className="txt3">
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada fames ac turpis egestas. Morbi quis iaculis sem,
                    quis pellentesque tellus. Sed auctor purus eget nisi
                    lacinia, eget tincidunt erat sollicitudin.
                  </div>
                  <div className="txt4">
                    <Link to="#" className="btn1">
                      read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="artist2">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <figure>
                      <img src={popular02} alt="" className="img-fluid" />
                    </figure>
                  </div>
                  <div className="col-md-6 order-md-first">
                    <div className="caption">
                      <div className="txt1">
                        Donec lacinia lacus et aliquam interdum. Curabitur
                        tincidunt pretium lacus
                      </div>
                      <div className="txt2">June 28, 2018</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="artist2">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <figure>
                      <img src={popular03} alt="" className="img-fluid" />
                    </figure>
                  </div>
                  <div className="col-md-6">
                    <div className="caption">
                      <div className="txt1">
                        Donec lacinia lacus et aliquam interdum. Curabitur
                        tincidunt pretium lacus
                      </div>
                      <div className="txt2">June 28, 2018</div>
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

export default Artist;
