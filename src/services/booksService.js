const fs = require('fs')

class BooksService {
	/**
	 *
	 * @param {*} file
	 * @returns bool | string
	 */
	async uploadAvatar(file) {
		if (file === undefined) return false
		if (!fs.existsSync(process.env.PATH_UPLOAD_AVATAR)) {
			fs.mkdirSync(process.env.PATH_UPLOAD_AVATAR)
		}
		const fileName = `${file.filename}_${file.originalname}`
		console.log(fileName)
		console.log(file.path)
		console.log(`${process.env.PATH_UPLOAD_AVATAR}${fileName}`)
		fs.copyFileSync(
			file.path,
			`${process.env.PATH_UPLOAD_AVATAR}${fileName}`,
			fs.constants.COPYFILE_EXCL
		)
		fs.unlinkSync(file.path)
		return fileName
	}
}

module.exports = new BooksService()
