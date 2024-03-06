import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";

import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { api } from "../api/api";

import Snackbar from "@mui/material/Snackbar";
import SnackbarContent from "@mui/material/SnackbarContent";

import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";

import CloseIcon from "@mui/icons-material/Close";

const Login = () => {
  const [seePassword, setSeePassword] = useState(false);
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const [message, setMessage] = useState("");
  const [messageBack, setMessageBack] = useState("green");

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
    setMessage("Submitting..");
    setMessageBack("green");
    api
      .post("/", { password })
      .then((result) => {
        console.log(result);
        if (result.data.msg === "success") {
          navigate("/list");
        } else {
          console.log(err);
          setMessage("Password Mismatch");
          setMessageBack("red");
        }
      })
      .catch((err) => {
        console.log(err);
        setMessage("Failed to Login");
        setMessageBack("red");
      });
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div className={`w-full h-screen flex items-center justify-center`}>
      <Paper
        className={`flex flex-col items-center w-[450px] p-[25px] h-[400px] justify-evenly`}
      >
        <h1 className={`font-bold text-3xl`}>INNOHACKS ADMIN</h1>
        <p className={`w-full`}>
          Please Enter the Password to Access Student List
        </p>
        <div className={`w-full`}>
          <OutlinedInput
            placeholder="Enter the Password"
            autoFocus={true}
            type={seePassword ? "text" : "password"}
            className={`w-[calc(100%-70px)]`}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          ></OutlinedInput>
          <Button
            onClick={() => {
              setSeePassword(!seePassword);
            }}
            className={`w-[50px] aspect-[1/1]`}
          >
            {seePassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </Button>
        </div>
        <Button variant="contained" onClick={handleClick}>
          Submit
        </Button>
      </Paper>
      <div>
        <Snackbar
          open={open}
          autoHideDuration={10000}
          onClose={handleClose}
          anchorOrigin={{ horizontal: "right", vertical: "top" }}
        >
          <SnackbarContent
            message={message}
            sx={{ backgroundColor: messageBack }}
            action={action}
          />
        </Snackbar>
      </div>
    </div>
  );
};

export default Login;
