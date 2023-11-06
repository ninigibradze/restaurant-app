import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Booking from "./components/Booking/Booking";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="booking" element={<Booking />} />
      </Routes>
          
    </div>
  );
}

export default App;
