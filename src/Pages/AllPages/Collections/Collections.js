import React from "react";
import collection01 from "../../../images/collection01.png";
import collection02 from "../../../images/collection02.png";
import collection03 from "../../../images/collection03.png";
import collection04 from "../../../images/collection04.png";
import Breadcrumb from "../../Shared/Breadcrumb/Breadcrumb";
const Collections = () => {
  return (
    <div>
      <Breadcrumb />
      <div className="breadcrumbs1_wrapper">
        <div className="container">
          <div className="breadcrumbs1">
            <a href="index.html">
              <i className="fa fa-home" aria-hidden="true"></i>
            </a>
            <span>/</span>Collection
          </div>
        </div>
      </div>
      <div id="content" className="page-section">
        <div className="container">
          <div className="title1 right">
            . <span>our collection</span> .
          </div>
          <div className="collection1">
            <div className="collection1-txt1">
              1980’s style / jazzrock music
            </div>
            <div className="collection1-txt2">
              Aliquam tempus faucibus hendrerit eget mauris ornare
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="collection1-img">
                  <img src={collection01} alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="collection1-txt3">
                  ROD STEWART <span> / </span> ‘TILL THERE WAS YOU
                </div>
                <div className="collection1-txt4">
                  <div className="ic2">
                    <i className="fa fa-microphone" aria-hidden="true"></i> Jazz
                    Rock
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
                <div className="audio1 audio2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="collection1 right">
        <div class="collection1-txt1">1990’s style / MY SAMBA</div>
        <div class="collection1-txt2">
          Aliquam tempus faucibus hendrerit eget mauris ornare
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="collection1-img">
              <img src={collection02} alt="" class="img-fluid" />
            </div>
          </div>
          <div class="col-md-6 order-md-first">
            <div class="collection1-txt3">
              LAURA COLTRAIN <span> / </span> ‘TILL THERE WAS YOU
            </div>
            <div class="collection1-txt4">
              <div class="ic2">
                <i class="fa fa-microphone" aria-hidden="true"></i> Jazz Rock
              </div>
              <div class="ic2">
                <i class="fa fa-sliders" aria-hidden="true"></i> Gridgum Studio
              </div>
              <div class="ic2">
                <i class="fa fa-circle-o" aria-hidden="true"></i> 1.5 Million
                Copies
              </div>
            </div>
            <div class="audio1 audio2"></div>
          </div>
        </div>
      </div>

      <div class="collection1">
        <div class="collection1-txt1">1980’s style / HARD rock music</div>
        <div class="collection1-txt2">
          Aliquam tempus faucibus hendrerit eget mauris ornare
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="collection1-img">
              <img src={collection03} alt="" class="img-fluid" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="collection1-txt3">
              MAYA CHEKURA <span> / </span> SHALVA YOU are my life
            </div>
            <div class="collection1-txt4">
              <div class="ic2">
                <i class="fa fa-microphone" aria-hidden="true"></i> Jazz Rock
              </div>
              <div class="ic2">
                <i class="fa fa-sliders" aria-hidden="true"></i> Gridgum Studio
              </div>
              <div class="ic2">
                <i class="fa fa-circle-o" aria-hidden="true"></i> 1.5 Million
                Copies
              </div>
            </div>
            <div class="audio1 audio2"></div>
          </div>
        </div>
      </div>

      <div class="collection1 right">
        <div class="collection1-txt1">PIANO style / CLASSICAL music</div>
        <div class="collection1-txt2">
          Aliquam tempus faucibus hendrerit eget mauris ornare
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="collection1-img">
              <img src={collection04} alt="" class="img-fluid" />
            </div>
          </div>
          <div class="col-md-6 order-md-first">
            <div class="collection1-txt3">
              KIRA BERNSHTEIN <span> / </span> SHOPIN PRELUDES
            </div>
            <div class="collection1-txt4">
              <div class="ic2">
                <i class="fa fa-microphone" aria-hidden="true"></i> Jazz Rock
              </div>
              <div class="ic2">
                <i class="fa fa-sliders" aria-hidden="true"></i> Gridgum Studio
              </div>
              <div class="ic2">
                <i class="fa fa-circle-o" aria-hidden="true"></i> 1.5 Million
                Copies
              </div>
            </div>
            <div class="audio1 audio2"></div>
          </div>
        </div>
      </div>

      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="/">
            previous
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="/">
            1
          </a>
        </li>
        <li class="page-item active">
          <a class="page-link" href="/">
            2
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="/">
            3
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="/">
            4
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="/">
            ...
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="/">
            next
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Collections;
