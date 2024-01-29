const stockProducts = require('./data.json');

const searchProductsByBrand = (name) => {
  let productsList = [];

  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].brand === name) {
      let product = {
        description: '',
        formattedPrice: '',
      };
      product.description = stockProducts[index].description;
      product.formattedPrice = `R$ ${stockProducts[index].price}`;
      productsList.push(product);
    }
  }

  return productsList;
};

module.exports = { searchProductsByBrand };
