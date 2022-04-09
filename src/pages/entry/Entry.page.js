import React, { useState } from "react";

import "./entry.style.css";

import { Jumbotron } from "react-bootstrap";
import { LoginForm } from "../../Components/login/login.js";
import { ResetPassword } from "../../Components/password-reset/PasswordReset.js";
export function Entry() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fromLoad, setFromLoad] = useState("login");

  const formSwitcher = (formtype) => {
    setFromLoad(formtype);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  let handleOnSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return alert("Please enter your email and password");
    }
    //TODO: handle this in the backend
    console.log({ email: email, password: password });
  };

  let handleOnResetSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      return alert("Please enter your Email");
    }
    //TODO: handle this in the backend
    console.log({ email: email });
  };

  return (
    <div className="entry-page bg-dark">
      <Jumbotron className="form-box">
        {fromLoad === "login" && (
          <LoginForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            formSwitcher={formSwitcher}
            email={email}
            password={password}
          />
        )}
        {fromLoad === "reset" && (
          <ResetPassword
            handleOnChange={handleOnChange}
            handleOnResetSubmit={handleOnResetSubmit}
            formSwitcher={formSwitcher}
            email={email}
          />
        )}
      </Jumbotron>
    </div>
  );
}
