const Joi = require("joi")
const productModel = require("../models/productModel")

const productSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    img: Joi.string().required()
})

const getProduct = async(req, res) => {
    try {
        const result = await productModel.find().limit(10)
        console.log(result);
        res.json({
            message: "Find succes",
            data: result
        })
    } catch (error) {
        res.status(400)
        res.json({
            message: "Find failed",
            error
        })
    }
}

const posProduct = async (req, res) => {
    const { error } = await productSchema.validate(req.body)
    if(!error) {
        productModel.create(req.body)
        res.json({
            message: "Insert succes",
        })
    } else {
        res.status(400)
        res.json({
            message: "Insert failed",
            error
        })
    }
}

module.exports = { getProduct, posProduct }