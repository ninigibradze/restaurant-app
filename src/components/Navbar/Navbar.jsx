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
        <Link to="/">
          <img src={images.gericht} alt="app logo" />
        </Link>
      </div>
      <ul className="app__navbar-links">
        <li className="app__opensans">
          <HashLink smooth to="/#home">
            Home
          </HashLink>
        </li>
        <li className="app__opensans">
          <HashLink smooth to="/#about">
            About
          </HashLink>
        </li>
        <li className="app__opensans">
          <HashLink smooth to="/#menu">
            Menu
          </HashLink>
        </li>
        <li className="app__opensans">
          <HashLink smooth to="/#awards">
            Awards
          </HashLink>
        </li>
        <li className="app__opensans">
          <HashLink smooth to="/#contact">
            Contact
          </HashLink>
        </li>
        <li className="app__opensans">
          <HashLink smooth to="/blog">
            Blog
          </HashLink>
        </li>
      </ul>
      <div className="app__navbar-login">
        <Link to="/user">
          <p className="p__opensans" onClick={() => handleLogOut()}>
            {userInfo.loggedIn ? "Sign Out" : "Log in / Register"}
          </p>
        </Link>

        <div></div>
        <Link to="/booking">
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
                  to="/#home"
                  onClick={() => setToggleMenu(false)}
                >
                  Home
                </HashLink>
              </li>
              <li className="app__opensans">
                <HashLink
                  smooth
                  to="/#about"
                  onClick={() => setToggleMenu(false)}
                >
                  About
                </HashLink>
              </li>
              <li className="app__opensans">
                <HashLink
                  smooth
                  to="/#menu"
                  onClick={() => setToggleMenu(false)}
                >
                  Menu
                </HashLink>
              </li>
              <li className="app__opensans">
                <HashLink
                  smooth
                  to="/#awards"
                  onClick={() => setToggleMenu(false)}
                >
                  Awards
                </HashLink>
              </li>
              <li className="app__opensans">
                <HashLink
                  smooth
                  to="/#contact"
                  onClick={() => setToggleMenu(false)}
                >
                  Contact
                </HashLink>
              </li>
              <li className="app__opensans">
                <HashLink
                  smooth
                  to="/blog"
                  onClick={() => setToggleMenu(false)}
                >
                  Blog
                </HashLink>
              </li>
            </ul>
            <div className="app__navbar-login-smallscreen">
              <Link to="/user">
                <p className="p__opensans" onClick={() => handleLogOut()}>
                  {userInfo.loggedIn ? "Sign Out" : "Log in / Register"}
                </p>
              </Link>

              <div></div>
              <Link to="/booking">
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
