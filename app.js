require('dotenv').config()
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const deviceRouter = require('@routes/devices')
const userRouter = require('@routes/users')
const bookRouter = require('@routes/books')
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
app.use(cookieParser())
const apiRouteName = '/v1/api'

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'public')))

app.use(`${apiRouteName}/devices`, deviceRouter)
app.use(`${apiRouteName}/users`, userRouter)
app.use(`${apiRouteName}/books`, bookRouter)

module.exports = app
