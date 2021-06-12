import React from "react";
import { Link } from "react-router-dom";
import "./SingleScedule.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faClock,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";

const SingleSchedule = ({ schedule, handleJoin }) => {
  const {
    day,
    exerciseName,
    trainerName,
    time,
    addMissionFee,
    monthlyFee,
    image,
    _id,
  } = schedule;
  return (
    <div className="col-lg-4 col-md-4 col-sm-6">
      <div className="main-schedule">
        <figure className="img  text-center position-relative ">
          <img className="img-fluid w-100" src={image} alt="" />
          <figcaption className="img-content position-relative">
            <h3 className="class-name"> {exerciseName}</h3>
            <h6 className="d-flex justify-content-between bg-dark py-3 text-white date-time">
              <span className="px-3">
                <FontAwesomeIcon icon={faClock} />
                {time}
              </span>
              <span className="px-3">
                <FontAwesomeIcon icon={faUserAlt} /> By {trainerName}
              </span>
              <span className="px-3">
                <FontAwesomeIcon icon={faCalendar} /> {day}
              </span>
            </h6>

            <div className="course-fee">
              <h5 className="text-white">Addmission Fee: {addMissionFee}</h5>
              <h5 className="text-white">Month Fee: {monthlyFee}</h5>
            </div>
          </figcaption>
        </figure>
        <Link
          to={`/paymentForm/${_id}`}
          onClick={() => handleJoin(_id)}
          className="btn all-btn text-white addCourseBtn"
        >
          Join Now
        </Link>
      </div>
    </div>
  );
};

export default SingleSchedule;
