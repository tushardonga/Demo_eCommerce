import React from "react";
import reactLogo from "../../Assets/images/react-logo.png";

const LeftImageSection = () => {
  return (
    <section className="sm:w-1/2 mx-auto flex justify-center items-center bg-gray-800">
      <img
        className="h-auto object-cover w-1/2"
        src={reactLogo}
        alt="Backstretch"
      />
    </section>
  );
};

export default LeftImageSection;
