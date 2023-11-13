import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

import Navbar from "../Navbar/Navbar";
import { FindUs, Footer } from "../../container";
import SubHeading from "../SubHeading/SubHeading";

import "./Register.css";

const initialState = {
  email: "",
  password: "",
  confirm: "",
};

const Register = () => {
  const [userInfo, setUserInfo] = useState(initialState);
  const [successMessage, setSuccessMessage] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const emailValidation = (email) => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const { email, password, confirm } = userInfo;

    if (!email) {
      return alert("Please, enter your email");
    } else {
      if (!emailValidation(email)) {
        return alert("Enter valid email");
      }
    }

    if (!password) {
      return alert("Please, enter your password");
    } else {
      if (password.length < 6) {
        return alert("Password should be at least 6 symbols");
      }
    }

    if (!confirm) {
      return alert("Please confirm your password");
    } else {
      if (confirm !== password) {
        return alert("Password doesn't match");
      }
    }

    if (
      email &&
      emailValidation(email) &&
      password &&
      confirm &&
      password.length >= 6 &&
      confirm === password
    ) {
      localStorage.setItem("registeredUser", JSON.stringify({ email, password }));
      setSuccessMessage(true);
      setUserInfo(initialState);
    } else {
      return alert("Error. Check your inputs");
    }
  };

  return (
    <>
      <Navbar />
      <div className="app__footer section__padding">
        <div className="app__register">
          <div className="app__register-heading">
            <SubHeading title="New User?" />
            <h1 className="headtext__cormorant">Register</h1>
          </div>
          <div className="app__register-input flex__center">
            <input
              type="email"
              name="email"
              value={userInfo.email}
              onChange={handleInputChange}
              placeholder="Enter your email address"
            />
            <input
              type="password"
              name="password"
              value={userInfo.password}
              onChange={handleInputChange}
              placeholder="Password"
            />
            <input
              type="password"
              name="confirm"
              value={userInfo.confirm}
              onChange={handleInputChange}
              placeholder="Confirm password"
            />
            <button
              className="custom__button"
              onClick={(e) => handleRegister(e)}
            >
              Register
            </button>
            {successMessage && (
              <p className="app__register-success">Successfully registered</p>
            )}
            <p className="app__register-login_p">
              Already have an account?{" "}
              <Link to="/user">
                <span>Login</span>{" "}
              </Link>
              here
            </p>
          </div>
        </div>
      </div>
      <FindUs />
      <Footer />
    </>
  );
};

export default Register;
