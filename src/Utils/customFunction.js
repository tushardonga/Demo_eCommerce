export function handlePagination(currentPage, products, productsPerPage) {
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  // Get the products for the current page
  if (products.length > 0) {
    return products?.slice(indexOfFirstProduct, indexOfLastProduct);
  }
}
