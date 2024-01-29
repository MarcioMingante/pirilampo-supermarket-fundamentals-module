const stockProducts = require('./data.json');

const getProductsWithAllergyOrIntoleranceInfo = () => {
  let productsWarning = [];

  for (let index = 0; index < stockProducts.length; index += 1) {
    let product = {
      description: '',
      formattedPrice: '',
    };
    product.description = stockProducts[index].description;
    product.formattedPrice = `R$ ${stockProducts[index].price}`;
    if (stockProducts[index].allergyOrIntolerance) {
      let message = `Pode conter: ${stockProducts[index].allergyOrIntolerance.join(' ')}`;
      product.allergyOrIntoleranceMessage = message;
    }
    productsWarning.push(product);
  }
  return productsWarning;
};

console.log(getProductsWithAllergyOrIntoleranceInfo());

module.exports = { getProductsWithAllergyOrIntoleranceInfo };
