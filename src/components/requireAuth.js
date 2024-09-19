import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ children }) => {
  let { auth } = useAuth();

  return auth?.user?.data ? children : <Navigate to="/signin" />;
};

export default RequireAuth;
