import React from "react";
import PaymentCard from "../../DashBoard/PaymentCard/PaymentCard";
import Footer from "../../Shared/Footer/Footer";
import NavHeader from "../../Shared/NavHeader/NavHeader";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// // import { CardElement } from "@stripe/react-stripe-js";
// import CheckoutForm from "../CheckoutForm/CheckoutForm";

// const stripePromise = loadStripe(
//   "pk_test_51IeJRZKMw2MF1W6edDkrMdO8w2NjnFPEcFt5MrQL7YAqDm1CurzYkEnVpXN2f3mW5ZAYPyg2RLSwTRerSlpBiCC500bQBrUsqy"
// );

const PaymentForm = () => {
  return (
    <div>
      <NavHeader />
      <PaymentCard />
      <Footer />
    </div>
  );
};

export default PaymentForm;
