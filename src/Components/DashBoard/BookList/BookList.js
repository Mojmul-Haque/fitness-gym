import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import SingleBookList from "../SingleBookList/SingleBookList";
import "./BookingList.css";

const BookList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [selectClass, setSelectClass] = useState([]);
  useEffect(() => {
    fetch(
      `https://blooming-peak-04928.herokuapp.com/allAddmision?email=${loggedInUser.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSelectClass(data);
      });
  }, [loggedInUser.email]);
  console.log(selectClass);
  console.log(loggedInUser, "for email");

  return (
    <div className="col-lg-9 booking-list-item">
      <div className="row d-flex">
        {selectClass.map((data) => (
          <SingleBookList classList={data} key={data._id} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
