import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Singup/Signup";
import { UserProvider } from "./Context/UserContext";
import "react-toastify/dist/ReactToastify.css";
import "rc-pagination/assets/index.css";

function App() {
  return (
    <div>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
