const hotelsRouter = require("./hotels");

function route(app) {
	app.use("/hotels", hotelsRouter);
	app.get("/", (req, res) => {
		res.send("Hello from Homepage");
	});
}

module.exports = route;
