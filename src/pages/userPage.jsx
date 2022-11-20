import React from "react";
import { Link, useParams } from "react-router-dom";

const UserPage = () => {
  const params = useParams();
  const userId = params.userId;

  return (
    <>
      <h2>User Page</h2>
      <ul>
        <li>
          <Link to="/users">User List Page</Link>
        </li>
        <li>
          <Link to={`/users/${userId}/profile`}>Edit user</Link>
        </li>
      </ul>
      <h6>userId: {userId}</h6>
    </>
  );
};

export default UserPage;
