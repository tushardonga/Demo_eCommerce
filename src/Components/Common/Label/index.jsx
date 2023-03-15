import React from "react";

const Label = ({ htmlFor, labelText }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-gray-700 font-bold mb-2 text-left"
    >
      {labelText || ""}
    </label>
  );
};

export default Label;
