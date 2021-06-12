import React, { useEffect, useState } from "react";
import AddReview from "../AddReview/AddReview";
import BookList from "../BookList/BookList";
import SeetBook from "../SeetBook/SeetBook";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideNav from "../SideNav/SideNav";
import AddCourse from "../../DashBoard/AddCourse/AddCourse";
import AddmissionList from "../AddmissionList/AddmissionList";
import ManageService from "../ManageService/ManageService";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
// import SideNav from "../SideNav/";

const AdminDashBoard = () => {
  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <Router>
            <SideNav />
            <Switch>
              <Route exact path={`/dashboard`}>
                <BookList />
              </Route>
              <Route path="/dashboard/review">
                <AddReview />
              </Route>
              <Route path="/dashboard/addCourse">
                <AddCourse />
              </Route>
              <Route path="/dashboard/addmisionList">
                <AddmissionList />
              </Route>
              <Route path="/dashboard/manageService">
                <ManageService />
              </Route>
              <Route path="/dashboard/create-admin">
                <MakeAdmin />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </section>
  );
};

export default AdminDashBoard;
