import React, { useRef, useState } from "react";

import { images } from "./../../constants";
import "./Header.css";
import { SubHeading } from "./../../components";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const imagesArr = [images.welcome, images.gal01, images.gal02, images.gal03];

const contentArr = [
  {
    header: "The Key To Fine Dining",
    subtitle:
      "Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus",
  },
  {
    header: "Reserve Your Table Today",
    subtitle:
      "Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus",
  },
  {
    header: "Food That Surprise You",
    subtitle:
      "Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus",
  },
  {
    header: "Love The Original Taste",
    subtitle:
      "Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus",
  },
];

const Header = () => {
  const [bigImage, setBigImage] = useState(0);
  const [activeCont, setActiveCont] = useState(0);

  const scroll = (value) => {
    if (value === "minus") {
      if (bigImage === 0) {
        setBigImage(3);
        setActiveCont(3);
        return;
      } else {
        setBigImage((prev) => prev - 1);
        setActiveCont((prev) => prev - 1);
        return;
      }
    } else if (value === "plus") {
      if (bigImage === 3) {
        setBigImage(0);
        setActiveCont(0);
        return;
      } else {
        setBigImage((prev) => prev + 1);
        setActiveCont((prev) => prev + 1);
        return;
      }
    }
  };

  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Chase the new flavour" />
        <h1 className="app__header-h1">{contentArr[activeCont].header}</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          {contentArr[activeCont].subtitle}{" "}
        </p>
        <button type="button" className="custom__button">
          Explore Menu
        </button>
      </div>

      <div className="app__wrapper_img">
        <div className="header__arrow-icon-container">
          <BsArrowLeftShort
            className="header__arrow-icon"
            onClick={() => scroll("minus")}
          />
          <BsArrowRightShort
            className="header__arrow-icon"
            onClick={() => scroll("plus")}
          />
        </div>
        <img src={imagesArr[bigImage]} alt="header_img" />
      </div>
    </div>
  );
};

export default Header;
