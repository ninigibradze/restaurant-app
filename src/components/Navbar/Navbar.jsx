import React, { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "./../../constants/images";

import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="app__opensans">
          <Link to="/">
            <a href="#home">Home</a>
          </Link>
        </li>
        <Link to="/#about">
          <li className="app__opensans">
            <p>About</p>
          </li>{" "}
        </Link>
        <li className="app__opensans">
          <Link to="/">
            <a href="#menu">Menu</a>
          </Link>
        </li>
        <li className="app__opensans">
          <Link to="/">
            <a href="#awards">Awards</a>
          </Link>
        </li>
        <li className="app__opensans">
          <Link to="/">
            <a href="#contact">Contact</a>
          </Link>
        </li>
        <li className="app__opensans">
          <Link to="/">
            <a href="#home">Blog</a>
          </Link>
        </li>
      </ul>
      <div className="app__navbar-login">
        <p href="#login" className="p__opensans">
          Log in / Register
        </p>

        <div></div>
        <p href="#login" className="p__opensans">
          <Link to="/booking">Book Table</Link>
        </p>
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
                <Link to="/">
                  <a href="#home">Home</a>
                </Link>
              </li>
              <li className="app__opensans">
                <Link to="/">
                  <a href="#about">About</a>
                </Link>
              </li>
              <li className="app__opensans">
                <Link to="/">
                  <a href="#menu">Menu</a>
                </Link>
              </li>
              <li className="app__opensans">
                <Link to="/">
                  <a href="#awards">Awards</a>
                </Link>
              </li>
              <li className="app__opensans">
                <Link to="/">
                  <a href="#contact">Contact</a>
                </Link>
              </li>
              <li className="app__opensans">
                <Link to="/">
                  <a href="#home">Blog</a>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
