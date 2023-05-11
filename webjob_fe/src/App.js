import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import AuthLogin from "./components/AuthLogin";
import HomePage from "./pages/HomePage";
import DetailJobPage from "./pages/DetailsJobPage";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AuthLogin>
            <LoginPage />
          </AuthLogin>
        }
      />
      <Route path="/home" element={<HomePage />} />
      <Route path="/home/details/:id" element={<DetailJobPage />}></Route>
    </Routes>
  );
}

export default App;
