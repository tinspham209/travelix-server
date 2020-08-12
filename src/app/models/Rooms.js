const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Rooms = new Schema({
	name: { type: String, maxLength: 255 },
	price: { type: String, maxLength: 255 },
	description: { type: String, maxLength: 255 },
	imageSource: { type: String, maxLength: 255 },
	imgAlt: { type: String, maxLength: 255 },
});

module.exports = mongoose.model("rooms", Rooms);
