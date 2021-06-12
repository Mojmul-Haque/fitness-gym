import React from "react";
import {
  faCoffee,
  faLocationArrow,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css";
import { Link } from "react-router-dom";
import flicker1 from "../../../images/f1.jpg";
import flicker2 from "../../../images/f2.jpg";
import flicker3 from "../../../images/f3.jpg";
import flicker4 from "../../../images/f4.jpg";
import flicker5 from "../../../images/f5.jpg";
import flicker6 from "../../../images/f6.jpg";
const Footer = () => {
  return (
    <footer className="footer-part">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3">
            <div className="footer-main">
              <h3 className="text-white">About Company</h3>
              <p>
                raesent vel rutrum purus. Nam vel dui eu risus duis dignissim
                dignissim. Suspen disse at eros tempus, congueconsequat.Fusce
                sit amet urna feugiat.Praesent vel rutrum purus. Nam vel dui eu
                risus
              </p>
              <div className="social-icon">
                <Link href="https://www.facebook.com/">
                  <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                </Link>
                <Link href="https://www.facebook.com/">
                  <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                </Link>
                <Link href="https://www.facebook.com/">
                  <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                </Link>
                <Link href="https://www.facebook.com/">
                  <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3">
            <div className="footer-main">
              <h3 className="text-white">NEWSLETTER</h3>
              <p>
                Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin lorem auci elit consequ.
              </p>
              <input
                className="form-control newsLetter mt-2"
                type="text"
                name="email"
                placeholder="Subscribes to Newsletter"
              />
            </div>
          </div>
          <div className="col-lg-3 col-md-3">
            <div className="footer-main">
              <h3 className="text-white">Flickr Photos</h3>
              <div className="flicker-photos">
                <Link to="/">
                  <img src={flicker1} alt="fliicker" />
                </Link>

                <Link to="/">
                  <img src={flicker2} alt="fliicker" />
                </Link>

                <Link to="/">
                  <img src={flicker3} alt="fliicker" />
                </Link>

                <Link to="/">
                  <img src={flicker4} alt="fliicker" />
                </Link>

                <Link to="/">
                  <img src={flicker5} alt="fliicker" />
                </Link>

                <Link to="/">
                  <img src={flicker6} alt="fliicker" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3">
            <div className="footer-main">
              <h3 className="text-white">Corporate Office</h3>
              <div className="contact-info">
                <p>
                  {" "}
                  <FontAwesomeIcon icon={faLocationArrow}></FontAwesomeIcon>44
                  New Design Street, rne 005
                </p>
                <p>
                  {" "}
                  <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
                  01800433633
                </p>
                <p>
                  {" "}
                  <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                  demo@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
