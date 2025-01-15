import { ReactNode } from "react";
import { useAppSelector } from "../../redux/hook";
import { userCurrentToken } from "../../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const token = useAppSelector(userCurrentToken);
  if (!token) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }

  return children;
}
