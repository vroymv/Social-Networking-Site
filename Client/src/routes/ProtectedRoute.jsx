import { Navigate } from "react-router-dom";

export function ProtectedRoute({ isAllowed, redirectTo = "/login", children }) {
    
  if (!isAllowed) {
    return <Navigate to={redirectTo} />;
  }
  return children ? children : <Outlet />;
}
