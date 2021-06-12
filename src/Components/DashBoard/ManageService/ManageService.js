import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import SingleMangeService from "../SingleMangeService/SingleMangeService";
const ManageService = () => {
  const [courses, setcourses] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  useEffect(() => {
    fetch(
      `https://blooming-peak-04928.herokuapp.com/allCourses?email=${loggedInUser.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setcourses(data);
      });
  }, []);

  //remvoe  coursre
  const handleRemoveCourse = (courseId) => {
    fetch(
      `https://blooming-peak-04928.herokuapp.com/removeCourse/${courseId}`,
      {
        method: "DELETE",
        headers: { "content-type": "text/plain" },
        body: JSON.stringify(courseId),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  console.log(courses);

  return (
    <div className="col-lg-10 col-md-10 mb-5">
      <div className="addmisionList">
        <table className="table table-dark table-hover text-center">
          <thead>
            <tr className="table-heading">
              <th scope="col">No.</th>
              <th scope="col">Exercise Name</th>
              <th scope="col">Trainer Name</th>
              <th scope="col">Day</th>
              <th scope="col">Monthly Fee</th>
              <th scope="col">AddMission Fee</th>
              <th scope="col"></th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <SingleMangeService
                course={course}
                key={course._id}
                index={index}
                handleRemoveCourse={handleRemoveCourse}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageService;
