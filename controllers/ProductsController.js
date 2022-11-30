const productsService = require('../services/productsService');

const getProducts = (req, res) => {
    console.log('Products controller: getProducts');
    productsService.getProducts()
        .then((products) => res.json(products));
}

const getProduct = (req, res) => {
    console.log('Products controller: getProduct');
    let id = req.params.id;
    productsService.getProduct(id)
        .then((product) => res.json(product));
}

module.exports.getProducts = getProducts;
module.exports.getProduct = getProduct;
