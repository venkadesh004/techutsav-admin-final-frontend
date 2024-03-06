import React from "react";

import AdminPage from "./Pages/AdminPage";
import Login from "./Pages/Login";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/list" element={<AdminPage />} />
    </Routes>
  );
};

export default App;
