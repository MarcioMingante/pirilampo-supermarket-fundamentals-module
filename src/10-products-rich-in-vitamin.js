const stockProducts = require('./data.json');

const getProductsRichInVitamin = () => {
  let richInVitamin = [];

  for (let index = 0; index < stockProducts.length; index += 1) {
    let product = {
    };

    let vitamins = stockProducts[index].nutritionalInfo.vitamins;
    if (vitamins) {
      product.description = stockProducts[index].description;
      product.formattedPrice = `R$ ${stockProducts[index].price}`;
      
      let vitaminsArray = Object.entries(vitamins).map(([name, number]) => `${name} - ${number}`);

      product.vitaminsInformation = vitaminsArray;

      richInVitamin.push(product);
    }
  }
  return richInVitamin;
};

console.log(getProductsRichInVitamin());

module.exports = { getProductsRichInVitamin };
