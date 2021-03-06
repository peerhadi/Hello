import React from "react";
import { Button, Paper } from "@mui/material";
let count = 0;
export default function Login() {
  const [value, setValue] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [name, setName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [firstName, setFirstName] = React.useState("");

  const [passwordError, setPasswordError] = React.useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  var delayInMilliseconds = 5000;

  const handleClick = () => {
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (regex.test(value) == false) {
      setEmailError("Not A valid Email");
      setTimeout(function () {
        setEmailError("");
      }, delayInMilliseconds);
    }
    if (password.length < 8) {
      setPasswordError("Password should be atleast 8 letters");
      setTimeout(function () {
        setPasswordError("");
      }, delayInMilliseconds);
    }
    const validateEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (validateEmail.test(value) == true && password.length >= 8) {
      setName("/");
    }
  };
  return (
    <div className="Pag">
      <h1>SignUp</h1>
      <input
        type="text"
        name="text"
        onChange={handleFirstNameChange}
        value={firstName}
      />{" "}
      <input
        type="text"
        name="text"
        onChange={handleLastNameChange}
        value={lastName}
      />
      <input
        type="email"
        name="text"
        onChange={handleChange}
        value={value}
      />
      <input
        type="password"
        name="password"
        onChange={handlePasswordChange}
        value={password}
      />
      <div className="Error">
        <p>{emailError}</p>
        <p>{passwordError}</p>
      </div>
      <Button variant="contained" href={name} onClick={handleClick}>
        Submit
      </Button>
    </div>
  );
}
