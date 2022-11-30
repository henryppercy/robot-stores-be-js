const dbService = require('../services/dbService');

let productCollection = null;
dbService.connectToDB()
    .then((db) => productCollection = db.collection('products'));

const getProducts = async () => {
    console.log('Repository: getProducts')
    return await productCollection.find( {} ).toArray();
}

const getProduct = async (id) => {
    console.log('Repository: getProduct')
    return await productCollection.find( {"id" : parseInt(id)} ).toArray();
}

module.exports.getProducts = getProducts;
module.exports.getProduct = getProduct;
