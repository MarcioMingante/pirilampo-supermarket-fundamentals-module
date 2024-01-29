const stockProducts = require('./data.json');

const getOutOfStockProducts = () => {
  let outOfStock = [];

  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].quantityInStock === 0) {
      outOfStock.push(stockProducts[index].productName);
    }
  }

  return outOfStock;
};

module.exports = { getOutOfStockProducts };
