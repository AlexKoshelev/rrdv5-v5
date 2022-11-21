import React from "react";
import HomePage from "./pages/homePage";
import { Link, Navigate, Route, Routes } from "react-router-dom";

import Users from "./pages/users";
import UsersList from "./pages/usersList";
import UserPage from "./pages/userPage";
import EditPage from "./pages/editPage";

function App() {
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
      <h1>App layout</h1>
      <Link to="/users">Users List Page</Link>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="users" element={<Users />}>
          <Route index element={<UsersList users={users} />} />
          <Route path=":userId">
            <Route index element={<UserPage users={users} />} />
            <Route path="profile" element={<EditPage />} />
            <Route path="*" element={<Navigate to="" />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
