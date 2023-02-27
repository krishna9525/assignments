import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "./AuthContex";

function Private({ children }) {
  const { authState } = useContext(AppContext);

  if (!authState.isAuth) {
    return <Navigate to="/signup" />;
  }
  return children;
}

export default Private;