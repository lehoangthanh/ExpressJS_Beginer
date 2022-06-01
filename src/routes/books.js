const router = require('express').Router()
const multer = require('multer')
const fs = require('fs')

const bookController = require('@controllers/booksController')

const allowAvatarFileTypes = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif']
const upload = multer({
	dest: process.env.PATH_UPLOAD_AVATAR,
})

router.post(
	'/',
	upload.single('avatar'),
	(req, res, next) => {
		const { file } = req
		if (file === undefined) {
			return next()
		}
		/* eslint no-unused-vars: 0 */
		upload.fileFilter(req, file, (cb) => {
			if (allowAvatarFileTypes.indexOf(file.mimetype) === -1) {
				const errMess = `Only ${allowAvatarFileTypes.join()} format allowed!`
				fs.unlinkSync(file.path)
				res.status(422).json({
					errors: [
						{
							file_error: errMess,
						},
					],
					message: errMess,
				})
			}
		})
		return next()
	},
	bookController.addBook
)

router.get('/', bookController.bookList)

router.get('/:id', bookController.bookID)

router.delete('/:id', bookController.deleteBookID)

router.put('/:id', bookController.updateBookID)

module.exports = router
