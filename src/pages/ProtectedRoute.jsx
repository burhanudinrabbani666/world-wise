import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/fakeAuth/useAuth";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const { isAuth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) navigate("/");
  }, [isAuth, navigate]);

  return isAuth ? children : null;
}

export default ProtectedRoute;
