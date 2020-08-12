const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Offers = new Schema({
	name: { type: String, maxLength: 255 },
	rating: { type: String, maxLength: 255 },
	description: { type: String, maxLength: 255 },
	discount: { type: String, maxLength: 255 },
	imageSource: { type: String, maxLength: 255 },
});

module.exports = mongoose.model("offers", Offers);
