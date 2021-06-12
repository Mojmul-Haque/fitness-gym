import React from "react";
import "./SingleBookList.css";

const SingleBookList = ({ classList }) => {
  const { Classday, Classtime, course, courseStatus, courseThumb } = classList;
  return (
    <div className="col-lg-4">
      <div className="class-list">
        <figure>
          <div className="img position-relative">
            <img src={courseThumb} className="img-fluid" alt="" />
            <figcaption>
              <div className="img-content ">
                <p className={`float-end fs-6 text-white ${courseStatus}`}>
                  {courseStatus}
                </p>
                <h5 className="d-inline-block border-bottom pb-1 text-capitalize">{course}</h5>
                <h6>Day: {Classday}</h6>
                <h6>Time: {Classtime}</h6>
              </div>
            </figcaption>
          </div>
        </figure>
      </div>
    </div>
  );
};

export default SingleBookList;
