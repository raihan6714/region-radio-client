import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../Shared/Breadcrumb/Breadcrumb";
import "./Channels.css";

const Channels = () => {
  return (
    <div>
      <Breadcrumb />
      <div className="breadcrumbs1_wrapper">
        <div className="container">
          <div className="breadcrumbs1">
            <Link to="/">
              <i className="fa fa-home" aria-hidden="true"></i>
            </Link>
            <span>/</span>Chanels
          </div>
        </div>
      </div>
      <div id="content" className="page-section">
        <div className="container">
          <div className="title1 right">
            . <span>RADIO channels</span> .
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="shiPlayer-wrapper">
                <div className="shiPlayer-inner">
                  <div className="vinul"></div>
                  <div className="shiPlayer" id="radio1" data-tag=""></div>
                </div>
                <div className="caption">
                  <div className="txt1">
                    1980’s style / jazzrock music / SHOUTCAST
                  </div>
                  <div className="txt2">
                    Aliquam tempus faucibus hendrerit eget mauris ornare
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="shiPlayer-wrapper">
                <div className="shiPlayer-inner">
                  <div className="vinul"></div>
                  <div className="shiPlayer" id="radio2" data-tag=""></div>
                </div>
                <div className="caption">
                  <div className="txt1">LIVE music CHANNEL / ICECAST</div>
                  <div className="txt2">
                    Aliquam tempus faucibus hendrerit eget mauris ornare
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="divider1"></div>

          <div className="row">
            <div className="col-md-6">
              <div className="shiPlayer-wrapper">
                <div className="shiPlayer-inner">
                  <div className="vinul"></div>
                  <div className="shiPlayer" id="radio3" data-tag=""></div>
                </div>
                <div className="caption">
                  <div className="txt1">The jazz groove / SHOUTCAST</div>
                  <div className="txt2">
                    Aliquam tempus faucibus hendrerit eget mauris ornare
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="shiPlayer-wrapper">
                <div className="shiPlayer-inner">
                  <div className="vinul"></div>
                  <div className="shiPlayer" id="radio4" data-tag=""></div>
                </div>
                <div className="caption">
                  <div className="txt1">/1 JazzRadio / ICECAST</div>
                  <div className="txt2">
                    Aliquam tempus faucibus hendrerit eget mauris ornare
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="divider1"></div>

          <div className="row">
            <div className="col-md-6">
              <div className="shiPlayer-wrapper">
                <div className="shiPlayer-inner">
                  <div className="vinul"></div>
                  <div className="shiPlayer" id="radio5" data-tag=""></div>
                </div>
                <div className="caption">
                  <div className="txt1">Abacus FM / MOZART / SHOUTCAST</div>
                  <div className="txt2">
                    Aliquam tempus faucibus hendrerit eget mauris ornare
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="shiPlayer-wrapper">
                <div className="shiPlayer-inner">
                  <div className="vinul"></div>
                  <div className="shiPlayer" id="radio6" data-tag=""></div>
                </div>
                <div className="caption">
                  <div className="txt1">
                    INSTRUMENTAL style / jazz music / ICECAST
                  </div>
                  <div className="txt2">
                    Aliquam tempus faucibus hendrerit eget mauris ornare
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="divider1"></div>

          <div className="row">
            <div className="col-md-6">
              <div className="shiPlayer-wrapper">
                <div className="shiPlayer-inner">
                  <div className="vinul"></div>
                  <div className="shiPlayer" id="radio7" data-tag=""></div>
                </div>
                <div className="caption">
                  <div className="txt1">
                    The Great American Songbook / SHOUTCAST
                  </div>
                  <div className="txt2">
                    Aliquam tempus faucibus hendrerit eget mauris ornare
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="shiPlayer-wrapper">
                <div className="shiPlayer-inner">
                  <div className="vinul"></div>
                  <div className="shiPlayer" id="radio8" data-tag=""></div>
                </div>
                <div className="caption">
                  <div className="txt1">
                    SINATRA style / AMERICAN music / ICECAST
                  </div>
                  <div className="txt2">
                    Aliquam tempus faucibus hendrerit eget mauris ornare
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />

          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="/">
                previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/">
                1
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="/">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/">
                4
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/">
                ...
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/">
                next
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Channels;
