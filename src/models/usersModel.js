const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	age: {
		type: Number,
	},
	address: {
		type: String,
	},
	gender: {
		type: String,
	},
	email: {
		type: String,
	},
	avatar: {
		type: String,
	},
})

const User = mongoose.model('User', userSchema)

module.exports = { User }
