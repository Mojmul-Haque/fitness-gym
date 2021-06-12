import React, { useEffect, useState } from "react";
import testimonialData from "../../../fakeData/review";
import SingleRewview from "../SingleReview/SingleRewview";
const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    setReviews(testimonialData);
    fetch(`https://blooming-peak-04928.herokuapp.com/showReview`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      });
  }, []);
  return (
    <section className="testimonial-part">
      <div className="container">
        <div className="row">
          <h3 class="section-title text-center">
            {" "}
            WHAT CLIENT'S <span className="brand-color"> SAY</span>
          </h3>
          {reviews.map((review) => (
            <SingleRewview review={review} key={review._id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
