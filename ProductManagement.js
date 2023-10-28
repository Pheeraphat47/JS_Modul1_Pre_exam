function ProductManagement() {
  //add products variable here

  function getAllProducts() {}

  function addProduct(product) {}

  function searchByName(name) {}

  function searchByPriceRange(minPrice, maxPrice) {}

  function removeAll() {}

  return {
    removeAll,
    searchByName,
    searchByPriceRange,
    getAllProducts,
    addProduct
  }
}
module.exports = ProductManagement
const productCatalog = ProductManagement()
