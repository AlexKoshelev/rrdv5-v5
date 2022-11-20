import React from "react";
import HomePage from "./pages/homePage";
import { Route, Switch, Redirect, Link } from "react-router-dom";

import Users from "./pages/users";

function App() {
  return (
    <>
      <h1>App layout</h1>
      <Link to="/users">Users List Page</Link>
      <Switch>
        <Route path="/users" component={Users} />
        <Route path="/" component={HomePage} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
