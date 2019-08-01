
const sequence = {
    _id: 1,
    get id(){
        return this._id++;
    }
}

const listProducts = {}

function saveProduct(product) {
    
    if(!product.id) product.id = sequence.id
    listProducts[product.id] = product
    return product;
}

function getProduct(id) {
    return listProducts[id] || {};
}

function getProducts(){
    return Object.values(listProducts);
}

function deleteProduct(id) {
    const product = listProducts[id];
    delete listProducts[id];
    return product;
}
module.exports = { saveProduct, getProducts, getProduct, deleteProduct};