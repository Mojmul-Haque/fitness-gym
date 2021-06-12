import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import "./SideNav.css";
const SideNav = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState({
    getAdmin: false,
    getUser: true,
  });
  useEffect(() => {
    fetch(`https://blooming-peak-04928.herokuapp.com/checkAdmin`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          const checkRole = { ...isAdmin };
          checkRole.getAdmin = true;
          checkRole.getUser = false;
          setIsAdmin(checkRole);
        }
      });
  }, []);
  console.log(isAdmin);
  return (
    <div className="col-lg-2 px-0">
      <div className="side-nav text-center">
        <div className="sideNav-menu">
          {isAdmin.getUser && (
            <div>
              <Link className="nav-link" to="/dashboard">
                Booking-List
              </Link>
              <Link className="nav-link" to="/dashboard/review">
                Review
              </Link>
            </div>
          )}

          {isAdmin.getAdmin && (
            <div>
              <Link className="nav-link" to="/dashboard/addCourse">
                Add Course
              </Link>
              <Link className="nav-link" to="/dashboard/addmisionList">
                Addmision List
              </Link>{" "}
              <Link className="nav-link" to="/dashboard/create-admin">
                Make Admin
              </Link>
              <Link className="nav-link" to="/dashboard/manageService">
                Manage Service
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideNav;
