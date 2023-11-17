import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthWrapper = ({ children }) => {
  const code = useSelector((state) => state.auth);

  return code.encodedToken ? children : <Navigate to="/" />;
};

export default AuthWrapper;
