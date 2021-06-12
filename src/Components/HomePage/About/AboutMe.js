import React from "react";
import "./AboutMe.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import aboutImg from "../../../images/about1.jpg";
import {
  faUserAlt,
  faThumbsUp,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

const AboutMe = () => {
  const aboutCardInfo = [
    {
      icon: faUserAlt,
      title: "exprience",
      number: "12",
    },
    {
      icon: faVideo,
      title: "Subscribers",
      number: "500",
    },
    {
      icon: faThumbsUp,
      title: "People Likes",
      number: "4,000",
    },
  ];
  return (
    <section className="about-part">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="about-text">
              <h3 className="section-title">
                WHAT I <span className="brand-color">DO</span>
              </h3>
              <p>
                I am text block. Click edit button to change this text. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. I
                am text block. Click edit button to change this text. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="about-img">
              <img className="img-fluid" src={aboutImg} alt="" />
            </div>
          </div>
        </div>
        <div className="row">
          {aboutCardInfo.map((info,index) => (
            <div key={index} className="col-lg-4 col-md-4 col-sm-6">
              <div className="show-card d-flex border justify-content-center align-items-center">
                <div className="icon">
                  <FontAwesomeIcon icon={info.icon} />
                </div>
                <div className="icon-text">
                  <h5>{info.number}+</h5>
                  <p>{info.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
