import React from "react";
import "./Booking.css";
import Navbar from "../Navbar/Navbar";
import { FindUs, Footer } from "../../container";
import SubHeading from "../SubHeading/SubHeading";

const Booking = () => {
  return (
    <>
      <Navbar />
      <div className="app__footer section__padding">
        <div className="app__booking">
          <div className="app__booking-heading">
            <SubHeading title="Reservations" />
            <h1 className="headtext__cormorant">Book A Table</h1>
          </div>
          <div className="app__booking-input flex__center">
            <div className="app__booking-dropdown">
              <select>
                <option selected value="one_pax">1 Person</option>
                <option value="Two_pax">2 Persons</option>
                <option value="three_pax">3 Persons</option>
                <option value="four_pax">4 Persons</option>
              </select>
              <input type="date" id="date" />
              <input type="time" value="18:00" />
            </div>
            <button className="custom__button">Book Now</button>
          </div>
        </div>
      </div>
      <FindUs />
      <Footer />
    </>
  );
};

export default Booking;
