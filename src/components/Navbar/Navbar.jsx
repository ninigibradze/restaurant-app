import React, { useEffect, useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "./../../constants/images";

import "./Navbar.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useDispatch, useSelector } from "react-redux";
import { checkLogIn, logout } from "../../features/userSlice";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const userInfo = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkLogIn());
  }, [userInfo]);

  const handleLogOut = () => {
    localStorage.removeItem("logedInUser");
    dispatch(logout());
  };

  return (
    <div className="app__navbar">
      <div className="app__navbar-logo">
        <Link to="/restaurant-app">
          <img src={images.gericht} alt="app logo" />
        </Link>
      </div>
      <ul className="app__navbar-links">
        <li className="app__opensans">
          <HashLink smooth to="/restaurant-app#home">
            Home
          </HashLink>
        </li>
        <li className="app__opensans">
          <HashLink smooth to="/restaurant-app#about">
            About
          </HashLink>
        </li>
        <li className="app__opensans">
          <HashLink smooth to="/restaurant-app#menu">
            Menu
          </HashLink>
        </li>
        <li className="app__opensans">
          <HashLink smooth to="/restaurant-app#awards">
            Awards
          </HashLink>
        </li>
        <li className="app__opensans">
          <HashLink smooth to="/restaurant-app#contact">
            Contact
          </HashLink>
        </li>
        <li className="app__opensans">
          <HashLink smooth to="/restaurant-app/blog">
            Blog
          </HashLink>
        </li>
      </ul>
      <div className="app__navbar-login">
        <Link to="/restaurant-app/user">
          <p className="p__opensans" onClick={() => handleLogOut()}>
            {userInfo.loggedIn ? "Sign Out" : "Log in / Register"}
          </p>
        </Link>

        <div></div>
        <Link to="/restaurant-app/booking">
          <p className="p__opensans">Book Table</p>
        </Link>
      </div>

      {/* hamburger menu for small screens */}
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="app__navbar-smallscreen-overlay flex__center slide-button">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li className="app__opensans">
                <HashLink
                  smooth
                  to="/restaurant-app#home"
                  onClick={() => setToggleMenu(false)}
                >
                  Home
                </HashLink>
              </li>
              <li className="app__opensans">
                <HashLink
                  smooth
                  to="/restaurant-app#about"
                  onClick={() => setToggleMenu(false)}
                >
                  About
                </HashLink>
              </li>
              <li className="app__opensans">
                <HashLink
                  smooth
                  to="/restaurant-app#menu"
                  onClick={() => setToggleMenu(false)}
                >
                  Menu
                </HashLink>
              </li>
              <li className="app__opensans">
                <HashLink
                  smooth
                  to="/restaurant-app#awards"
                  onClick={() => setToggleMenu(false)}
                >
                  Awards
                </HashLink>
              </li>
              <li className="app__opensans">
                <HashLink
                  smooth
                  to="/restaurant-app#contact"
                  onClick={() => setToggleMenu(false)}
                >
                  Contact
                </HashLink>
              </li>
              <li className="app__opensans">
                <HashLink
                  smooth
                  to="/restaurant-app/blog"
                  onClick={() => setToggleMenu(false)}
                >
                  Blog
                </HashLink>
              </li>
            </ul>
            <div className="app__navbar-login-smallscreen">
              <Link to="/restaurant-app/user">
                <p className="p__opensans" onClick={() => handleLogOut()}>
                  {userInfo.loggedIn ? "Sign Out" : "Log in / Register"}
                </p>
              </Link>

              <div></div>
              <Link to="/restaurant-app/booking">
                <p className="p__opensans">Book Table</p>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
