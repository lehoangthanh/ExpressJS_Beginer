class DeviceController {
	get(req, res) {
		res.json({
			date: new Date(),
		})
	}
}
module.exports = new DeviceController()
