# Product Catalog Management

## Overview

This document describes a product catalog management system. The system contains a `ProductManagement` function that maintains a list of product objects. Each product is represented by the following attributes:

- `id`: A unique identifier for the product.
- `name`: The name of the product.
- `category`: The category used to classify the product into a broader group.
- `price`: The cost of the product.

For example:

```javascript
{
  id: 1,
  name: 'Laptop',
  category: 'Electronics',
  price: 999.99,
}

Function Descriptions
The ProductManagement function provides the following functions for managing the product catalog:

getAllProducts()
Returns an array containing all the products in the catalog.

addProduct(product)
Adds a new product to the product catalog. The product parameter should be an object with the product details.

removeAll()
Removes all products from the product catalog.

searchByName(name)
Searches for products with names containing the specified search term, and it is case-insensitive. Returns an array of matching products.

searchByPriceRange(minPrice, maxPrice)
Searches for products within the specified price range. Returns an array of products with prices falling within the given range.
