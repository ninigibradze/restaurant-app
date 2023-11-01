import React, { useRef, useState } from "react";

import { images } from "./../../constants";
import "./Header.css";
import { SubHeading } from "./../../components";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const imagesArr = [images.welcome, images.gal01, images.gal02, images.gal03];

const Header = () => {
  const [bigImage, setBigImage] = useState(0);

  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Chase the new flavour" />
        <h1 className="app__header-h1">The Key To Fine Dining</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus{" "}
        </p>
        <button type="button" className="custom__button">
          Explore Menu
        </button>
      </div>

      <div className="app__wrapper_img">
        <BsArrowLeftShort className="header__arrow-icon" onClick={() => {}} />
        <BsArrowRightShort className="header__arrow-icon" onClick={() => {}} />
        <img src={imagesArr[bigImage]} alt="header_img" />        
      </div>
    </div>
  );
};

export default Header;
