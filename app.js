require('dotenv').config()
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const deviceRouter = require('@routes/devices')
const userRouter = require('@routes/users')
const bodyParser = require('body-parser')
const cors = require('cors')

mongoose.connect(process.env.DB_HOST, {
	auth: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
	},
	dbName: process.env.DB_NAME,
})
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function callback() {
	console.log('h')
})

const app = express()
app.use(cors())

const apiRouteName = '/v1/api'

app.use(bodyParser.json())

app.use(`${apiRouteName}/devices`, deviceRouter)
app.use(`${apiRouteName}/users`, userRouter)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

module.exports = app
