import React, { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../../App";
import {
  clientIdToken,
  emailSignIn,
  googleSingIn,
} from "../../../lib/firebase";

import avatar from "../../../images/avatar2.png";

import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  let { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleSignIn = () => {
    googleSingIn().then((res) => {
      const { displayName, email, photoURL } = res;
      const userInfo = {
        name: displayName,
        email: email,
        image: photoURL,
        signIn: true,
      };
      setLoggedInUser(userInfo);
      setUserToken();
      history.replace(from);
    });
  };
  const setUserToken = () => {
    clientIdToken().then((idToken) => {
      sessionStorage.setItem("token", idToken);
    });
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    emailSignIn(data.email, data.password).then((res) => {
      console.log(res);
      if (res.email) {
        console.log("login successfully done");
        document.getElementById("errorMessage").innerText =
          "Login successfully done";
      } else {
        console.log("logion  failed");
        document.getElementById("errorMessage").innerText = res;
      }
    });
    console.log(data);
  };

  // show password value in input field;

  const [togglePassword, setTogglePassword] = useState({
    isShow: false,
    attribute: "password",
  });

  // show password value in input field;
  const showPassword = (isShow) => {
    if (isShow) {
      const info = { ...togglePassword };
      info.isShow = true;
      info.attribute = "text";
      setTogglePassword(info);
    } else {
      const info = { ...togglePassword };
      info.isShow = false;
      info.attribute = "password";
      setTogglePassword(info);
    }
  };

  return (
    <section className="login-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <form
              className=" position-relative "
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="login-head text-center">
                <img
                  style={{ width: "100px", height: "100px" }}
                  src={avatar}
                  alt="loginAvatar"
                  className="img-fluid "
                />
              </div>
              <div>
                <input
                  className="form-control my-2"
                  {...register("email", { required: true })}
                  placeholder="Your Email"
                />
                {errors.email && (
                  <span className="text-danger text-start error">
                    Email is required
                  </span>
                )}
              </div>
              <div className="position-relative">
                <input
                  className="form-control my-2"
                  type={togglePassword.attribute}
                  id="password"
                  placeholder="Your password"
                  {...register("password", { required: true })}
                />

                <span
                  onClick={() => showPassword(!togglePassword.isShow)}
                  className="togglePassword"
                >
                  <FontAwesomeIcon icon={faEye} />
                </span>
                {errors.password && (
                  <span className="text-danger text-start">
                    Password is required
                  </span>
                )}
              </div>

              <div className="text-danger" id="errorMessage"></div>
              <button type="submit" className="btn btn-success my-3 loginBtn">
                Login
              </button>

              <button
                className="loginBtn btn btn-success
              "
                onClick={handleGoogleSignIn}
              >
                {" "}
                Continue with google
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
