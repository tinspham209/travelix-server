const Rooms = require("../models/Rooms");

const { multipleMongooseToObject } = require("../../util/mongoose");

class RoomsControllers {
	// [GET] /
	index(req, res, next) {
		Rooms.find({}).then((rooms) => {
			res.send({ rooms: multipleMongooseToObject(rooms) });
		});
	}

	// [GET] /Rooms/:slug
	show(req, res) {
		res.send("NOT FOUND Rooms Detail");
	}
}

module.exports = new RoomsControllers();
