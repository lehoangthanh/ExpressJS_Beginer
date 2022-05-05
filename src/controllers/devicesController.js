class DeviceController {
	get(res) {
		res.json({
			date: new Date(),
		})
	}
}
module.exports = new DeviceController()
