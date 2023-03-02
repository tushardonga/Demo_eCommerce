import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../Context/UserContext";

const Dashboard = () => {
  const { isLogin } = useUser();
  const naviagte = useNavigate();
  useEffect(() => {
    if (!isLogin) {
      naviagte("/");
    }
  }, [isLogin]);
  return <div>Dashboard</div>;
};

export default Dashboard;
