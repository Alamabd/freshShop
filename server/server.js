const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const product = require('./src/router/product')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
mongoose.connect('mongodb://127.0.0.1:27017/freshshop')
  .then(() => console.log('Mongo Connected!'))
  .catch(() => console.log('Mongo Disconnected!'))

app.use('/product', product)

app.listen(port, () => {
    console.log(`server run in http://localhost${port}`)
})