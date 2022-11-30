const productsRepository = require('../repositories/productsRepository');

const getProducts = async () => {
    console.log('Service: getProducts');
    return await productsRepository.getProducts();
}

module.exports.getProducts = getProducts;
