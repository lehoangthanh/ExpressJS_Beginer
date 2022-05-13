const router = require('express').Router()
const userController = require('@controllers/usersController')
const upload = require('../multer/upload')

router.post('/', upload.single('avartar'), userController.addUser)

router.get('/', userController.userList)

router.get('/:id', userController.userID)

router.delete('/:id', userController.deleteUserID)

router.put('/:id', userController.updateUserID)

module.exports = router
