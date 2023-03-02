import React from "react";

function NoProductFound() {
  return (
    <div className="flex items-center justify-center mt-12">
      <div className="text-center">
        <h2 className="text-lg font-medium text-gray-900 mb-2">
          No Products Found
        </h2>
        <p className="text-sm text-gray-500">
          Please try searching for something else.
        </p>
      </div>
    </div>
  );
}

export default NoProductFound;
