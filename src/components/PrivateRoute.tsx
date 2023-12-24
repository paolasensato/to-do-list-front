import { Navigate } from "react-router-dom";
import useUserStore from "../store/userStore";

function PrivateRoute({ children }: any) {
  const userStore = useUserStore();

  return userStore.user.token ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
