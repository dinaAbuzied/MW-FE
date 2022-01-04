import React from "react";
import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const auth = useSelector((store) => store.user.authenticated);
    const location = useLocation();
  
    if (!auth.user) {
      // Redirect them to the /sign-in page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
      return <Navigate to="/sign-in" state={{ from: location }} replace />;
    }
  
    return children;
  }

export default ProtectedRoute;