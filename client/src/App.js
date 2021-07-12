import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import UserPlant from "./Components/UserPlant";
import PlantsContainer from "./Components/PlantsContainer";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [plantsArr, setPlants] = useState([]);
  const [loggedIn, setLogin] = useState(false)

  // auto-login feature!
  useEffect(() => {
    // check if the user has already logged in
    const token = localStorage.getItem("token");
    if (token) {
      // Authorization: Bearer token
      fetch(`http://localhost:3000/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((r) => r.json())
        .then((user) => {
          // save that user in state
          setUser(user);
        });
    }
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3000/plants`)
      .then((res) => res.json())
      .then((plantsArr) => {
        // console.log(plantsArr)
        setPlants(plantsArr);
      });
  }, []);

  const handleLogin = () => {};

  return (
    <>
      <Router>
        <Route render={(routerProps) => <NavBar routerProps={routerProps} />} />
        <Switch>
          <Route
            exact
            path="/login"
            render={(routerProps) => <Login setUser={setUser} />}
          />
          <Route
            exact
            path="/signup"
            render={(routerProps) => <Signup setUser={setUser} />}
          />
          <Route
            exact
            path="/your_plants"
            render={(routerProps) => <UserPlant user={user} />}
          />

          <Route
            exact
            path="/plants"
            render={(routerProps) => <PlantsContainer plantsArr={plantsArr} />}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;