const stockProducts = require('./data.json');

const getUniqueProductsName = () => {
  let productsNames = [];

  for (let index = 0; index < stockProducts.length; index += 1) {
    productsNames.push(stockProducts[index].productName);
  }

  return productsNames;
};

module.exports = { getUniqueProductsName };
