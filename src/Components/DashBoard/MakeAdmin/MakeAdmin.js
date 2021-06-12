import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../App";

const MakeAdmin = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data, data.email);
    const admin = { email: data.email };
    fetch(
      `https://blooming-peak-04928.herokuapp.com/addAdmin?email=${loggedInUser.email}`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(admin),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        data && alert("New Admin Added");
      });
  };

  console.log(watch("example"));
  return (
    <div className="col-lg-9 col-md-9 mt-3">
      <div className="row add-review addmisionList">
        <div className="col-lg-5">
          <h3 className="text-white d-inline-block form-heading">
            Add New Admin
          </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="form-control my-3"
              placeholder="email"
              {...register("email", { required: true })}
            />
            {errors.email && <span>email is required</span>}

            <button className="d-block all-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
