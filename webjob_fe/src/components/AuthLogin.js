import { Navigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";

function AuthLogin() {
  const token = localStorage.getItem("access_token");
  // const role = localStorage.getItem("role");

  // console.log(token, "<auth");
  // if (role === "admin") {
  if (token) {
    return <Navigate to={"/home"} />;
  }
  return <LoginPage />;
}
// }

export default AuthLogin;
