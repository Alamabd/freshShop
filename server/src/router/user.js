const { userPost } = require('../controllers/userController')

const router = require('express').Router()

router.post('/', userPost)

module.exports = router