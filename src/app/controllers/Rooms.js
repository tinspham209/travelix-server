const Rooms = require("../models/Rooms");

const { multipleMongooseToObject } = require("../../util/mongoose");

class RoomsControllers {
	// [GET] /
	index(req, res, next) {
		Rooms.find({}).then((room) => {
			res.send({ room: multipleMongooseToObject(room) });
		});
	}

	// [GET] /Rooms/:slug
	show(req, res) {
		res.send("NOT FOUND Rooms Detail");
	}
}

module.exports = new RoomsControllers();
