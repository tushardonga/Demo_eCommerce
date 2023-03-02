import React from "react";
import { Link } from "react-router-dom";

const menuList = () => {
  return (
    <nav className="navigation lg:flex lg:space-x-10  font-normal space-y-5 lg:space-y-0 z-50">
      <div>
        <Link href="/faqs">FAQ</Link>
      </div>
      <div>
        <Link href="/about-us">About us</Link>
      </div>
      <div
        className={`text-lg lg:text-base text-primary hover:text-gray-500 w-fit `}
      >
        <Link href="https://my.splitero.com/">Logout</Link>
      </div>
    </nav>
  );
};

const Header = () => {
  return (
    <div className="mainHeader mx-auto fixed top-0 bg-[#FEF8F2] w-full z-50">
      <div className="flex items-center justify-between pt-5 sm:pt-8 px-5 sm:px-6 md:px-12 pb-4">
        <div className="flex justify-start lg:flex-1 space-x-3 lg:space-x-0 items-center">
          <div className="">{menuList()}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
