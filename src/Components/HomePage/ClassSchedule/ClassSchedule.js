import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import SingleSchedule from "../SingleSchedule/SingleSchedule";
const ClassSchedule = () => {
  const [classSchedules, setClassSchedules] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser);
  useEffect(() => {
    fetch(`https://blooming-peak-04928.herokuapp.com/allCourses`)
      .then((res) => res.json())
      .then((data) => setClassSchedules(data));
  }, []);

  const handleJoin = (courseId) => {
    console.log(courseId)
  };
  return (
    <section className="class-schedule">
      <div className="container">
        <div className="row">
          <h3 className="section-title text-center">
            CLASS <span className="brand-color">SCHEDULE</span>
          </h3>
          {classSchedules.map((schedule) => (
            <SingleSchedule 
              schedule={schedule}
              key={schedule._id}
              handleJoin={handleJoin}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassSchedule;
