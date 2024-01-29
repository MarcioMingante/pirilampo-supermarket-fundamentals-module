const stockProducts = require('./data.json');

const getLowStockProducts = () => {
  let lowInStock = [];
  let stock = stockProducts;

  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stock[index].quantityInStock > 0 && stock[index].quantityInStock <= 10) {
      lowInStock.push(`${stock[index].productName}: ${stock[index].quantityInStock} unidades`);
    }
  }

  return lowInStock;
};

console.log(getLowStockProducts());

module.exports = { getLowStockProducts };
