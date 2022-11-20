import React from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import EditPage from "./editPage";
import UserPage from "./userPage";

const User = ({ users }) => {
  const { path } = useRouteMatch();
  return (
    <>
      <Switch>
        <Route exact path={path + "/profile"} component={EditPage} />
        <Route exact path={path} render={() => <UserPage users={users} />} />
        <Redirect to={path} />
      </Switch>
    </>
  );
};

export default User;
