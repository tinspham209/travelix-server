const express = require("express");
const app = express();
const PORT = 5000;

const db = require("./config/db");

// Connect to db
db.connect();

app.use(express.json());

app.get("/", (req, res) => {
	res.send("Hello from Homepage");
});

app.listen(PORT, () =>
	console.log(`Server Running on port: http://localhost:${PORT}`)
);
