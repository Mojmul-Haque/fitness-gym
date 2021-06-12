import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../../../images/banner1.png";
import "./HomeBanner.css";

const HomeBanner = () => {
  return (
    <main className="banner-part">
      <div className="container">
        <div className="row banner-main">
          <div className="col-lg-4 col-md-4 offset-2 col-sm-6 position-relative">
            <div className="banner-img">
              <img
                className="img-fluid w-100"
                src={bannerImg}
                alt="bannerImg"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="banner-content">
              <h1 className="fw-bold text-white">
                Hi
                <span className="d-block">
                  {" "}
                  <span className="fw-normal">I'm</span> John Smith
                </span>
              </h1>
              <h6 className="text-white mt-1 mb-5">Body Building and Yoga Instructor</h6>
              <div className="social-icon"></div>
              <Link to="/" className="all-btn btn text-uppercase">
                Join With Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomeBanner;
