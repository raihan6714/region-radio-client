import React from "react";
import home01 from "../../../images/home01.png";
import sign2 from "../../../images/sign2.png";
import "./Feature.css";
const Feature = () => {
  return (
    <div id="main">
      <div id="welcome" className="page-section">
        <div className="container">
          <div className="title1">
            . <span>featured collection</span> .
          </div>

          <div className="row">
            <div className="col-md-6 mb-4 mb-md-0">
              <div className="home1">
                <figure>
                  <img src={home01} alt="" className="img-fluid" />
                </figure>
                <div className="caption">
                  <div className="caption-top clearfix">
                    <div className="txt1">1980’s style / jazzrock music</div>
                    <div className="txt2">$60.99</div>
                  </div>
                  <div className="txt3">
                    Aliquam tempus faucibus hendrerit eget mauris ornare
                  </div>
                  <div className="txt4">
                    by <span>merabino vachini</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="home2">
                <div className="txt1">
                  <span>L</span> orem ipsum dolor, ivamus eu mattis turpis.
                  Donec eget neque vel sapien congue porta. Integer vitae ipsum
                  et nibh sollicitudin egestas. Integer vestibulum, massa sed
                  molestie venenatis, ante sem iaculis magna, quis pharetra
                  felis dolor in ante. Sed enim ante, vehicula et tincidunt sed,
                  lacinia nec justo. Morbi venenatis, lorem ac varius tincidunt,
                  sapien felis accumsan eros.
                </div>
                <div className="txt1">
                  Vivamus eu mattis turpis. Donec eget neque vel sapien congue
                  porta. Integer vitae ipsum et nibh sollicitudin egestas.
                  Integer vestibulum, massa sed molestie venenatis, ante sem
                  iaculis magna, quis pharetra felis dolor in ante. Sed enim
                  ante, vehicula et tincidunt sed, lacinia nec justo. Morbi
                  venenatis, lorem ac varius tincidunt, sapien felis accumsan
                  eros.
                </div>
                <div className="txt2">capa sakvarelidze / my life</div>
                <div className="txt3">
                  <div className="ic2">
                    <i className="fa fa-microphone" aria-hidden="true"></i>{" "}
                    Samba
                  </div>
                  <div className="ic2">
                    <i className="fa fa-sliders" aria-hidden="true"></i> Gridgum
                    Studio
                  </div>
                  <div className="ic2">
                    <i className="fa fa-circle-o" aria-hidden="true"></i> 1.5
                    Million Copies
                  </div>
                </div>
                <div className="audio1">
                  <audio
                    controls="controls"
                    preload="none"
                    className="audio"
                    style={{ width: "100%", visibility: "hidden" }}
                  >
                    <source type="audio/mpeg" src="assets/audio/song1.mp3" />
                    <source type="audio/mpeg" src="assets/audio/song2.mp3" />
                    <source type="audio/mpeg" src="assets/audio/song3.mp3" />
                    <source type="audio/mpeg" src="assets/audio/song4.mp3" />
                  </audio>
                </div>
                <div className="sign2">
                  <img src={sign2} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
