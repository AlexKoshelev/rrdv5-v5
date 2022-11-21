import React from "react";
import { Link, Outlet } from "react-router-dom";

const Users = () => {
  return (
    <>
      <div>
        <Link to="/">Home Page</Link>
      </div>
      <Outlet />
    </>
  );
};
export default Users;
