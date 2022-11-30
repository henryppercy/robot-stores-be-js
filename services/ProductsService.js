const dbService = require('../services/dbService');
const productsValidator = require('../services/validators/ProductsValidator')
const {validateProductId} = require("./validators/ProductsValidator");

let productCollection = null;

dbService.connectToDB()
    .then((db) => productCollection = db.collection('products'));

const getProducts = async () => {
    return await productCollection.find( {} ).toArray();
}

const getProduct = async (id) => {
    return await productCollection.find( { 'id' : parseInt(id) } ).toArray();
}

module.exports.getProducts = getProducts;
module.exports.getProduct = getProduct;
