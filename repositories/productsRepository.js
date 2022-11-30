const dbService = require('../services/dbService');
const objectId = require('mongodb').ObjectId;

let productCollection = null;
dbService.connectToDB()
    .then((db) => productCollection = db.collection('products'));

const getProducts = async () => {
    console.log('Repository: getProducts')
    return await productCollection.find({}).toArray();
}

module.exports.getProducts = getProducts;
