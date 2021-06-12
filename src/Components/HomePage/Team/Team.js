import React from "react";
import { Link } from "react-router-dom";
import "./Team.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Team = () => {
  const trainerInfo = [
    {
      name: "Shahinur-Alam",
      trainer: "fitness trainer",
      image: "http://zcube.in/hitup/img/team/team03.png",
    },
    {
      name: "Shahinur-Alam",
      trainer: "fitness trainer",
      image: "http://zcube.in/hitup/img/team/team01.png",
    },
    {
      name: "Shahinur-Alam",
      trainer: "fitness trainer",
      image: "http://zcube.in/hitup/img/team/team03.png",
    },
  ];
  return (
    <section className="team-part">
      <div className="container">
        <div className="row text-center">
          <h3 className="section-title">
            EXPERT <span className="brand-color">TRAINERS</span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur, libero sed cum. Delectus suscipit tempore fugit,
            accusamus inventore, sunt quod ullam saepe consequuntur quasi illo
            odit
          </p>
          {trainerInfo.map((info) => (
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="trainer-details">
                <figure className="img  text-center position-relative ">
                  <img className="img-fluid w-100" src={info.image} alt="" />
                  <figcaption className="img-content position-relative">
                    <h3 className="class-name"> {info.name}</h3>
                    <h6 className="d-flex justify-content-between bg-dark py-3 text-white date-time">
                      <span className="px-3">Personal Trainer</span>
                      <div className="social-meidia">
                        <Link to="/">
                          <FontAwesomeIcon icon={faFacebookF} />
                        </Link>
                        <Link to="/">
                          <FontAwesomeIcon icon={faTwitter} />
                        </Link>
                        <Link to="/">
                          <FontAwesomeIcon icon={faInstagram} />
                        </Link>
                      </div>
                    </h6>
                  </figcaption>
                </figure>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
