import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./addReview.css";
import reviewVendor from "../../../images//review.jpg";
import reviewVendor2 from "../../../images//review1.jpg";

const AddReview = () => {
  const [imageURL, setImageURL] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    const reviewData = {
      name: data.name,
      title: data.comapnay,
      description: data.description,
      reviewStar: data.reviewStar,
      photoURL: imageURL,
    };

    fetch(`https://blooming-peak-04928.herokuapp.com/addReview`, {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then((success) => {
        console.log(success);
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
    <div className="col-lg-9">
      <div className="row">
        <div className="col-lg-6 offset-1">
          <div className="add-review">
            <h4 className="pb-2">
              LEAVE A <span className="brand-color">REPLY</span>
            </h4>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  className="form-control my-2"
                  {...register("name", { required: true })}
                  placeholder="name"
                />
                {errors.name && (
                  <span className="text-danger fs-5">name is required</span>
                )}
              </div>
              <div>
                <label htmlFor="name">Company:</label>
                <input
                  className="form-control my-2"
                  {...register("comapnay", { required: true })}
                  placeholder="comapnay"
                />
                {errors.comapnay && (
                  <span className="text-danger fs-5">comapnay is required</span>
                )}
              </div>
              <div>
                <label htmlFor="name">ReviewStar:</label>
                <input
                  className="form-control my-2"
                  {...register("reviewStar", { required: true })}
                  placeholder="reviewStar"
                />
                {errors.reviewStar && (
                  <span className="text-danger fs-5">
                    reviewStar is required
                  </span>
                )}
              </div>
              <div>
                <label htmlFor="name">REPLY:</label>
                <textarea
                  className="form-control my-2 review-description"
                  {...register("description", { required: true })}
                  placeholder="description"
                />
                {errors.description && (
                  <span className="text-danger fs-5">
                    description is required
                  </span>
                )}
              </div>
              <div>
                <label htmlFor="name">Your Photo:</label>
                <input
                  className="form-control my-2"
                  type="file"
                  onChange={handleImage}
                />
              </div>
              <input
                className="form-control all-btn my-2 mt-2"
                type="submit"
                value="Submit Review"
              />
            </form>
          </div>
        </div>
        <div className="col-lg-5">
            <img className="img-fluid" src={reviewVendor2} alt="" />
          <div className="reviewImg">
            <img className="img-fluid" src={reviewVendor} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
