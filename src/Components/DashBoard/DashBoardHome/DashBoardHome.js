import React from "react";
import Footer from "../../Shared/Footer/Footer";
import NavHeader from "../../Shared/NavHeader/NavHeader";
import UserDashBoard from "../UserDashBoard/UserDashBoard";

const DashBoardHome = () => {

  return (
    <div>
      <NavHeader />
      <UserDashBoard/>
      <Footer />
    </div>
  );
};

export default DashBoardHome;
