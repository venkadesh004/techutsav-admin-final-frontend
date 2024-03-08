import React, { useState } from "react";

import Data from "../components/Data";
import Button from "@mui/material/Button";

import { api } from "../api/api";

const AdminPage = () => {
  const [updateForm, setUpdateForm] = useState(false);
  return (
    <div className="h-screen overflow-hidden">
      <div className={`w-full h-[50px] flex items-center p-10 justify-between`}>
        <h1 className={`text-2xl font-bold`}>ADMIN PANEL</h1>
        <div className="w-[350px] flex items-center justify-between">
          <Button variant="contained" onClick={() => setUpdateForm(true)}>
            Refresh Data
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              window.location.href = import.meta.env.VITE_API_KEY+"/downloadData";
            }}
          >
            Download Data
          </Button>
        </div>
      </div>
      <Data updateForm={updateForm} setUpdateForm={setUpdateForm} />
    </div>
  );
};

export default AdminPage;
