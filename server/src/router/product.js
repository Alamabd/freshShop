const { getProduct, posProduct } = require('../controllers/productController')
const routers = require('express').Router()

routers.get('/', getProduct)
routers.post('/', posProduct)

module.exports = routers