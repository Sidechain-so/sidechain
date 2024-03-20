import { Navigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import { useEffect } from "react";

export const ProtectedRoute = ({ children }) => {
  const { user, logout } = useAuth();

  useEffect(() => {
    if (!user || isTokenExpired(user)) {
      logout();
    }
  }, []);
  
  return children;
};

const isTokenExpired = (user) => {
  if (!user) return true;

  const currentTime = new Date();
  const expiredDate = new Date(user.expires);
  const isTokenExpired = currentTime > expiredDate;

  return isTokenExpired;
};