import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const user = useSelector((state) => state.user);

  if (!user.loggedIn) {
    alert("Please, log in or register");
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
