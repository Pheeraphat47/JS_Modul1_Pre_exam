function ProductManagement() {
  //add products variable here
  
  let products = [];
  let currentId = 1;


  function getAllProducts() {
    // products.forEach((element) => console.log(element));
    return products;
  }

  function addProduct(product) {
      return products.push(product)
  }

  function searchByName(name) {
      return products.filter((product) => product.name == name )
  }

  function searchByPriceRange(minPrice, maxPrice) {
     return products.filter((product) => product.price >= minPrice && product.price <= maxPrice)
  }

  function removeAll() {
    return products = []
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
