const hotelsRouter = require("./hotels");
const offersRouter = require("./offers");
const roomsRouter = require("./rooms");

function route(app) {
	app.use("/hotels", hotelsRouter);
	app.use("/offers", offersRouter);
	app.use("/rooms", roomsRouter);

	app.get("/", (req, res) => {
		res.send("Hello from Homepage");
	});
}

module.exports = route;
