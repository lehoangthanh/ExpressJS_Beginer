const { Book } = require('@models/booksModel')
const BooksService = require('@services/booksService')

const bookController = {
	addBook: async (req, res) => {
		try {
			let fileName = ''
			if (req.file !== undefined) {
				fileName = await BooksService.uploadAvatar(req.file)
			}
			const newBook = new Book({
				name: req.body.name,
				description: req.body.description,
				author: req.body.author,
				type: req.body.type,
				avatar: fileName,
			})
			const savedBook = await newBook.save()
			res.status(200).json(savedBook)
		} catch (err) {
			res.status(500).json(err)
		}
	},
	bookList: async (req, res) => {
		try {
			const users = await Book.find()
			res.status(200).json(users)
		} catch (error) {
			res.status(500).json(error)
		}
	},
	bookID: async (req, res) => {
		try {
			const user = await Book.findById(req.params.id)
			res.status(200).json(user)
		} catch (error) {
			res.status(500).json(error)
		}
	},
	deleteBookID: async (req, res) => {
		try {
			await Book.findByIdAndDelete(req.params.id)
			res.status(200).json('DELETE SUCCESS')
		} catch (error) {
			res.status(500).json(error)
		}
	},
	updateBookID: async (req, res) => {
		try {
			await Book.findByIdAndUpdate(req.params.id, {
				$set: req.body,
			})
			res.status(200).json('UPDATE SUCCESS')
		} catch (error) {
			res.status(500).json(error)
		}
	},
}

module.exports = bookController
