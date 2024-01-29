const stockProducts = require('./data.json');

const searchProductByName = (name) => {
  let product = {
    description: '',
    formattedPrice: '',
  };

  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].productName === name) {
      product.description = stockProducts[index].description;
      product.formattedPrice = `R$ ${stockProducts[index].price}`;
      return product;
    }
  }

  return null;
};

module.exports = { searchProductByName };
