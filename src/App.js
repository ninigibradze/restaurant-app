import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Booking from "./components/Booking/Booking";
import { useEffect, useState } from "react";
import User from "./components/User/User";
import Register from "./components/Registration/Register";
import ProtectedRoute from "./protectedRoute";
import Blog from "./components/Blog/Blog";
import { useDispatch } from "react-redux";
import { checkLogIn } from "./features/userSlice";
import Post from "./components/Post/Post";

function App() {
  const [showButton, setShowButton] = useState(false);
  const dispach = useDispatch()

  useEffect(() => {
    dispach(checkLogIn());

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
        <Route path="/restaurant-app" element={<Home />} />
        <Route path="/restaurant-app/booking" element={<Booking />} />
        <Route path="/restaurant-app/user" element={<User />} />
        <Route path="/restaurant-app/register" element={<Register />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/restaurant-app/blog" element={<Blog />} />
          <Route path='/restaurant-app/blog/:id' element={<Post />} />
        </Route>
      </Routes>

      {showButton && (
        <div className="scroll-to-top-button-div" onClick={handleScrollToTop}>
          <button className="scroll-to-top-button">TOP</button>
        </div>
      )}
    </div>
  );
}

export default App;
