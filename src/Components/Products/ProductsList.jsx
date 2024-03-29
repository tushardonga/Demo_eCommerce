import Pagination from "rc-pagination";
import React, { useEffect, useState } from "react";
import { useProductSortAndFilter } from "../../Context/useProductSortAndFilter";
import ProductCard from "../ProductCard/ProductCard";
import { handlePagination } from "../../Utils/customFunction";
import NoProductFound from "../NoData/NoProductFound";
import SearchLogo from "../../Assets/svg/SearchLogo";
import { CSVLink } from "react-csv";
import { useNavigate } from "react-router-dom";

const ProductsList = () => {
  const {
    sortKey,
    isSortAsc,
    searchByFilterText,
    sortProducts,
    filteredProducts,
    setFilterdProducts,
    allProductsItem,
    setAllProductsItem,
    currentPage,
    setCurrentPage,
  } = useProductSortAndFilter();
  const navigate = useNavigate();

  useEffect(() => {
    let filterdData = handlePagination(currentPage, allProductsItem, 6);
    setFilterdProducts(filterdData);
  }, []);

  const onChange = (page) => {
    let filterdData = handlePagination(page, allProductsItem, 6);
    setFilterdProducts(filterdData);
    setCurrentPage(page);
  };

  const [filterText, setFilterText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);

  useEffect(() => {
    if (filterText.length > 0) {
      if (searchTimeout) clearTimeout(searchTimeout);
      setSearchTimeout(setTimeout(() => searchByFilterText(filterText), 500));
    } else {
      onChange(1);
    }
    return () => clearTimeout(searchTimeout);
  }, [filterText]);

  const ExportCSV = () => {
    const headers = [
      { label: "Title", key: "title" },
      { label: "Email", key: "price" },
      { label: "Phone", key: "brand" },
      { label: "Category", key: "category" },
    ];
    const csvData = [
      headers?.map((header) => header.label), // Add the header row
      ...filteredProducts?.map((item) =>
        headers.map((header) => item[header.key])
      ), // Add the data rows
    ];

    return (
      <CSVLink
        className="border border-gray-900 bg-white hover:bg-gray-900 text-gray-900 hover:text-white font-bold py-2 px-4 rounded"
        data={csvData}
        filename={"products.csv"}
      >
        EXPORT CSV
      </CSVLink>
    );
  };

  const removeProduct = (id) => {
    let productsItem = allProductsItem.filter((item) => item.id !== id);
    let filterdData = handlePagination(1, productsItem, 6);
    setAllProductsItem(productsItem);
    setFilterdProducts(filterdData);
  };

  return (
    <>
      <div className="my-8 sm:my-6 sm:flex items-center md:justify-end sm:justify-start">
        {filteredProducts && filteredProducts.length > 0 ? (
          <div>
            <ExportCSV />
          </div>
        ) : (
          ""
        )}

        <button
          className="border border-gray-900 bg-white hover:bg-gray-900 text-gray-900 hover:text-white font-bold py-2 px-4 rounded mt-4 sm:mt-0 sm:ml-2"
          onClick={() => navigate("/create")}
        >
          ADD NEW
        </button>
      </div>
      <div className="md:flex md:justify-between items-center my-4">
        {/* search bar */}
        <div className="relative text-gray-600 focus-within:text-gray-400 my-2 md:my-0">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <SearchLogo />
          </span>
          <input
            className="py-2 pl-10 text-sm text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:bg-white focus:text-gray-900"
            type="search"
            name="search"
            placeholder="Filter by title"
            autoComplete="off"
            onChange={(e) => setFilterText(e.target.value)}
            value={filterText}
          />
        </div>

        {filteredProducts?.length > 0 ? (
          <>
            {/* pagination  */}
            <div className="py-4">
              <Pagination
                onChange={onChange}
                current={currentPage}
                total={allProductsItem.length}
                pageSize={6}
              />
            </div>

            {/* sorting  */}
            <div className="my-4 md:my-0">
              <button onClick={() => sortProducts("price")} className="mr-4">
                Sort by Price {sortKey === "price" && isSortAsc ? "↑" : "↓"}
              </button>
              <button onClick={() => sortProducts("title")}>
                Sort by Title {sortKey === "title" && isSortAsc ? "↑" : "↓"}
              </button>
            </div>
          </>
        ) : (
          ""
        )}
      </div>

      {filteredProducts?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} removeProduct={removeProduct} />
            </div>
          ))}
        </div>
      ) : (
        <NoProductFound />
      )}
    </>
  );
};

export default ProductsList;
