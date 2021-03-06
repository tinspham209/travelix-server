const Offers = require("../models/Offers");

const { multipleMongooseToObject } = require("../../util/mongoose");

class OffersControllers {
	// [GET] /
	index(req, res, next) {
		Offers.find({}).then((offers) => {
			res.send({ offers: multipleMongooseToObject(offers) });
		});
	}

	// [GET] /offers/:slug
	show(req, res) {
		res.send("NOT FOUND Offers Detail");
	}
}

module.exports = new OffersControllers();
