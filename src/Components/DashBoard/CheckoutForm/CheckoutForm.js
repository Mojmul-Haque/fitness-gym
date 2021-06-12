import React, { useContext, useMemo, useState } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
import { UserContext } from "../../../App";
import { Link } from "react-router-dom";

const useOptions = () => {
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize: "16px",
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "#9e2146",
        },
      },
    }),
    []
  );

  return options;
};

const CheckoutForm = ({ selectClass }) => {
  console.log(selectClass, "Payment form wiith data");
  const {
    exerciseName,
    image,
    day,
    time,
    monthlyFee,
    addMissionFee,
  } = selectClass;
  const monthPay = Number(monthlyFee);
  const addmisionPay = Number(addMissionFee);
  const totalFee = monthPay + addmisionPay;
  console.log(totalFee, "totall fee before");
  const [userPaymentData, setuserPaymentData] = useState({
    name: "",
    email: "",
    course: "",
    paymentId: "",
    paymentSuccess: "",
    errorMessage: "",
  });

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser);

  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    });
    console.log("[PaymentMethod]", payload.paymentMethod);
    const userData = { ...userPaymentData };
    userData.course = exerciseName;
    if (payload.paymentMethod) {
      userData.paymentId = payload.paymentMethod.id;
      userData.errorMessage = "";
      userData.paymentSuccess = true;

      const userSubmitData = {
        name: userPaymentData.name,
        paymentEmail: userPaymentData.email,
        email: loggedInUser.email,
        paymentId: payload.paymentMethod.id,
        course: exerciseName,
        courseThumb: image,
        Classtime: time,
        Classday: day,
        createPaymentMethod: new Date(),
        courseStatus: "pending",
        isPending: null,
      };
      fetch(`https://blooming-peak-04928.herokuapp.com/addmision`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(userSubmitData),
      })
        .then((res) => res.json())
        .then((result) =>
          console.log(result, "user payment data post on server")
        );
      console.log(userSubmitData, "posting data");
    } else if (payload.error) {
      userData.paymentSuccess = false;
      userData.errorMessage = payload.error.message;
      userData.paymentId = "";
    }
    setuserPaymentData(userData);
    // post data on server
  };

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name, "=", value);
    const userData = { ...userPaymentData };
    userData[event.target.name] = event.target.value;
    setuserPaymentData(userData);
  };

  console.log(userPaymentData);
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="form-control my-3"
        type="text"
        name="name"
        placeholder="your name"
        onBlur={handleInput}
      />
      <input
        className="form-control my-3"
        type="text"
        name="email"
        placeholder="your email"
        onBlur={handleInput}
      />
      <input
        className="form-control my-3"
        type="text"
        name="course"
        placeholder="your course"
        value={exerciseName}
      />

      <CardNumberElement
        className="form-control my-3"
        options={options}
        onReady={() => {}}
        onChange={(event) => {}}
        onBlur={() => {}}
        onFocus={() => {}}
      />

      <CardExpiryElement
        className="form-control my-3"
        options={options}
        onReady={() => {}}
        onChange={(event) => {}}
        onBlur={() => {}}
        onFocus={() => {}}
      />

      <CardCvcElement
        className="form-control my-3"
        placeholder="your CVC"
        options={options}
        onReady={() => {}}
        onChange={(event) => {
          console.log("CardNumberElement [change]", event);
        }}
        onBlur={() => {
          console.log("CardNumberElement [blur]");
        }}
        onFocus={() => {
          console.log("CardNumberElement [focus]");
        }}
      />
      <h6>
        You will pay one month advanced &amp; Addmission Fee ({monthPay}+
        {addmisionPay}) = $ {totalFee}
      </h6>
      <Link to="/paymentSuccess">
        {" "}
        <button
          className="form-control my-3 all-btn btn bg-secondary"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
      </Link>

      {userPaymentData.paymentSuccess ? (
        <div className="success">Your payment successfull</div>
      ) : (
        <div className="error text-danger">{userPaymentData.errorMessage}</div>
      )}
    </form>
  );
};

export default CheckoutForm;

// 4242 4242 4242 4242
