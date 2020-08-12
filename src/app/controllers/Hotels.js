const Hotels = require("../models/Hotels");

const { multipleMongooseToObject } = require("../../util/mongoose");

class HotelsControllers {
	// [GET] /
	index(req, res, next) {
		Hotels.find({}).then((hotel) => {
			res.send({ hotel: multipleMongooseToObject(hotel) });
		});
	}

	// [GET] /hotels/:slug
	show(req, res) {
		res.send("Slug Detail");
	}
}

module.exports = new HotelsControllers();
