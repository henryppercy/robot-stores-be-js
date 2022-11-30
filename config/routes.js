const productsController = require('../controllers/ProductsController');

const routes = (app) => {
    app.get('/products', productsController.getProducts)
    app.get('/products/:id', productsController.getProduct)
}

module.exports = routes;
