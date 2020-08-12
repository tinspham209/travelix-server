const Hotels = require("../models/Hotels");

const { multipleMongooseToObject } = require("../util/mongoose");

class HotelsControllers {
	// [GET] /
	index(req, res, next) {
		Hotels.find({}).then((hotel) => {
			res.send({ hotel: multipleMongooseToObject(hotel) });
		});
	}
}

module.exports = new HotelsControllers();
