require('dotenv').config()
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')

const deviceRouter = require('@routes/devices')

const app = express()
const apiRouteName = '/v1/api'

app.use(`${apiRouteName}/devices`, deviceRouter)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

module.exports = app
