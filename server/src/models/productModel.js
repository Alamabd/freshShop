const { number } = require('joi')
const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: String,
    img: String,
    price: Number,
    rating: Number
})

const productModel = mongoose.model('product', productSchema)
module.exports = productModel