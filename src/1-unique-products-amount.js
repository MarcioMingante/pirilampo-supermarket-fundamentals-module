const stockProducts = require('./data.json');

const getUniqueProductsAmount = () => {
  let uniqueProducts = 0;

  for (let index = 0; index < stockProducts.length; index += 1) {
    uniqueProducts += 1;
  }

  return uniqueProducts;
};

module.exports = { getUniqueProductsAmount };
