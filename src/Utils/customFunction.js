export function handlePagination(currentPage, products, productsPerPage) {
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  // Get the products for the current page
  if (products) {
    return products.slice(indexOfFirstProduct, indexOfLastProduct);
  }
}
