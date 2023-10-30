import React from "react";

import { SubHeading } from "../../components";
import { images } from "./../../constants";

const FindUs = () => {
  return (
    <div className="app__bg app__wrapper section__padding" id="contact">
      <div className="app__wrapper_info">
        <SubHeading title="Contact" />
        <h1 className="headtext__cormorant" style={{ marginBottom: "2rem" }}>
          Find Us
        </h1>
        <div className="app__wrapper_content">
          <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
          <p
            className="cormorant"
            style={{ color: "#DCCA87", margin: "2rem 0" }}
          >
            Working Hours
          </p>
          <p className="p__opensans">Monday-Friday: 08:00 am -12:00 am</p>
          <p className="p__opensans">Saturday-Sunday: 07:00am -11:00 pm</p>
        </div>
        <button
          type="button"
          className="custom__button"
          style={{ marginTop: "2rem" }}
        >
          Visit Us
        </button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.findus} alt="findus" />
      </div>
    </div>
  );
};

export default FindUs;
