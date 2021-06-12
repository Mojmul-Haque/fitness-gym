import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { UserContext } from "../../../App";

const AddStudent = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [imageURL, setImageURL] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const classData = {
      day: data.day,
      exerciseName: data.exerciseName,
      trainerName: data.trainerName,
      addMissionFee: data.addMissionFee,
      monthlyFee: data.monthlyFee,
      time: data.time,
      image: imageURL,
    };
    console.log(data.day);
    fetch(
      `https://blooming-peak-04928.herokuapp.com/addCourse?email=${loggedInUser.email}`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(classData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        data && alert("your service added");
      });
  };

  const handleImage = (event) => {
    const imageData = new FormData();
    imageData.set("key", "371a2068f3d3dcec04d20b1ada3121d8");
    imageData.append("image", event.target.files[0]);
    axios.post("https://api.imgbb.com/1/upload", imageData).then((result) => {
      console.log(result);
      setImageURL(result.data.data.display_url);
    });
  };
  console.log(imageURL);

  return (
    <div className="col-lg-10">
      <div className="row">
        <div className="col-lg-6 offset-1">
          <div className="add-review">
            <h3 className="text-white d-inline-block form-heading">
            Add New Course
            </h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label className="fs-5 fw-noraml pt-2 text-capitalize">Day</label>
                <input
                  className="form-control my-2"
                  {...register("day", { required: true })}
                  placeholder="day"
                />
                {errors.day && <span className="text-danger">day is required</span>}
              </div>
              <div>
              <label className="fs-5 fw-noraml pt-2 text-capitalize">Exercise Name</label>
                <input
                  className="form-control my-2"
                  {...register("exerciseName", { required: true })}
                  placeholder="exercise Name"
                />
                {errors.exerciseName && <span className="text-danger">exerciseName is required</span>}
              </div>
              <div>
              <label className="fs-5 fw-noraml pt-2 text-capitalize">trainer Name</label>
                <input
                  className="form-control my-2"
                  {...register("trainerName", { required: true })}
                  placeholder="trainer Name"
                />
                {errors.trainerName && <span className="text-danger">trainerName is required</span>}
              </div>
              <div>
              <label className="fs-5 fw-noraml pt-2 text-capitalize">addMission Fee</label>
                <input
                  className="form-control my-2"
                  {...register("addMissionFee", { required: true })}
                  placeholder="addMissionFee"
                />
                {errors.addMissionFee && <span className="text-danger">addMissionFee is required</span>}
              </div>
              <div>
              <label className="fs-5 fw-noraml pt-2 text-capitalize">monthly Fee</label>
                <input
                  className="form-control my-2"
                  {...register("monthlyFee", { required: true })}
                  placeholder="monthlyFee"
                />
                {errors.monthlyFee && <span className="text-danger">monthlyFee is required</span>}
              </div>
              <div>
              <label className="fs-5 fw-noraml pt-2 text-capitalize">time</label>
                <input
                  className="form-control my-2"
                  {...register("time", { required: true })}
                  placeholder="time"
                />
                {errors.time && <span className="text-danger">time is required</span>}
              </div>
              <div>
              <label className="fs-5 fw-noraml pt-2 text-capitalize">Your Photo</label>
                <input
                  className="form-control my-2"
                  type="file"
                  onChange={handleImage}
                />
              </div>
              <input
                className="form-control my-2 all-btn"
                type="submit"
                value="Add Student"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
