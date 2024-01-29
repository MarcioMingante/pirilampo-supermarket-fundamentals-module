const stockProducts = require('./data.json');

const getProductsOnSale = () => {
  let onSlae = [];

  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].onSale) {
      let product = {
        description: '',
        formattedPrice: '',
        onSale: false,
      };
      product.description = stockProducts[index].description;
      product.formattedPrice = `R$ ${stockProducts[index].price}`;
      product.onSale = true;
      onSlae.push(product);
    }
  }

  return onSlae;
};

module.exports = { getProductsOnSale };
