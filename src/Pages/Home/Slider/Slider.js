import React from "react";
import sliderOne from "../../../images/slide01.jpg";
import sliderTwo from "../../../images/slide03.jpg";
import sliderThree from "../../../images/slide04.jpg";
import sign1 from "../../../images/sign1.png";
import sign2 from "../../../images/sign2.png";
import sign3 from "../../../images/sign3.png";
import mouse from "../../../images/mouse.png";
const Slider = () => {
  return (
    <div id="main">
      <div id="home" className="">
        <div id="slides_wrapper" className="">
          <div id="slides">
            <ul className="slides-container">
              <li>
                <img src={sliderOne} alt="" className="img" />
                <div className="caption">
                  <div className="container">
                    <div className="txt1">
                      .<span>RADIO</span>.102.5
                      <br />.<span>ONAIR</span>.
                    </div>
                    <div className="txt2">
                      Nullam et interdum odio. Etiam laoreet ex id gravida
                      volutpat.
                      <br />
                      Vestibulum pulvinar nisl quis lobortis bibendum.
                    </div>
                    <div className="txt3">
                      <img src={sign1} alt="" className="img-fluid preserve" />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <img src={sliderTwo} alt="" className="img" />
                <div className="caption">
                  <div className="container">
                    <div className="txt1">
                      .<span>RADIO</span>.102.5
                      <br />.<span>ONAIR</span>.
                    </div>
                    <div className="txt2">
                      Nullam et interdum odio. Etiam laoreet ex id gravida
                      volutpat.
                      <br />
                      Vestibulum pulvinar nisl quis lobortis bibendum.
                    </div>
                    <div className="txt3">
                      <img src={sign2} alt="" className="img-fluid preserve" />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <img src={sliderThree} alt="" className="img" />
                <div className="caption">
                  <div className="container">
                    <div className="txt1">
                      .<span>RADIO</span>.102.5
                      <br />.<span>ONAIR</span>.
                    </div>
                    <div className="txt2">
                      Nullam et interdum odio. Etiam laoreet ex id gravida
                      volutpat.
                      <br />
                      Vestibulum pulvinar nisl quis lobortis bibendum.
                    </div>
                    <div className="txt3">
                      <img src={sign3} alt="" className="img-fluid preserve" />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="mouse">
          <a href="#welcome" className="scroll-to">
            <img src={mouse} alt="" className="img-responsive" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
