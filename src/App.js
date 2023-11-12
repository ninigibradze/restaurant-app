import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Booking from "./components/Booking/Booking";
import { useEffect, useState } from "react";
import User from "./components/User/User";
import Register from "./components/Registration/Register";

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleButtonVisiblity = () => {
      window.scrollY > 250 ? setShowButton(true) : setShowButton(false);
    };

    window.addEventListener("scroll", handleButtonVisiblity);

    return () => {
      window.removeEventListener("scroll", handleButtonVisiblity);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/user" element={<User />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      {showButton && (
        <div className="scroll-to-top-button-div"  onClick={handleScrollToTop}>
          <button className="scroll-to-top-button">
            TOP
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
