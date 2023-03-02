import Pagination from "rc-pagination";
import React, { useEffect } from "react";
import { useProductSortAndFilter } from "../../Context/useProductSortAndFilter";
import ProductCard from "../ProductCard/ProductCard";
import { handlePagination } from "../../Utils/customFunction";

const ProductsList = () => {
  const {
    sortKey,
    isSortAsc,
    filterText,
    setFilterText,
    sortProducts,
    filteredProducts,
    allProductsItem,
    currentPage,
    setCurrentPage,
    setFilterdProducts,
  } = useProductSortAndFilter();

  useEffect(() => {
    let filterdData = handlePagination(currentPage, allProductsItem, 6);
    setFilterdProducts(filterdData);
  }, []);

  const onChange = (page) => {
    let filterdData = handlePagination(page, allProductsItem, 6);
    setFilterdProducts(filterdData);
    setCurrentPage(page);
  };

  return (
    <>
      {filteredProducts && filteredProducts?.length > 0 ? (
        <>
          <div className="flex justify-between items-center my-4">
            {/* search bar */}
            <div class="relative text-gray-600 focus-within:text-gray-400">
              <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg
                  class="w-4 h-4"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.7071 14.2929C16.0976 13.9024 16.0976 13.2692 15.7071 12.8787L12.1213 9.29289C11.7308 8.90237 11.0976 8.90237 10.7071 9.29289C10.3166 9.68342 10.3166 10.3166 10.7071 10.7071L14.2929 14.2929C14.6834 14.6834 15.3166 14.6834 15.7071 14.2929ZM6.5 12C8.98528 12 11 9.98528 11 7.5C11 5.01472 8.98528 3 6.5 3C4.01472 3 2 5.01472 2 7.5C2 9.98528 4.01472 12 6.5 12Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <input
                class="py-2 pl-10 text-sm text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:bg-white focus:text-gray-900"
                type="search"
                name="search"
                placeholder="Filter by title"
                autocomplete="off"
                onChange={(e) => setFilterText(e.target.value)}
                value={filterText}
              />
            </div>
            <div className="text-center py-4">
              <Pagination
                onChange={onChange}
                current={currentPage}
                total={30}
                pageSize={6}
              />
            </div>
            <div>
              <button onClick={() => sortProducts("price")} className="mr-4">
                Sort by Price {sortKey === "price" && isSortAsc ? "↑" : "↓"}
              </button>
              <button onClick={() => sortProducts("title")}>
                Sort by Title {sortKey === "title" && isSortAsc ? "↑" : "↓"}
              </button>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredProducts?.length > 0 &&
          filteredProducts.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
      </div>
    </>
  );
};

export default ProductsList;
