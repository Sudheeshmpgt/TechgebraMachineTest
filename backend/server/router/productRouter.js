const route = require('express').Router()
const {addNewProduct, getProductDetails} = require('../controller/productController')

route.post('/', addNewProduct);
route.get('/',getProductDetails)

module.exports = route;