import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../Shared/Breadcrumb/Breadcrumb";
import news01 from "../../../images/news01.jpg";
import news02 from "../../../images/news02.jpg";
import news03 from "../../../images/news03.jpg";
import blog1 from "../../../images/blog1.jpg";
import blog2 from "../../../images/blog2.jpg";
import blog3 from "../../../images/blog3.jpg";
const Blog = () => {
  return (
    <div className="not-front page-blog">
      <Breadcrumb />
      <div className="breadcrumbs1_wrapper">
        <div className="container">
          <div className="breadcrumbs1">
            <Link to="/">
              <i className="fa fa-home" aria-hidden="true"></i>
            </Link>
            <span>/</span>Blog
          </div>
        </div>
      </div>
      <div id="content" className="page-section">
        <div className="container">
          <div className="title1">
            . <span>our blog</span> .
          </div>

          <div className="title2">
            Sed pharetra nunc ultrices, elementum velit fringilla, fringilla
            risus. Phase llus cursus est et nunc sagittis
            <br />
            consectetur ac quis ante
          </div>

          <div className="row">
            <div className="col-md-8 column-content mb-5 mb-md-0">
              <div className="post post-short">
                <div className="post-header">
                  <div className="post-image">
                    <img src={blog1} alt="" className="img-fluid" />
                  </div>
                  <div className="post-by">
                    June 13, 2018 by <a href="#">Admin</a> on{" "}
                    <a href="#">RADIO FM</a>
                  </div>
                  <div className="post-header-txt">
                    <div className="txt1">
                      LOREM IPSUM DOLOR SIT AMET
                      <br />
                      CONCATEUR NON TROPPO
                    </div>
                    <div className="txt2">
                      Pellentesque habitant morbi tristique senectus et netus et
                      malesuada fames ac turpis <br />
                      egestas. Morbi quis iaculis sem, quis pellentesque tellus.
                    </div>
                    <div className="txt3">
                      <a href="post.html" className="btn3">
                        READ MORE
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="post post-short">
                <div className="post-header">
                  <div className="post-image">
                    <img src={blog2} alt="" className="img-fluid" />
                  </div>
                  <div className="post-by">
                    MAY 19, 2018 by <a href="#">CUSTOMERS</a> on{" "}
                    <a href="#">RADIO FM</a>
                  </div>
                  <div className="post-header-txt">
                    <div className="txt1">
                      LOREM IPSUM DOLOR SIT AMET
                      <br />
                      CONCATEUR NON TROPPO
                    </div>
                    <div className="txt2">
                      Pellentesque habitant morbi tristique senectus et netus et
                      malesuada fames ac turpis <br />
                      egestas. Morbi quis iaculis sem, quis pellentesque tellus.
                    </div>
                    <div className="txt3">
                      <a href="post.html" className="btn3">
                        READ MORE
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="post post-short">
                <div className="post-header">
                  <div className="post-image">
                    <img src={blog3} alt="" className="img-fluid" />
                  </div>
                  <div className="post-by">
                    APRIL 21, 2018 by LIVE <a href="#">STEAMING</a> on{" "}
                    <a href="#">RADIO FM</a>
                  </div>
                  <div className="post-header-txt">
                    <div className="txt1">
                      LOREM IPSUM DOLOR SIT AMET
                      <br />
                      CONCATEUR NON TROPPO
                    </div>
                    <div className="txt2">
                      Pellentesque habitant morbi tristique senectus et netus et
                      malesuada fames ac turpis <br />
                      egestas. Morbi quis iaculis sem, quis pellentesque tellus.
                    </div>
                    <div className="txt3">
                      <a href="post.html" className="btn3">
                        READ MORE
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="pagination yellow">
                <li className="page-item">
                  <a className="page-link" href="#">
                    previous
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    ...
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    next
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 column-sidebar">
              <div className="sidebar-block">
                <div className="my_search">
                  <form className="clearfix">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                    <a href="#" className="">
                      <i className="fa fa-search"></i>
                    </a>
                  </form>
                </div>
              </div>

              <div className="sidebar-block">
                <div className="sidebar-title">category</div>
                <ul className="ul1">
                  <li>
                    <a href="#">
                      RADIO STREAM <span>(52)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      MUSIC CHANNELS <span>(21)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      jAZZ EVENTS <span>(13)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      1980’s STYLE & DISCO <span>(46)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      POP MUSIC <span>(58)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      CLASSICAL MUSIC FESTIVALS <span>(9)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      CHARTS <span>(16)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      EVENTS <span>(79)</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="sidebar-block">
                <div className="sidebar-title">tags</div>
                <ul className="tags">
                  <li>
                    <a href="#">T-SHIRT</a>
                  </li>
                  <li>
                    <a href="#">music</a>
                  </li>
                  <li>
                    <a href="#">business</a>
                  </li>
                  <li>
                    <a href="#">DIGITAL</a>
                  </li>
                  <li>
                    <a href="#">fashion</a>
                  </li>
                  <li>
                    <a href="#">BRAND</a>
                  </li>
                  <li>
                    <a href="#">EVENTS</a>
                  </li>
                  <li>
                    <a href="#">DOWNLOAD</a>
                  </li>
                  <li>
                    <a href="#">CUP</a>
                  </li>
                  <li>
                    <a href="#">marketing</a>
                  </li>
                  <li>
                    <a href="#">design</a>
                  </li>
                </ul>
              </div>

              <div className="sidebar-block">
                <div className="news1">
                  <a href="#" className="clearfix">
                    <figure>
                      <img src={news01} alt="" className="img-fluid" />
                    </figure>
                    <div className="caption">
                      <div className="txt1">January 19, 2016</div>
                      <div className="txt2">Lorem ipsum dolor siturn amet</div>
                      <div className="txt3">Goran Ramljak</div>
                    </div>
                  </a>
                </div>
                <div className="news1">
                  <a href="#" className="clearfix">
                    <figure>
                      <img src={news02} alt="" className="img-fluid" />
                    </figure>
                    <div className="caption">
                      <div className="txt1">January 19, 2016</div>
                      <div className="txt2">Lorem ipsum dolor siturn amet</div>
                      <div className="txt3">Goran Ramljak</div>
                    </div>
                  </a>
                </div>
                <div className="news1">
                  <a href="#" className="clearfix">
                    <figure>
                      <img src={news03} alt="" className="img-fluid" />
                    </figure>
                    <div className="caption">
                      <div className="txt1">January 19, 2016</div>
                      <div className="txt2">Lorem ipsum dolor siturn amet</div>
                      <div className="txt3">Goran Ramljak</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
