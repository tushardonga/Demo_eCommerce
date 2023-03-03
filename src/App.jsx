import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Singup/Signup";
import { useUser } from "./Context/UserContext";
import "react-toastify/dist/ReactToastify.css";
import "rc-pagination/assets/index.css";
import { useEffect, useState } from "react";
import Create from "./Pages/Product/Create";

function App() {
  const { isLogin } = useUser();
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => JSON.parse(localStorage.getItem("isLogin")) || isLogin
  );

  useEffect(() => {
    localStorage.setItem("isLogin", JSON.stringify(true));
  }, [isLoggedIn]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={isLoggedIn ? <Dashboard /> : <Navigate replace to={"/"} />}
        />
        <Route
          path="/create"
          element={isLoggedIn ? <Create /> : <Navigate replace to={"/"} />}
        />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
