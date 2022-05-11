const path = require('path')
const multer = require('multer')

const Storage = multer.diskStorage({
	destination: 'Images',
	filename: (req, file, cb) => {
		const ext = path.extname(file.originalname)
		cb(null, `${Date.now()}${ext}`)
	},
})

const upload = multer({
	storage: Storage,
})

module.exports = upload
