import Pagination from "rc-pagination";
import React, { useEffect, useState } from "react";
import { useProductSortAndFilter } from "../../Context/useProductSortAndFilter";
import ProductCard from "../ProductCard/ProductCard";
import { handlePagination } from "../../Utils/customFunction";
import NoProductFound from "../NoData/NoProductFound";
import SearchLogo from "../../Assets/svg/SearchLogo";
import { CSVLink } from "react-csv";

const ProductsList = () => {
  const {
    sortKey,
    isSortAsc,
    searchByFilterText,
    sortProducts,
    filteredProducts,
    setFilterdProducts,
    allProductsItem,
    currentPage,
    setCurrentPage,
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
    // filteredProducts
    const headers = [
      { label: "Title", key: "title" },
      { label: "Email", key: "price" },
      { label: "Phone", key: "brand" },
      { label: "Category", key: "category" },
    ];

    const csvData = [
      headers.map((header) => header.label), // Add the header row
      ...filteredProducts?.map((item) =>
        headers.map((header) => item[header.key])
      ), // Add the data rows
    ];
    return (
      <CSVLink
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        data={csvData}
        filename={"products.csv"}
      >
        Export to CSV
      </CSVLink>
    );
  };

  return (
    <>
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
                total={30}
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
      <div className="text-end my-6">
        <ExportCSV />
      </div>
      {filteredProducts?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
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
