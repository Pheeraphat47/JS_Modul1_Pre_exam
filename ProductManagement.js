function ProductManagement() {
  //add products variable here
  
  const products = [];
  
  function getAllProducts() {
    // products.forEach((element) => console.log(element));
    return products;
  }
    // add new product to products(array)
  function addProduct(product) {
      return products.push(product)
  }

  // search product by name
  function searchByName(name) {
      return products.filter((product) => product.name == name )
  }
  
  // search product by price range between min to max
  function searchByPriceRange(minPrice, maxPrice) {
     return products.filter((product) => product.price >= minPrice && product.price <= maxPrice)
  }

  // remove all product
  function removeAll() {
    return products.length = 0;
  }

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
