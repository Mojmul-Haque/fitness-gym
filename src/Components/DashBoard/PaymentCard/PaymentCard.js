import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
// import { CardElement } from "@stripe/react-stripe-js";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { useParams } from "react-router";

const stripePromise = loadStripe(
  "pk_test_51IeJRZKMw2MF1W6edDkrMdO8w2NjnFPEcFt5MrQL7YAqDm1CurzYkEnVpXN2f3mW5ZAYPyg2RLSwTRerSlpBiCC500bQBrUsqy"
);

const PaymentCard = () => {
  const { trainingId } = useParams();
  console.log(trainingId);
  const [classSchedules, setClassSchedules] = useState([]);
  useEffect(() => {
    fetch(`https://blooming-peak-04928.herokuapp.com/allCourses`)
      .then((res) => res.json())
      .then((data) => {
        const gymCourse = data.find((result) => result._id === trainingId);
        setClassSchedules(gymCourse);
      });
  }, [trainingId]);
  console.log(classSchedules);
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <Elements stripe={stripePromise}>
            <CheckoutForm selectClass={classSchedules} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
