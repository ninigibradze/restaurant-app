import React, { useState } from "react";
import "./User.css";
import Navbar from "../Navbar/Navbar";
import { FindUs, Footer } from "../../container";
import SubHeading from "../SubHeading/SubHeading";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import { Link, useNavigate } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};

const User = () => {
  const [userInfo, setUserInfo] = useState(initialState);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogIn = (e) => {
    e.preventDefault();

    const { email, password } = userInfo;
    const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      localStorage.setItem("logedInUser", JSON.stringify(userInfo));
      dispatch(login(userInfo));
      setUserInfo({ email: "", password: "" });
      navigate("/restaurant-app");
    } else {
      if (!storedUser || storedUser.email !== email) {
        alert("User doesn't excist");
      } else {
        if (storedUser.password !== password) {
          alert("Incorrect password");
        }
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="app__footer section__padding">
        <div className="app__user">
          <div className="app__user-heading">
            <SubHeading title="User Info" />
            <h1 className="headtext__cormorant">Log In</h1>
          </div>
          <div className="app__user-input flex__center">
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
            <button className="custom__button" onClick={(e) => handleLogIn(e)}>
              Sign In
            </button>
            <p className="app__user-register_p">
              New User?{" "}
              <Link to="/restaurant-app/register">
                <span>Register</span>{" "}
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

export default User;
