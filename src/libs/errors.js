const allowAvatarFileTypes = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif']

const ERROR_KEYS = {
	E11000: '11000',
	CUS_0009: 'CUS_0009',
}

const ERROR_VALUES = {
	[ERROR_KEYS.E11000]: 'The email must be unique',
	[ERROR_KEYS.CUS_0009]: `Only ${allowAvatarFileTypes.join()} format allowed!`,
}

const parserErorCodeToMessage = (code) => {
	return ERROR_VALUES[code] ? ERROR_VALUES[code] : 'System Error.'
}

const parserErorResponse = (error) => {
	const { code, keyValue } = error
	if (code === undefined || keyValue === undefined) {
		return error
	}
	const errField = keyValue ?? Object.keys(keyValue)[0]
	const errMess = parserErorCodeToMessage(code)
	const errObj = {
		errors: [
			{
				[errField]: errMess,
			},
		],
		message: errMess,
	}
	return errObj
}

module.exports = {
	ERROR_KEYS,
	ERROR_VALUES,
	parserErorCodeToMessage,
	parserErorResponse,
}
