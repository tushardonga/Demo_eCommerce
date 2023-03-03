import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="px-4 py-3">
        <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
        <p className="text-gray-600 text-sm mb-4">
          {product.description.substring(0, 40)}...
        </p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="text-gray-700 font-bold text-sm">
              ${product.price.toFixed(2)}
            </div>
            {product.discountPercentage > 0 && (
              <div className="text-gray-400 text-sm ml-2 line-through">
                $
                {(
                  (product.price * 100) /
                  (100 - product.discountPercentage)
                ).toFixed(2)}
              </div>
            )}
          </div>
          <div className="text-yellow-500 font-bold">
            {product.rating} stars
          </div>
        </div>
        <div className="bg-gray-100 px-4 py-2 rounded-lg md:flex md: justify-between">
          <div>
            <div className="text-gray-700 font-bold text-sm mb-1">Brand:</div>
            <div className="text-gray-600 text-sm">{product.brand}</div>
          </div>
          <div>
            <div className="text-gray-700 font-bold text-sm mt-2 mb-1">
              Category:
            </div>
            <div className="text-gray-600 text-sm">{product.category}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
