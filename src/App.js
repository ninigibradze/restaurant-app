import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Booking from "./components/Booking/Booking";
import { useEffect, useState } from "react";

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
      </Routes>

      {showButton && (
        <div className={"scrollToTop"}>
          <button className="scroll-to-top-button" onClick={handleScrollToTop}>
            TOP
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
