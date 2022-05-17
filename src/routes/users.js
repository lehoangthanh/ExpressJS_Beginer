const router = require('express').Router()

const userController = require('@controllers/usersController')

const multer = require('multer')

const allowAvatarFileTypes = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif']
const upload = multer({
	dest: process.env.PATH_UPLOAD_AVATAR,
	fileFilter: (req, file, cb) => {
		if (allowAvatarFileTypes.indexOf(file.mimetype) > -1) {
			cb(null, true)
		}
		cb(null, false)
		cb(new Error(`Only ${allowAvatarFileTypes.join()} format allowed!`))
	},
})

router.post('/', upload.single('avatar'), userController.addUser)

router.get('/', userController.userList)

router.get('/:id', userController.userID)

router.delete('/:id', userController.deleteUserID)

router.put('/:id', userController.updateUserID)

module.exports = router
