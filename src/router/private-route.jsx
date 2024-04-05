import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getData } from "../utils/Crypto";

const PrivateRoute = () => {
  const location = useLocation();
  console.log("location.pathname", location.pathname)
  const currentLocation= location.pathname
  // const token = "token";
  // console.log( 
  // )
  const token = getData("userData")?.access_token;
  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export { PrivateRoute };
