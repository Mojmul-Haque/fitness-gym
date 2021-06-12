import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

const SingleMangeService = ({ course, index, handleRemoveCourse }) => {
  const [showForm, setShowForm] = useState(false);
  const [updatedCourse, setUpdatedCourse] = useState({
    exerciseName: "",
    trainerName: "",
    day: "",
    monthlyFee: "",
    addMissionFee: "",
  });

  const {
    exerciseName,
    addMissionFee,
    day,
    monthlyFee,
    trainerName,
    _id,
  } = course;

  const handleChange = (event) => {
    const updatedData = { ...updatedCourse };
    updatedData[event.target.name] = event.target.value;
    setUpdatedCourse(updatedData);
  };
  console.log(updatedCourse);
  const handleUpdatedCourse = (courseId) => {
    const updatedCourseData = { ...updatedCourse };
    fetch(
      `https://blooming-peak-04928.herokuapp.com/updatedCourse/${courseId}`,
      {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(updatedCourseData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <>
      <tr>
        <th scope="row">{index + 1}</th>
        <td>
          {exerciseName}
          <input
            className={`d-block w-75 ${showForm ? "d-block" : "d-none"}`}
            name="exerciseName"
            placeholder="exerciseName"
            onBlur={handleChange}
          />
        </td>
        <td>
          {trainerName}

          <input
            className={`d-block w-75 ${showForm ? "d-block" : "d-none"}`}
            name="trainerName"
            placeholder="trainerName"
            onBlur={handleChange}
          />
        </td>
        <td>
          {day}{" "}
          <input
            className={`d-block w-75 ${showForm ? "d-block" : "d-none"}`}
            name="day"
            placeholder="day"
            onBlur={handleChange}
          />
        </td>
        <td>
          {monthlyFee}{" "}
          <input
            className={`w-75 ${showForm ? "d-block" : "d-none"}`}
            name="monthlyFee"
            placeholder="monthlyFee"
            onBlur={handleChange}
          />
        </td>
        <td>
          {addMissionFee}{" "}
          <input
            className={`d-block w-75 ${showForm ? "d-block" : "d-none"}`}
            name="addMissionFee"
            placeholder="addMissionFee"
            onBlur={handleChange}
          />
        </td>
        <td>
          {" "}
          <button
            className={`d-block btn btn-success updatedBtn ${
              showForm ? "d-block" : "d-none"
            }`}
            type="submit"
            onClick={() => handleUpdatedCourse(_id)}
          >
            Updated
          </button>
        </td>
        <td className="manage-btn">
          <button
            onClick={() => handleRemoveCourse(_id)}
            className="btn text-white"
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
          <button
            onClick={() => setShowForm(!showForm)}
            className="btn text-white"
          >
            {" "}
            <FontAwesomeIcon icon={faEdit} />
          </button>
        </td>
      </tr>
    </>
  );
};

export default SingleMangeService;
