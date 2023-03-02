import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const ProductsList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products?.length > 0 &&
        products.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
    </div>
  );
};

export default ProductsList;
