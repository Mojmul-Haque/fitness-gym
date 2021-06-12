import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import SingleAddmisionList from "../SingleAddmisionList/SingleAddmisionList";
import "./AddmissionList.css";

const AddmissionList = () => {
  const [addmisionList, setAddmisionList] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch(
      `https://blooming-peak-04928.herokuapp.com/addmisionList?email=${loggedInUser.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAddmisionList(data);
      });
  }, []);
  console.log(addmisionList);

  // updated pending status

  const handleStatus = (id, status) => {
    console.log("hello", id);
    const getStudent = addmisionList.find(
      (getStudent) => getStudent._id === id
    );
    const pendingData = { ...getStudent };
    pendingData.courseStatus = status;
    console.log(pendingData);
    fetch(`https://blooming-peak-04928.herokuapp.com/updatedAddmision/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(pendingData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data, "updated"));
  };

  return (
    <div className="col-lg-9 col-md-9">
      <div className="addmisionList">
        <h3 className="text-white d-inline-block form-heading">
          All Student Addmision list
        </h3>
        <table className="table table-hover table-dark">
          <thead>
            <tr className="table-heading">
              <th scope="col">No.</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Course</th>
              <th scope="col">Pay With</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {addmisionList.map((addmision, index) => (
              <SingleAddmisionList
                addmisionList={addmision}
                key={addmision._id}
                index={index}
                handleStatus={handleStatus}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddmissionList;
