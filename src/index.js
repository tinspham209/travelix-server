const express = require("express");
const app = express();
const PORT = 5000;

const route = require("./routes");

const db = require("./config/db");
// Connect to db
db.connect();

app.use(express.json());

route(app);

app.listen(PORT, () =>
	console.log(`Server Running on port: http://localhost:${PORT}`)
);
