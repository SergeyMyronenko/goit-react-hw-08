import { useSelector } from "react-redux";
import { selectIsLogged } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const RestrictedRoute = ({ component: Component }, redirectTo) => {
  const isLoggedIn = useSelector(selectIsLogged);
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
