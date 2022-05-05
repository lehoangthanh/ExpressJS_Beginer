require('dotenv').config()
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')

const deviceRouter = require('@routes/devices')
const userRouter = require('@routes/users')

// mongoose.connect('mongodb://localhost/devices')

mongoose.connect(process.env.BASE_URL, () => {
	console.log('Connected to MongoDB')
})

const app = express()
const apiRouteName = '/v1/api'

app.use(`${apiRouteName}/devices`, deviceRouter)
app.use(`${apiRouteName}/users`, userRouter)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

module.exports = app
