import React from "react";
import PaymentCard from "../PaymentCard/PaymentCard";
const SeetBook = ({ selectClass }) => {
  return (
    <div className="col-lg-3">
      <PaymentCard selectClass={selectClass} />
    </div>
  );
};

export default SeetBook;
