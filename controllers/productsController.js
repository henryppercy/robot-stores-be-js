const productsService = require('../services/productsService');

const getProducts = (req, res) => {
    console.log('Products controller: getProducts');
    productsService.getProducts()
        .then((products) => res.json(products));
}

module.exports.getProducts = getProducts;
