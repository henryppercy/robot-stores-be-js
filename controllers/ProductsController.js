const productsService = require('../services/ProductsService');

const getProducts = (req, res) => {
    productsService.getProducts()
        .then((products) => res.json(products));
}

const getProduct = (req, res) => {
    let id = req.params.id;
    productsService.getProduct(id)
        .then((product) => res.json(product));
}

module.exports.getProducts = getProducts;
module.exports.getProduct = getProduct;
