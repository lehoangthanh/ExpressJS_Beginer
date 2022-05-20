const router = require('express').Router()
const multer = require('multer')
const fs = require('fs')

const userController = require('@controllers/usersController')

const allowAvatarFileTypes = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif']
const upload = multer({
	dest: process.env.PATH_UPLOAD_AVATAR,
})

router.post(
	'/',
	upload.single('avatar'),
	/* eslint consistent-return: 0 */
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
	},
	userController.addUser
)

router.get('/', userController.userList)

router.get('/:id', userController.userID)

router.delete('/:id', userController.deleteUserID)

router.put('/:id', userController.updateUserID)

module.exports = router
