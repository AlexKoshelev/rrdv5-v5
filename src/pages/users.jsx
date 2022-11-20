import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import User from "./user";

import UsersList from "./usersList";

const Users = () => {
  const { path } = useRouteMatch();

  const users = [
    { id: 1, name: "user1" },
    { id: 2, name: "user2" },
    { id: 3, name: "user3" },
    { id: 4, name: "user4" },
    { id: 5, name: "user5" },
    { id: 6, name: "user6" },
    { id: 7, name: "user7" },
    { id: 8, name: "user8" },
    { id: 9, name: "user9" },
    { id: 10, name: "user10" },
  ];

  return (
    <>
      <div>
        <Link to="/">Home Page</Link>
      </div>
      <Switch>
        <Route
          path={path + "/:userId"}
          render={(props) => <User users={users} {...props} />}
        />
        <Route
          path={path + "/"}
          render={(props) => <UsersList users={users} {...props} />}
        />
      </Switch>
    </>
  );
};
export default Users;
