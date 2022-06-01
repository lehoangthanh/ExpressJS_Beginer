const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
	},
	author: {
		type: String,
	},
	avatar: {
		type: String,
	},
	type: {
		type: Number,
	},
})

const Book = mongoose.model('Book', bookSchema)

module.exports = { Book }
