import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
import "./SingleAddmissionList.css";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const SingleAddmisionList = ({ addmisionList, index, handleStatus }) => {
  const { name, email, course, courseStatus, _id } = addmisionList;
  return (
    <tr className="table-rowse">
      <th scope="row">{index + 1}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>{course}</td>
      <td>Creadit Card</td>
      <td>
        <div className="courseStatus position-relative">
          <button className={`btn statusBtn-${courseStatus}`}>
            {courseStatus} <FontAwesomeIcon icon={faChevronDown} />
          </button>

          <div className="dropdown-status">
            <button
              onClick={() => handleStatus(_id, "done")}
              className="btn-success btn d-block"
            >
              Done
            </button>
            <button
              onClick={() => handleStatus(_id, "ongoing")}
              className="btn-warning btn d-block"
            >
              On going
            </button>
            <button
              onClick={() => handleStatus(_id, "pending")}
              className="btn-warning btn d-block"
            >
              Pending
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default SingleAddmisionList;
