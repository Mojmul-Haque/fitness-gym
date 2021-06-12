import React from "react";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <div>
      <h3>Your Payment successfull.</h3>
      <Link to="/dashboard">Go to Your DashBoard</Link>
    </div>
  );
};

export default PaymentSuccess;
