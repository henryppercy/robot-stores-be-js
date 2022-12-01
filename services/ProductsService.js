const dbService = require('../services/dbService');
const productsValidator = require('../services/validators/ProductsValidator');

let productCollection = null;

dbService.connectToDB()
    .then((db) => productCollection = db.collection('products'));

const getProducts = async () => {
    return await productCollection.find( {} ).toArray()
        .then((products) => (products))
        .then((products) => {
            return {
                message: "Products successfully received.",
                success: 1,
                data: products,
            };
        });
}

const getProduct = async (id) => {
    return await productCollection.find( { 'id' : parseInt(id) } ).toArray()
        .then((product) => (product))
        .then((product) => {
            return {
                message: "Product successfully received.",
                success: 1,
                data: product,
            };
        });
}

module.exports.getProducts = getProducts;
module.exports.getProduct = getProduct;
