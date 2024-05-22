const Joi = require("joi")
const userModel = require("../models/userModel")
const bcrypt = require('bcrypt')

const salt = process.env.SALT_ROUNDS || 5

const userSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
    phone: Joi.string().required().min(11),
})

const userPost = async (req, res) => {
    const { error } = userSchema.validate(req.body)
    const hash = await bcrypt.hash(req.body.password, parseInt(salt))
    if (!error) {
        const result = await userModel.create({...req.body, password: hash})
        res.json({
            message: "Register success",
            details: {
                id: result._id
            }
        })
    } else {
        res.status(400)
        res.json({
            message: "Register failed", 
            details: {
                field: error.details[0].path,
                reason: error.details[0].type
            }
        })
    }
}

module.exports = { userPost }
