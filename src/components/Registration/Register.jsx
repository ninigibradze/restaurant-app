import React, { useState } from "react";
import "./Register.css";
import Navbar from "../Navbar/Navbar";
import { FindUs, Footer } from "../../container";
import SubHeading from "../SubHeading/SubHeading";
import { useDispatch } from "react-redux";
import { register } from "../../features/userSlice";
import { Link } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
  confirm: "",
};

const Register = () => {
  const [userInfo, setUserInfo] = useState(initialState);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(register(userInfo));
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
