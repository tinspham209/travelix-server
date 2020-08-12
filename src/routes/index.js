const hotelsRouter = require("./hotels");
const offersRouter = require("./offers");

function route(app) {
	app.use("/hotels", hotelsRouter);
	app.use("/offers", offersRouter);
	app.get("/", (req, res) => {
		res.send("Hello from Homepage");
	});
}

module.exports = route;
