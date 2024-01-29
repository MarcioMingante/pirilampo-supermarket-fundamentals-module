const stockProducts = require('./data.json');

const getLowStockProducts = () => {
  let lowInStock = [];

  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].quantityInStock > 0 && stockProducts[index].quantityInStock <= 10) {
      lowInStock.push(`${stockProducts[index].productName}: ${stockProducts[index].quantityInStock} unidades`);
    }
  }

  return lowInStock;
};

module.exports = { getLowStockProducts };
