const Hotels = require("../models/Hotels");

const { multipleMongooseToObject } = require("../../util/mongoose");

class HotelsControllers {
	// [GET] /
	index(req, res, next) {
		Hotels.find({}).then((hotels) => {
			res.send({ hotels: multipleMongooseToObject(hotels) });
		});
	}

	// [GET] /hotels/:slug
	show(req, res) {
		res.send("Slug Detail");
	}
}

module.exports = new HotelsControllers();
