import { useEffect, useState } from "react";
import { handlePagination } from "../Utils/customFunction";
import { Products } from "../Utils/data";

export function useProductSortAndFilter() {
  const allProductsItem = Products;
  const [sortKey, setSortKey] = useState(null);
  const [isSortAsc, setIsSortAsc] = useState(true);
  const [filterText, setFilterText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProducts, setFilterdProducts] = useState(allProductsItem);

  const sortProducts = (key) => {
    if (key === sortKey) {
      setIsSortAsc(!isSortAsc);
    } else {
      setSortKey(key);
      setIsSortAsc(true);
    }
    let tempSortedItem = sortedProducts();
    setFilterdProducts(tempSortedItem);
  };

  // const filteredProducts = products.filter((product) =>
  //   product.title.toLowerCase().includes(filterText.toLowerCase())
  // );

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortKey === "price") {
      return isSortAsc ? a.price - b.price : b.price - a.price;
    } else if (sortKey === "title") {
      return isSortAsc
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title);
    } else {
      return 0;
    }
  });

  return {
    sortKey,
    isSortAsc,
    filterText,
    setFilterText,
    sortProducts,
    filteredProducts,
    setFilterdProducts,
    allProductsItem,
    currentPage,
    setCurrentPage,
  };
}
