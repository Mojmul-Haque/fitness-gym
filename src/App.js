import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashBoardHome from "./Components/DashBoard/DashBoardHome/DashBoardHome";
import PaymentSuccess from "./Components/DashBoard/PaymentSuccess/PaymentSuccess";
import Home from "./Components/HomePage/Home/Home";
import Login from "./Components/HomePage/Login/Login";
import PrivateRoute from "./Components/HomePage/Login/PrivateRoute/PrivateRoute";
import PaymentForm from "./Components/HomePage/PaymentForm/PaymentForm";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  console.log(loggedInUser,"app js ")
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/dashboard">
            <DashBoardHome />
          </PrivateRoute>
          <PrivateRoute path="/paymentForm/:trainingId">
            <PaymentForm />
          </PrivateRoute>
          <PrivateRoute path="/paymentSuccess">
            <PaymentSuccess/>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
