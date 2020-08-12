const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Hotels = new Schema({
	name: { type: String, maxLength: 255 },
	price: { type: String, maxLength: 255 },
	rating: { type: String, maxLength: 255 },
	imageSource: { type: String, maxLength: 255 },
	imgAlt: { type: String, maxLength: 255 },
});

module.exports = mongoose.model("hotels", Hotels);
