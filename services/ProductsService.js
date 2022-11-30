const productsRepository = require('../repositories/productsRepository');

const getProducts = async () => {
    console.log('Service: getProducts');
    return await productsRepository.getProducts();
}

const getProduct = async (id) => {
    console.log('Service: getProduct ' + id);
    return await productsRepository.getProduct(id);
}

module.exports.getProducts = getProducts;
module.exports.getProduct = getProduct;
