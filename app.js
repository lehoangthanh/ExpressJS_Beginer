require('dotenv').config()
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')

const app = express()
app.get('/', (req, res) => {
  res.json({ date: new Date() })
})
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

module.exports = app
