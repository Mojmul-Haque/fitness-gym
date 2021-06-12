import React from "react";
import "./SingleReview.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const SingleRewview = ({ review }) => {
  const { name, photoURL, title, description, reviewStar } = review;
  const star = [];
  for (let i = 0; i < reviewStar; i++) {
    star.push(i);
  }
  return (
    <div className="col-lg-4 col-md-4 col-sm-6">
      <div className="tesi-main">
        <div className=" d-flex align-items-center">
          <div className="img">
            <img src={photoURL} className="img-fluid" alt="" />
          </div>{" "}
          <div className="tesi-text">
            <h6>{name}</h6>
            <h6>{title}</h6>
          </div>
        </div>
        <p>{description}</p>
        {star.map((data) => (
          <div className="d-inline-block reviewStar" key={data}>
            <FontAwesomeIcon icon={faStar} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleRewview;
