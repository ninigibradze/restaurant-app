import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { login } from "./features/userSlice";

const ProtectedRoute = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useMemo(() => {
    const storedUser = JSON.parse(localStorage.getItem("logedInUser"));
    if (storedUser) {
      dispatch(login(storedUser));
      return true;
    }
    return false;
  }, []);

  if (!isLoggedIn) {
    alert("Please, log in or register");
    return <Navigate to="/restaurant-app" replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
