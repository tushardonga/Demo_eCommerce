import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Singup/Signup";
import { UserProvider } from "./Context/UserContext";
import "react-toastify/dist/ReactToastify.css";
import "rc-pagination/assets/index.css";
import { useEffect, useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() =>
    JSON.parse(localStorage.getItem("isLogin"))
  );

  useEffect(() => {
    localStorage.setItem("isLogin", JSON.stringify(true));
  }, [isLoggedIn]);

  return (
    <div>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={isLoggedIn ? <Dashboard /> : <Login />}
          />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
