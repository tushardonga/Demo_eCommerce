import React from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../Context/UserContext";

const MenuList = () => {
  const naviagte = useNavigate();
  const { setIsLogin } = useUser();
  return (
    <nav className="flex font-normal z-50 justify-between">
      <div className="cursor-pointer">LOGO</div>
      <div
        className={`text-lg lg:text-base text-primary hover:text-gray-500 w-fit `}
      >
        <span
          onClick={() => {
            localStorage.removeItem("isLogin");
            setIsLogin(false);
            naviagte("/");
          }}
          className="cursor-pointer"
          href="https://my.splitero.com/"
        >
          Logout
        </span>
      </div>
    </nav>
  );
};

const Header = () => {
  return (
    <div className="mx-auto fixed top-0 bg-gray-800 text-gray-300 w-full z-50">
      <div className="pt-5 sm:pt-8 px-5 sm:px-6 md:px-12 pb-4">
        <MenuList />
      </div>
    </div>
  );
};

export default Header;
